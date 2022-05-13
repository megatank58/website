package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/megatank58/backend/utils/request"
)

func ProjectsGet(ctx *fiber.Ctx) error {
	ctx.Response().Header.Add("Access-Control-Allow-Origin", "*")

	return ctx.Status(200).Send(request.GitHub("users/megatank58/repos"))
}
