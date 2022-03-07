# Minima - The next generation backend framework

Minima is a reliable and lightweight framework for Go to carve the web. Developed with core net/http and other native packages, and with zero external dependencies.

## Making a documentation generator

Now with every great projects, you need to document it, now go does has `godoc` and a million other documentation generators but none suited our needs. 
So I did what every programmer would do, I made a documentation generator for golang!

Initially I just used regexes and went crazy but golang immediately stopped me with their syntax differences. 
So I just manually ran loops to parse everything, you can check [the source](https://github.com/gominima/docgen) and [the format](https://github.com/gominima/docgen#Format) at the repository

## Making the website

The website was made in vue and just loaded the JSON which the docgen generates and parses and displays it.

In the end everything works so make sure to check it out at https://gominima.studio, also this was a rather short blog because there is simply too much to explain and its a bit complex down the lines
