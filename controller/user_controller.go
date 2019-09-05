package controller

import (
	"os"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/jinzhu/gorm"
	"github.com/s3f4/languous/logger"
	"github.com/s3f4/languous/model"
	u "github.com/s3f4/languous/util"
	"golang.org/x/crypto/bcrypt"
)

type UserC struct {
	*BaseC
}

//Create User
func (uc *UserC) Create(user *model.User) (map[string]interface{}, bool) {
	uc.Connect()
	defer uc.Close()

	if resp, ok := uc.Validate(user); !ok {
		return resp, false
	}

	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	user.Password = string(hashedPassword)

	uc.DB.Create(user)

	if user.ID <= 0 {
		return u.Message(false, "Failed to create account, connection error."), false
	}

	//Create new JWT token for the newly registered account
	tk := &model.Token{UserID: user.ID}
	token := jwt.NewWithClaims(jwt.GetSigningMethod("HS256"), tk)
	tokenString, _ := token.SignedString([]byte(os.Getenv("token_password")))
	user.Token = tokenString

	user.Password = ""
	user.PasswordRepeat = ""
	response := u.Message(true, "Account has been created")
	response["user"] = user
	return response, true
}

//Validate incoming user details...
func (uc *UserC) Validate(user *model.User) (map[string]interface{}, bool) {
	if !strings.Contains(user.Email, "@") {
		return u.Message(false, "Email address is required"), false
	}

	if len(user.Name) == 0 {
		return u.Message(false, "User Name can not be blank"), false
	}

	if len(user.Password) < 6 {
		return u.Message(false, "Password can not be less than 6"), false
	}

	if user.Password != user.PasswordRepeat {
		return u.Message(false, "Password and Password Repeat is not equal"), false
	}

	//uc.Connect()
	//defer uc.Close()

	//Email must be unique
	temp := &model.User{}

	//check for errors and duplicate emails
	err := uc.DB.Table("user").Where("user_email = ?", user.Email).First(temp).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		logger.Info(err.Error())
		return u.Message(false, "Connection error. Please retry"), false
	}
	if temp.Email != "" {
		return u.Message(false, "Email address already in use by another user."), false
	}

	return u.Message(false, "Requirement passed"), true
}

// Login user
func (uc *UserC) Login(email, password string) (map[string]interface{}, bool) {
	uc.Connect()
	defer uc.Close()
	user := &model.User{}
	err := uc.DB.Table("user").Where("user_email = ?", email).First(user).Error
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return u.Message(false, "Email address not found"), false
		}
		return u.Message(false, "Connection error. Please retry"), false
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword { //Password does not match!
		return u.Message(false, "Invalid login credentials. Please try again"), false
	}
	//Worked! Logged In
	user.Password = ""

	//Create JWT token
	tk := &model.Token{UserID: user.ID}
	token := jwt.NewWithClaims(jwt.GetSigningMethod("HS256"), tk)
	tokenString, _ := token.SignedString([]byte(os.Getenv("token_password")))
	user.Token = tokenString //Store the token in the response

	resp := u.Message(true, "Logged In")
	resp["user"] = user
	return resp, true
}

//GetUser
func (uc *UserC) GetUser(u uint) *model.User {
	uc.Connect()
	defer uc.Close()

	user := &model.User{}
	uc.DB.Table("user").Where("user_id = ?", u).First(user)
	if user.Email == "" { //User not found!
		return nil
	}

	user.Password = ""
	return user
}
