package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/megatank58/backend/utils/request"
)

func ProjectGet(ctx *fiber.Ctx) error {
	ctx.Response().Header.Add("Access-Control-Allow-Origin", "*")

	return ctx.Status(200).Send(request.RawGitHub(ctx.Params("project") + "/main/README.md"))
}
