package handler

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/s3f4/languous/controller"
	"github.com/s3f4/languous/logger"
	"github.com/s3f4/languous/model"
	u "github.com/s3f4/languous/util"
)

type WordHandler struct{}

var wordHandler *WordHandler

var wordController *controller.WordC

func NewWordHandler() *WordHandler {
	if wordController == nil {
		wordController = controller.WordController
	}
	if wordHandler == nil {
		wordHandler = new(WordHandler)
	}
	return wordHandler
}

func getUserId(c *gin.Context) uint64 {
	ctx := c.Request.Context()
	return ctx.Value("user").(uint64)
}

//Add a word
func (WordHandler) Add(c *gin.Context) {
	word := &model.Word{}

	userID := getUserId(c)

	json.NewDecoder(c.Request.Body).Decode(word)

	if errMessage, ok := word.Validate(); ok {
		wordController.Add(word, &model.User{UserID: userID})

		var message map[string]interface{}
		if word.WordID <= 0 {
			message = u.Message(false, "word could not be add")
		} else {
			message = u.Message(true, "Word has been created")
			message["word"] = word
		}

		u.SendResponse(c, nil, message)
	} else {
		u.SendResponse(c, nil, errMessage)
	}

}

//Get a word
func (WordHandler) Get(c *gin.Context) {

	wordID, err := strconv.Atoi(c.Param("word_id"))
	if err != nil {
		u.SendResponse(c, nil, u.Message(false, "malformed parameters"))
		return
	}

	word := &model.Word{WordID: uint64(wordID)}
	*word = wordController.Get(word)
	if word.WordID != 0 {
		response := u.Message(true, "word.Get")
		response["word"] = word
		u.SendResponse(c, nil, response)
	} else {
		response := u.Message(false, "word not found")
		u.SendResponse(c, nil, response)

	}

}

//Update word
func (WordHandler) Update(c *gin.Context) {
	wordID, err := strconv.Atoi(c.Param("word_id"))
	var newWord *model.Word
	err = json.NewDecoder(c.Request.Body).Decode(&newWord)
	if err != nil {

	}
	if err != nil {
		logger.Info(err.Error())
	}
	userID := getUserId(c)
	word := &model.Word{WordID: uint64(wordID)}
	*word = wordController.Get(word)

	if word.UserID == userID {
		wordController.Update(word, map[string]interface{}{
			"word":        newWord.Word,
			"translation": newWord.Translation,
		})
	}
}

//Delete word
func (WordHandler) Delete(c *gin.Context) {
	wordID, err := strconv.Atoi(c.Param("word_id"))
	if err != nil {
		logger.Info(err.Error())
	}
	userID := getUserId(c)
	word := &model.Word{WordID: uint64(wordID)}
	*word = wordController.Get(word)

	if word.WordID != 0 {
		if userID == word.UserID {
			wordController.Delete(word)
			response := u.Message(true, "word.Delete")
			u.SendResponse(c, nil, response)
		} else {
			response := u.Message(false, "No permission")
			u.SendResponse(c, http.StatusForbidden, response)
		}
	} else {
		response := u.Message(false, "Word Not found")
		u.SendResponse(c, http.StatusNotFound, response)
	}
}

//GetAll get all words
func (WordHandler) GetAll(c *gin.Context) {
	time.Sleep(time.Second * 2)
	var words []model.Word
	words = wordController.GetAll()
	response := u.Message(true, "words.GetAll")
	response["words"] = words
	u.SendResponse(c, nil, response)
}
