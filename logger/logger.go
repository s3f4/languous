package logger

import (
	"log"
	"os"
)

//Trace log
var (
	TraceLog   *log.Logger
	InfoLog    *log.Logger
	WarningLog *log.Logger
	ErrorLog   *log.Logger

	Path = "./log/"
)


func Trace(message string)   {
	file, err := os.OpenFile(Path+"trace.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)

	if err != nil{
		log.Fatalf("can not create log file")
	}
	defer file.Close()

	TraceLog = log.New(file, "TRACE: ", log.Ldate|log.Ltime|log.Lshortfile)
	TraceLog.Println(message)
}
func Info(message string)    {
	file, err := os.OpenFile(Path+"info.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)

	if err != nil{
		log.Fatalf("can not create log file")
	}
	defer file.Close()

	InfoLog = log.New(file, "INFO: ", log.Ldate|log.Ltime|log.Lshortfile)
	InfoLog.Println(message)
}
func Warning(message string) {
	file, err := os.OpenFile(Path+"warning.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)

	if err != nil{
		log.Fatalf("can not create log file")
	}
	defer file.Close()

	WarningLog = log.New(file, "WARNING: ", log.Ldate|log.Ltime|log.Lshortfile)
	WarningLog.Println(message)
}
func Error(message string)   {
	file, err := os.OpenFile(Path+"error.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)

	if err != nil{
		log.Fatalf("can not create log file")
	}
	defer file.Close()

	ErrorLog = log.New(file, "ERROR: ", log.Ldate|log.Ltime|log.Lshortfile)
	ErrorLog.Println(message)
}

func init() {
	if _, err := os.Stat(Path); os.IsNotExist(err) {
		os.Mkdir(Path, 07770)
	}
}
