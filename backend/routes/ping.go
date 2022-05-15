package routes

import (
	"github.com/gofiber/fiber/v2"
)

func Ping(ctx *fiber.Ctx) error {
	ctx.Response().Header.Add("Access-Control-Allow-Origin", "*")

	return ctx.Status(200).SendString("OK")
}
