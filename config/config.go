package config

import (
	"encoding/json"
	"io/ioutil"
	"os"

	"github.com/joho/godotenv"
	log "github.com/s3f4/languous/logger"
)

//Config load
var Config map[string]interface{}

//Load reads config/development.json and loads configurations
func Load() error {

	err := godotenv.Load()
	if err != nil {
		return err
	}
	env := os.Getenv("APP_ENV")

	jsonFile, err := os.Open("config/" + env + ".json")
	defer jsonFile.Close()

	if err != nil {
		log.Trace(err.Error())
		return err
	}

	bytes, err := ioutil.ReadAll(jsonFile)
	if err != nil {
		return err
	}

	err = json.Unmarshal(bytes, &Config)
	if err != nil {
		return err
	}
	return nil
}
