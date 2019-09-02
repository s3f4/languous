package model

import (
	"time"

	"github.com/dgrijalva/jwt-go"
)

// User Model
type User struct {
	UserID         uint64    `gorm:"column:user_id;PRIMARY_KEY;AUTO_INCREMENT;NOT NULL;"`
	UserName       string    `gorm:"column:user_name;" json:"user_name"`
	UserEmail      string    `gorm:"column:user_email;" json:"email"`
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
