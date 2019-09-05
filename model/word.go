package model

import (
	"time"

	u "github.com/s3f4/languous/util"
)

// Word model
type Word struct {
	ID          uint64 `gorm:"column:word_id;PRIMARY_KEY;AUTO_INCREMENT;NOT_NULL;"`
	UserID      uint64
	User        User      `gorm:"save_associations:false;foreignkey:UserID;"`
	Word        string    `gorm:"column:word;"`
	Translation string    `gorm:"column:translation;"`
	Date        time.Time `gorm:"column:date;DEFAULT:current_timestamp"`
}

// TableName returs word table name
func (Word) TableName() string {
	return "word"
}

//Validate word validation
func (w Word) Validate() (map[string]interface{}, bool) {
	if w.Word == "" || w.Translation == "" {
		return u.Message(false, "Word and Translation is required"), false
	}
	return nil, true
}
