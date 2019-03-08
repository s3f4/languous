package controller

import "server/model"

type WordC struct {
	*BaseC
}

//Add word
func (wc *WordC) Add(word *model.Word, user *model.User) {
	wc.Connect()
	defer wc.Close()
	word.UserID = user.UserID
	wc.DB.Create(word)
}

//Get a word
func (wc *WordC) Get(word *model.Word) model.Word {
	wc.Connect()
	defer wc.Close()
	var temp model.Word
	wc.DB.Where("word_id = ?", word.WordID).First(&temp)
	return temp
}

//GetAll words
//TODO pagination
func (wc *WordC) GetAll() (words []model.Word) {
	wc.Connect()
	defer wc.Close()
	wc.DB.Find(&words, &model.Word{})
	return
}

func (wc *WordC) Update(in *model.Word, data map[string]interface{}) {
	wc.Connect()
	defer wc.Close()
	wc.DB.Model(in).Updates(data)
}

//Delete a word
func (wc *WordC) Delete(word *model.Word) {
	wc.Connect()
	defer wc.Close()
	wc.DB.Delete(&word)
}
