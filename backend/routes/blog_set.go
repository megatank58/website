package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/megatank58/backend/utils/database"
	"github.com/megatank58/backend/utils/request"
)

func BlogSet(ctx *fiber.Ctx) error {
	ctx.Response().Header.Add("Access-Control-Allow-Origin", "*")

	isAuthenticated := request.CheckAuthentication(ctx.GetReqHeaders()["Authorization"])

	if !isAuthenticated {
		return ctx.Status(401).SendString("Access token is invalid or not of the user")
	}

	payload := database.Blog{}

    if err := ctx.BodyParser(&payload); err != nil {
        return err
    }

	database.SetBlog(ctx.Params("blog"), payload.Content)

	return ctx.Status(200).SendString("OK")
}
