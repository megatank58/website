package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/megatank58/backend/utils/request"
)

func AvatarGet(ctx *fiber.Ctx) error {
	ctx.Response().Header.Add("Access-Control-Allow-Origin", "*")

	return ctx.Status(200).Send([]byte(request.Avatar(ctx.GetReqHeaders()["Authorization"])["avatar_url"]))
}
