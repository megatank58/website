package routes

import (
	"github.com/gofiber/fiber/v2"
)

func Redirect(ctx *fiber.Ctx) error {
	ctx.Response().Header.Add("Access-Control-Allow-Origin", "*")

	return ctx.Redirect("/projects")
}
