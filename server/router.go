package main

import (
	"github.com/gin-gonic/gin"
	"io"
	"os"
	"server/handler"
	"server/middleware"
)

//router
var router *gin.Engine

func InitRouter() *gin.Engine{
	router := gin.New()

	userHandler := handler.NewUserHandler()
	wordHandler := handler.NewWordHandler()

	f, _ := os.Create("log/gin.log")
	gin.DefaultWriter = io.MultiWriter(f)

	router.Use(gin.Logger())
	router.Use(middleware.ErrorMiddleware())


	router.POST("/u/register", userHandler.Register)
	router.POST("/u/login", userHandler.Login)

	router.GET("/words",wordHandler.GetAll)
	router.GET("/words/:word_id",wordHandler.Get)

	router.Use(middleware.JwtAuthentication())

	router.POST("/words",wordHandler.Add)
	router.PUT("/words",wordHandler.Update)
	router.DELETE("words/:word_id",wordHandler.Delete)

	router.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{"success": "false", "message": "Page not found"})
	})

	return router

}