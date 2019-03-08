package controller

import (
	"fmt"
	"github.com/jinzhu/gorm"
	"os"
	"server/config"
	"server/middleware"
)

//BaseC BaseController struct
type BaseC struct {
	DB *gorm.DB
}


//Connect mysql connection
func (base *BaseC) Connect() *gorm.DB{
	var conf = config.Config
	dbURI := fmt.Sprintf("%s:%s@/%s?charset=utf8&parseTime=True&loc=Local", conf["DB_USER"], conf["DB_PASSWORD"], conf["DB_NAME"])
	var err error
	base.DB, err = gorm.Open("mysql", dbURI)
	if err != nil {
		middleware.GError = err
		return nil
	}
	if os.Getenv("APP_ENV") != "production"{
		base.DB.LogMode(true)
	}

	//base.DB.Debug().AutoMigrate(&model.User{}, &model.Word{})
	return base.DB
}

//Close sql connection
func (base *BaseC) Close() {
	if base.DB.DB() != nil {
		base.DB.Close()
	}
}

var (
	UserController *UserC
	WordController *WordC
)

func init()  {
	UserController = new(UserC)
	WordController = new(WordC)

	base := new(BaseC)
	UserController.BaseC = base
	WordController.BaseC = base

	base.Connect()
}
