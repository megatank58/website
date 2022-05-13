package database

import (
	"context"
	"os"

	"github.com/georgysavva/scany/pgxscan"
	"github.com/jackc/pgx/v4/pgxpool"
)

type Blog struct {
	Id      string `json:"id,omitempty"`
	Name    string `json:"name,omitempty"`
	Content string `json:"content,omitempty"`
}

func Setup() (context.Context, *pgxpool.Pool) {
	ctx := context.Background()
	db, _ := pgxpool.Connect(context.Background(), os.Getenv("DATABASE_URL"))

	return ctx, db
}

func GetBlogs() []*Blog {
	ctx, db := Setup()

	var blogs []*Blog
	pgxscan.Select(ctx, db, &blogs, "SELECT name, content FROM blogs")

	return blogs
}

func GetBlog(name string) *Blog {
	ctx, db := Setup()

	var blogs []*Blog
	pgxscan.Select(ctx, db, &blogs, "SELECT name, content FROM blogs WHERE name='"+name+"'")

	return blogs[0]
}

func CreateBlog(name string, content string) *Blog {
	ctx, db := Setup()

	var blogs []*Blog
	pgxscan.Select(ctx, db, &blogs, "INSERT INTO blogs (name, content) VALUES('"+name+"','"+content+"')")
	pgxscan.Select(ctx, db, &blogs, "SELECT name, content FROM blogs WHERE name='"+name+"'")

	return blogs[0]
}

func DeleteBlog(name string) {
	ctx, db := Setup()

	var blogs []*Blog
	pgxscan.Select(ctx, db, &blogs, "DELETE FROM blogs WHERE name='"+name+"'")
}

func SetBlog(name string, content string) {
	ctx, db := Setup()

	var blogs []*Blog
	pgxscan.Select(ctx, db, &blogs, "UPDATE blogs SET content='"+content+"'WHERE name='"+name+"'")
}
