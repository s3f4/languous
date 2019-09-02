package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/s3f4/languous/config"
	log "github.com/s3f4/languous/logger"
)

//GError is a global error object using for use return all errors client
var GError error

//ErrorMiddleware init error detecting
var ErrorMiddleware = func() gin.HandlerFunc {
	conf := config.Config
	var message string
	return func(c *gin.Context) {
		if GError != nil {
			log.Error(GError.Error())

			if conf["APP_ENV"] != "production" {
				message = GError.Error()
			} else {
				message = "Internal Server Error"
			}

			c.Abort()
			c.JSON(http.StatusServiceUnavailable, map[string]string{
				"error": message,
			})
		}
	}
}
