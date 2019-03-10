package middleware

import (
	"context"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
	"server/logger"
	"server/model"
	u "server/util"
	"strings"
)

//NoAuth using for global urls
var NoAuth []string

// JwtAuthentication middleware
var JwtAuthentication = func() gin.HandlerFunc {

	return func(c *gin.Context) {
		notAuth := []string{"/u/signup", "/u/login"} //List of endpoints that doesn't require auth
		requestPath := c.Request.URL.String()
		logger.Info(requestPath)

		url := c.Request.URL.String()
		for _, p := range c.Params {
			url = strings.Replace(url, p.Value, ":"+p.Key, 1)
		}

		//check if request does not need authentication, serve the request if it doesn't need it
		for _, value := range notAuth {

			if value == requestPath {
				c.Next()
				return
			}
		}

		response := make(map[string]interface{})

		tokenHeader := c.GetHeader("Authorization") //Grab the token from the header

		if tokenHeader == "" { //Token is missing, returns with error code 403 Unauthorized
			response = u.Message(false, "Missing auth token")
			u.SendResponse(c, http.StatusForbidden, response)
			c.Abort()
			return
		}

		splitted := strings.Split(tokenHeader, " ") //The token normally comes in format `Bearer {token-body}`, we check if the retrieved token matched this requirement
		if len(splitted) != 2 {
			response = u.Message(false, "Invalid/Malformed auth token")
			u.SendResponse(c, http.StatusForbidden, response)
			c.Abort()
			return
		}

		tokenPart := splitted[1] //Grab the token part, what we are truly interested in
		tk := &model.Token{}

		token, err := jwt.ParseWithClaims(tokenPart, tk, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("token_password")), nil
		})

		if err != nil { //Malformed token, returns with http code 403 as usual
			response = u.Message(false, "Malformed authentication token")
			u.SendResponse(c, http.StatusForbidden, response)
			c.Abort()
			return
		}

		if !token.Valid { //Token is invalid, maybe not signed on this server
			response = u.Message(false, "Token is not valid.")
			u.SendResponse(c, http.StatusForbidden, response)
			c.Abort()
			return
		}

		//Everything went well, proceed with the request and set the caller to the user retrieved from the parsed token
		//fmt.Sprintf("User %", tk.UserID) //Useful for monitoring
		ctx := context.WithValue(c.Request.Context(), "user", tk.UserID)
		c.Request = c.Request.WithContext(ctx)
		c.Next()
	}

}
