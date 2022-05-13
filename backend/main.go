package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	_ "github.com/joho/godotenv/autoload"
	"github.com/megatank58/backend/routes"
	"github.com/megatank58/backend/utils/database"
)

func main() {
	database.Setup()

	app := fiber.New()

	app.Get("/", routes.Redirect)
	app.Get("/projects", routes.ProjectsGet)
	app.Get("/blogs", routes.BlogsGet)
	app.Get("/auth/:code", routes.AuthGet)
	app.Get("/projects/:project", routes.ProjectGet)
	app.Get("/blogs/:blog", routes.BlogGet)
	app.Post("/blogs/create/:blog", routes.BlogCreate)
	app.Post("/blogs/set/:blog", routes.BlogSet)
	app.Get("/blogs/delete/:blog", routes.BlogDelete)

	app.Use(logger.New(logger.Config{
		Format:     "${pid} ${status} - ${method} ${path}\n",
		TimeFormat: "01-Jan-2007",
		TimeZone:   "America/New_York",
	}))

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
	}))

	app.Listen(":8080")
}
