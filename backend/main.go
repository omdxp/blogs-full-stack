package main

import (
	"log"

	api "github.com/Omar-Belghaouti/blog-full-stack/backend/api"
)

func main() {
	server, err := api.NewServer()
	if err != nil {
		log.Fatal(err)
	}

	err = server.Start(":8080")
	if err != nil {
		log.Fatal(err)
	}
}
