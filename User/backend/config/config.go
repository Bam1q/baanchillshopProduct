package config

import "os"

type Config struct {
	DBUrl string
}

func LoadConfig() Config {
	// สำหรับ local dev (ยังไม่ใช้ env ก็ได้)
	return Config{
		DBUrl: os.Getenv("DATABASE_URL"),
	}
}
