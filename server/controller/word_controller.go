package controller

import "server/model"

type WordC struct {
	 *BaseC
}

//Add word
func (wc *WordC) Add(word *model.Word,user *model.User){
	wc.Connect()
	defer wc.Close()
	word.UserID = user.UserID
	wc.DB.Create(word)
}

//Get a word
func(wc *WordC) Get(word *model.Word){
	wc.Connect()
	defer wc.Close()
	wc.DB.Where("word_id = ?",word.WordID).First(word)
}

//GetAll words
//TODO pagination
func(wc *WordC) GetAll() (words []model.Word){
	wc.Connect()
	defer wc.Close()
	wc.DB.Find(&words,&model.Word{})
	return
}