package main

import (
	"github.com/s3f4/languous/config"
	"github.com/s3f4/languous/middleware"
)

func init() {
	middleware.GError = config.Load()
}

func main() {
	router := InitRouter()
	router.Run(":8080")
}
