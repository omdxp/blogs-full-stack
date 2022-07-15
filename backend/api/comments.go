package api

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// Comment struct
type Comment struct {
	ID     int    `json:"id"`
	Body   string `json:"body"`
	Author int    `json:"author"`
	Blog   int    `json:"blog"`
}

// createCommentRequest struct
type createCommentRequest struct {
	Body   string `json:"body"`
	Author int    `json:"author_id"`
	Blog   int    `json:"blog_id"`
}

// updateCommentRequest struct
type updateCommentRequest struct {
	Body string `json:"body"`
}

// getComments returns all comments
func (s *Server) getComments(c *gin.Context) {
	c.JSON(http.StatusOK, s.db.Comments)
}

// createComment creates a new comment
func (s *Server) createComment(c *gin.Context) {
	var request createCommentRequest
	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Get author from db and return if not found
	found := false
	for _, user := range s.db.Users {
		if user.ID == request.Author {
			found = true
			break
		}
	}
	if !found {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Author not found"})
		return
	}

	// Get blog from db and return if not found
	found = false
	for _, blog := range s.db.Blogs {
		if blog.ID == request.Blog {
			found = true
			break
		}
	}
	if !found {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Blog not found"})
		return
	}

	comment := Comment{
		ID:     len(s.db.Comments) + 1,
		Body:   request.Body,
		Author: request.Author,
		Blog:   request.Blog,
	}
	s.db.Comments = append(s.db.Comments, comment)

	// update blog's comments
	s.db.Blogs[comment.Blog-1].Comments = append(s.db.Blogs[comment.Blog-1].Comments, comment.ID)

	c.JSON(http.StatusOK, comment)
}

// getComment returns a comment
func (s *Server) getComment(c *gin.Context) {
	_id := c.Param("id")
	id, err := strconv.Atoi(_id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	for _, comment := range s.db.Comments {
		if comment.ID == id {
			c.JSON(http.StatusOK, comment)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Comment not found"})
}

// updateComment updates a comment
func (s *Server) updateComment(c *gin.Context) {
	_id := c.Param("id")
	id, err := strconv.Atoi(_id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var request updateCommentRequest
	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// find comment in dd by id
	found := false
	for _, comment := range s.db.Comments {
		if comment.ID == id {
			found = true
			break
		}
	}
	if !found {
		c.JSON(http.StatusNotFound, gin.H{"error": "Comment not found"})
		return
	}

	// update comment
	s.db.Comments[id-1].Body = request.Body
	c.JSON(http.StatusOK, gin.H{"updated": id})
}

// deleteComment deletes a comment
func (s *Server) deleteComment(c *gin.Context) {
	_id := c.Param("id")
	id, err := strconv.Atoi(_id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	for i, comment := range s.db.Comments {
		if comment.ID == id {
			s.db.Comments = append(s.db.Comments[:i], s.db.Comments[i+1:]...)
			// update blog's comments by deleting comment id
			s.db.Blogs[comment.Blog-1].Comments = append(s.db.Blogs[comment.Blog-1].Comments[:i], s.db.Blogs[comment.Blog-1].Comments[i+1:]...)
			c.JSON(http.StatusOK, gin.H{"deleted": id})
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Comment not found"})
}
