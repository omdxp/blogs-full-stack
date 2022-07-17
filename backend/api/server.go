package api

import "github.com/gin-gonic/gin"

// DB struct
type DB struct {
	Users    []User
	Blogs    []Blog
	Comments []Comment
}

// Server serves HTTP requests for blog service
type Server struct {
	db     *DB
	router *gin.Engine
}

// NewServer creates a new HTTP server and setup routing
func NewServer() (*Server, error) {
	s := &Server{
		db: &DB{
			Users:    []User{},
			Blogs:    []Blog{},
			Comments: []Comment{},
		},
		router: gin.Default(),
	}
	s.setupRouter()
	return s, nil
}

// setupRouter sets up routing
func (s *Server) setupRouter() {
	users := s.router.Group("/users")
	users.GET("/", s.getUsers)
	users.POST("/", s.createUser)
	users.GET("/:id", s.getUser)
	users.PUT("/:id", s.updateUser)
	users.DELETE("/:id", s.deleteUser)

	blogs := s.router.Group("/blogs")
	blogs.GET("/", s.getBlogs)
	blogs.GET("/author/:id", s.getBlogsByAuthorID)
	blogs.POST("/", s.createBlog)
	blogs.GET("/:id", s.getBlog)
	blogs.PUT("/:id", s.updateBlog)
	blogs.DELETE("/:id", s.deleteBlog)

	comments := s.router.Group("/comments")
	comments.GET("/", s.getComments)
	comments.POST("/", s.createComment)
	comments.GET("/:id", s.getComment)
	comments.PUT("/:id", s.updateComment)
	comments.DELETE("/:id", s.deleteComment)
}

// Start run the HTTP server on a specific address
func (s *Server) Start(addr string) error {
	return s.router.Run(addr)
}
