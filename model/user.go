package model

import (
	"time"

	"github.com/dgrijalva/jwt-go"
)

// User Model
type User struct {
	ID             uint64    `gorm:"column:id;PRIMARY_KEY;AUTO_INCREMENT;NOT NULL;"`
	Name           string    `gorm:"column:name;" json:"user_name"`
	Email          string    `gorm:"column:email;" json:"user_email"`
	Password       string    `gorm:"column:password;" json:"password"`
	PasswordRepeat string    `sql:"-" json:"password_repeat"`
	Token          string    `json:"token"`
	Date           time.Time `gorm:"column:date;DEFAULT:current_timestamp"`
}

// TableName returns user's table name
func (User) TableName() string {
	return "user"
}

//Token struct
type Token struct {
	UserID uint64
	jwt.StandardClaims
}
