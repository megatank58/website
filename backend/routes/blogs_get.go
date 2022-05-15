package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/megatank58/backend/utils/database"
)

func BlogsGet(ctx *fiber.Ctx) error {
	ctx.Response().Header.Add("Access-Control-Allow-Origin", "*")

	data, _ := database.GetBlogs()

	return ctx.Status(200).JSON(data)
}
