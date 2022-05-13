package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/megatank58/backend/utils/database"
	"github.com/megatank58/backend/utils/request"
)

func BlogDelete(ctx *fiber.Ctx) error {
	ctx.Response().Header.Add("Access-Control-Allow-Origin", "*")

	isAuthenticated := request.CheckAuthentication(ctx.GetReqHeaders()["Authorization"])

	if !isAuthenticated {
		return ctx.Status(401).SendString("Access token is invalid or not of the user")
	}

	database.DeleteBlog(ctx.Params("blog"))

	return ctx.Status(200).SendString("OK")
}
