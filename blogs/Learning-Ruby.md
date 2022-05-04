# Learning ruby in 3 days

This week i thought of learning yet another programming language ~~because the more the better.~~

>Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. 
It was designed with an emphasis on programming productivity and simplicity.
In Ruby, everything is an object, including primitive data types

## Day 1

I started out with looking at the syntax, at first sight it seemed pretty easy, no keywords to declare variables, a lot of utility functions in std and wait Ruby uses `end` keyword instead of `{}` or ` `.
The first day was mostly looking around seeing what can be done in ruby and finding good guides, I initially thought of using my educative plan but the tutorials barely had much content.

## Day 2

I started out by learning the basics on day 2.

Declaring variables is pretty simple in ruby
```ruby
string = "Hi mom"
```

Arrays act in a similar way to JS
```ruby
numbers=[1,2,3,4,5]
```

Loops are really easy as well, for instance if we want a loop to run 5 times, its just
```ruby
5.times do
  puts "Hi mom!"
end
```

Single line comments start with `#` and multi line starts with `=begin` and end with `=end`, However most people use `#` for multi line comments too.
```
# One line comment

=begin
Multi line comment

The =begin and =end must be at the beginning of the line or
it will be a syntax error.
=end

# Multi
# Line
# Comment
```

There are three methods (that I know of) to print a value to stdout.
```ruby
puts "Hi mom"  #  Hi mom\n
p "Hi mom"     # "Hi mom"\n
print "Hi mom" #  Hi mom
```

Accepting value from stdin is also really easy in ruby.
```ruby
a=gets
```

Conversion of data types is done with the `to_` methods.
```ruby
a=gets.to_i
```

Ruby, being famous as a golf language also has extremely short syntax sometimes but its generally readable. The methods in standard library are also super useful.

## Day 3

It was finally time to build something productive with Ruby even though it was just day 3 but I had learnt most of the syntax so I went for what everyone would do, Ruby On Rails, I decided to mimic my current website API using Ruby on Rails and I'll post a followup blog on it soon.
