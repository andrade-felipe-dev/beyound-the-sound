package database

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

var db *gorm.DB

type Envs struct {
	host       string
	port       string
	userdb     string
	dbname     string
	passworddb string
}

func initEnvs() *Envs {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error")
		return nil
	}

	return &Envs{
		host:       os.Getenv("HOST"),
		port:       os.Getenv("PORT"),
		userdb:     os.Getenv("USERDB"),
		dbname:     os.Getenv("DBNAME"),
		passworddb: os.Getenv("PASSWORDDB"),
	}
}

func StartDb() {
	envs := initEnvs()
	str := fmt.Sprintf("host=%s port=%s user=%s dbname=%s sslmode=disable password=%v", envs.host, envs.port, envs.dbname, envs.userdb, envs.passworddb)
	fmt.Println(str)

}
