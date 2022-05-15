package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

// Blog holds the schema definition for the Blog entity.
type Blog struct {
	ent.Schema
}

// Fields of the Blog.
func (Blog) Fields() []ent.Field {
	return []ent.Field{
		field.String("name"),
		field.String("content"),
	}
}

// Edges of the Blog.
func (Blog) Edges() []ent.Edge {
	return nil
}
