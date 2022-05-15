package database

import (
	"context"
	"database/sql"
	"log"

	"entgo.io/ent/dialect"
	entsql "entgo.io/ent/dialect/sql"
	_ "github.com/jackc/pgx/v4/stdlib"
	"github.com/megatank58/backend/ent"
	"github.com/megatank58/backend/ent/blog"
)

var client *ent.Client

type Blog struct {
	Id      string `json:"id,omitempty"`
	Name    string `json:"name,omitempty"`
	Content string `json:"content,omitempty"`
}

func Open(databaseUrl string) {
	db, err := sql.Open("pgx", databaseUrl)
	if err != nil {
		log.Fatal(err)
	}

	// Create an ent.Driver from `db`.
	drv := entsql.OpenDB(dialect.Postgres, db)
	client = ent.NewClient(ent.Driver(drv))
}

func GetBlogs() ([]*ent.Blog, error) {
	return client.Blog.Query().All(context.Background())
}

func GetBlog(name string) (*ent.Blog, error) {
	return client.Blog.Query().Where(blog.NameContains(name)).First(context.Background())
}

func CreateBlog(name string, content string) *ent.Blog {
	return client.Blog.Create().SetName(name).SetContent(content).SaveX(context.Background())
}

func DeleteBlog(name string) int {
	return client.Blog.Delete().Where(blog.Name(name)).ExecX(context.Background())
}

func SetBlog(name string, content string) int {
	return client.Blog.Update().Where(blog.Name(name)).SetName(name).SetContent(content).SaveX(context.Background())
}
