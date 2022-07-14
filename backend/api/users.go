package api

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// User struct
type User struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Blogs []Blog `json:"blogs"`
}

// createUserRequest struct
type createUserRequest struct {
	Name string `json:"name"`
}

// updateUserRequest struct
type updateUserRequest struct {
	Name string `json:"name"`
}

// getUsers returns all users
func (s *Server) getUsers(c *gin.Context) {
	c.JSON(200, s.db.Users)
}

// createUser creates a new user
func (s *Server) createUser(c *gin.Context) {
	var request createUserRequest
	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user := User{
		ID:    len(s.db.Users) + 1,
		Name:  request.Name,
		Blogs: []Blog{},
	}
	s.db.Users = append(s.db.Users, user)

	c.JSON(http.StatusCreated, user)
}

// getUser returns a user by id
func (s *Server) getUser(c *gin.Context) {
	_id := c.Param("id")
	id, err := strconv.Atoi(_id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user := s.db.Users[id]
	c.JSON(http.StatusOK, user)
}

// updateUser updates a user by id
func (s *Server) updateUser(c *gin.Context) {
	_id := c.Param("id")
	id, err := strconv.Atoi(_id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	var request updateUserRequest
	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user := s.db.Users[id]
	user.Name = request.Name
	s.db.Users[id] = user
	c.JSON(http.StatusOK, user)
}

// deleteUser deletes a user by id
func (s *Server) deleteUser(c *gin.Context) {
	_id := c.Param("id")
	id, err := strconv.Atoi(_id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	s.db.Users = append(s.db.Users[:id], s.db.Users[id+1:]...)
	c.JSON(http.StatusOK, gin.H{"message": "user deleted"})
}
