package handler

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"net/http"
	"server/controller"
	"server/logger"
	"server/model"
	u "server/util"
	"time"
)

//UserHandler struct
type UserHandler struct{}

var userHandler *UserHandler

var userController *controller.UserC

//NewUserHandler
func NewUserHandler() *UserHandler{
	if userController == nil{
		userController = controller.UserController
	}
	if userHandler == nil{
		userHandler = new(UserHandler)
	}
	return userHandler
}


//Register method
func (UserHandler) Signup(c *gin.Context) {
	time.Sleep(time.Second*3)
	user := &model.User{}
	err := json.NewDecoder(c.Request.Body).Decode(user)
	if err != nil {
		logger.Error(err.Error())
		u.SendResponse(c,http.StatusUnprocessableEntity, u.Message(false, "Invalid request"))
		return
	}

	resp,isAcceptable := userController.Create(user) //Create account
	if(!isAcceptable){
		u.SendResponse(c,http.StatusUnprocessableEntity, resp)
	}

	u.SendResponse(c,nil, resp)

}

//Login method
func (UserHandler) Login(c *gin.Context) {
	user := &model.User{}
	err := json.NewDecoder(c.Request.Body).Decode(user)
	if err != nil {
		u.SendResponse(c,nil, u.Message(false, "Invalid request"))
		return
	}

	userController := controller.UserController
	resp := userController.Login(user.UserEmail, user.Password)
	u.SendResponse(c,nil, resp)
}
