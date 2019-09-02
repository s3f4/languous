package main

import (
	"io"
	"os"
	"github.com/s3f4/languous/handler"
	"github.com/s3f4/languous/middleware"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

//router
var router *gin.Engine

//InitRouter initializes routes
func InitRouter() *gin.Engine {
	router := gin.New()

	userHandler := handler.NewUserHandler()
	wordHandler := handler.NewWordHandler()

	f, _ := os.Create("log/gin.log")
	gin.DefaultWriter = io.MultiWriter(f)

	router.Use(gin.Logger())
	router.Use(middleware.ErrorMiddleware())
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "PUT", "POST", "DELETE"},
		AllowHeaders:     []string{"Origin", "Authorization", "Content-Type"},
		MaxAge:           50 * time.Second,
		AllowCredentials: true,
	}))

	router.POST("/u/signup", userHandler.Signup)
	router.POST("/u/login", userHandler.Login)

	router.GET("/words", wordHandler.GetAll)
	router.GET("/words/:word_id", wordHandler.Get)

	router.Use(middleware.JwtAuthentication())

	router.POST("/words", wordHandler.Add)
	router.PUT("/words/:word_id", wordHandler.Update)
	router.DELETE("words/:word_id", wordHandler.Delete)

	router.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{"success": "false", "message": "Page not found"})
	})

	return router

}
