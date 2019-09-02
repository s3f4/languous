package util

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

//Message write message for response
func Message(status bool, message string) map[string]interface{} {
	return map[string]interface{}{"status": status, "message": message}
}

//SendResponse returns a json object
func SendResponse(c *gin.Context,httpStatus interface{}, data map[string]interface{}) {
	c.Header("Content-Type", "application/json  charset=utf-8")
	if httpStatus!= nil{
		c.JSON(httpStatus.(int),data)
	}else{
		c.JSON(http.StatusOK,data)
	}
}