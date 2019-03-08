package handler

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"server/controller"
	"server/model"
	u "server/util"
	"strconv"
)

type WordHandler struct{}

var wordHandler *WordHandler

var wordController *controller.WordC

func NewWordHandler() *WordHandler{
	if wordController == nil{
		wordController = controller.WordController
	}
	if wordHandler == nil{
		wordHandler = new(WordHandler)
	}
	return wordHandler
}

//Add a word
func (WordHandler) Add(c *gin.Context) {
	word := &model.Word{}
	ctx := c.Request.Context()
	userID := ctx.Value("user").(uint64)

	json.NewDecoder(c.Request.Body).Decode(word)

	if errMessage, ok := word.Validate(); ok {
		wordController.Add(word, &model.User{UserID:userID})

		var message map[string]interface{}
		if word.WordID <= 0 {
			message = u.Message(false, "word could not be add")
		} else {
			message = u.Message(true, "Word has been created")
			message["word"] = word
		}

		u.SendResponse(c,nil, message)
	} else {
		u.SendResponse(c,nil, errMessage)
	}

}

//Get a word
func (WordHandler) Get(c *gin.Context) {

	wordID ,err := strconv.Atoi(c.Param("word_id"))
	if err != nil{
		u.SendResponse(c,nil,u.Message(false,"malformed parameters"))
		return
	}

	word := &model.Word{WordID: uint64(wordID)}
	wordController.Get(word)
	response := u.Message(true,"word.Get")
	response["word"] = word
	u.SendResponse(c,nil,response)
}

//Update word
func (WordHandler) Update(c *gin.Context) {}

//Delete word
func (WordHandler) Delete(c *gin.Context) {}

//GetAll get all words
func (WordHandler) GetAll(c *gin.Context) {
	var words []model.Word
	words = wordController.GetAll()
	response := u.Message(true,"words.GetAll")
	response["words"] = words
	u.SendResponse(c,nil,response)
}
