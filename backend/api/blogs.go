package api

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// Blog struct
type Blog struct {
	ID       int       `json:"id"`
	Title    string    `json:"title"`
	Body     string    `json:"body"`
	Author   User      `json:"author"`
	Comments []Comment `json:"comments"`
}

// createBlogRequest struct
type createBlogRequest struct {
	Title    string `json:"title"`
	Body     string `json:"body"`
	AuthorID int    `json:"author_id"`
}

// updateBlogRequest struct
type updateBlogRequest struct {
	Title    string `json:"title"`
	Body     string `json:"body"`
	AuthorID int    `json:"author_id"`
}

// getBlogs returns all blogs
func (s *Server) getBlogs(c *gin.Context) {
	c.JSON(http.StatusOK, s.db.Blogs)
}

// createBlog creates a new blog
func (s *Server) createBlog(c *gin.Context) {
	var request createBlogRequest
	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Get author from db and return if not found
	found := false
	for _, user := range s.db.Users {
		if user.ID == request.AuthorID {
			found = true
			break
		}
	}
	if !found {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Author not found"})
		return
	}

	author := s.db.Users[request.AuthorID]

	blog := Blog{
		ID:       len(s.db.Blogs) + 1,
		Title:    request.Title,
		Body:     request.Body,
		Author:   author,
		Comments: []Comment{},
	}
	s.db.Blogs = append(s.db.Blogs, blog)

	c.JSON(http.StatusCreated, blog)
}

// getBlog returns a blog by id
func (s *Server) getBlog(c *gin.Context) {
	_id := c.Param("id")
	id, err := strconv.Atoi(_id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	blog := s.db.Blogs[id]
	c.JSON(http.StatusOK, blog)
}

// updateBlog updates a blog by id
func (s *Server) updateBlog(c *gin.Context) {
	_id := c.Param("id")
	id, err := strconv.Atoi(_id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	var request updateBlogRequest
	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Get author from db and return if not found
	found := false
	for _, user := range s.db.Users {
		if user.ID == request.AuthorID {
			found = true
			break
		}
	}
	if !found {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Author not found"})
		return
	}

	author := s.db.Users[request.AuthorID]

	blog := Blog{
		Title:  request.Title,
		Body:   request.Body,
		Author: author,
	}
	s.db.Blogs[id] = blog

	c.JSON(http.StatusOK, blog)
}

// deleteBlog deletes a blog by id
func (s *Server) deleteBlog(c *gin.Context) {
	_id := c.Param("id")
	id, err := strconv.Atoi(_id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	blog := s.db.Blogs[id]
	s.db.Blogs = append(s.db.Blogs[:id], s.db.Blogs[id+1:]...)
	c.JSON(http.StatusOK, blog)
}
