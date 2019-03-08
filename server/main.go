package main

import (
	"server/config"
	"server/middleware"
)

func init() {
	middleware.GError = config.Load()
}

func main() {
	router := InitRouter()
	router.Run(":8081")
}
