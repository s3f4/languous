package middleware

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"server/config"
	log "server/logger"
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
