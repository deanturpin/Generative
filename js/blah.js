"use strict"

// Define canvas
const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

// Set to window size
context.canvas.width = window.innerWidth
context.canvas.height = window.innerHeight

// Place in the middle of the canvas
const x = canvas.width / 2
const y = canvas.height / 2
const radius = y * .8
const radians = 2 * Math.PI

// Draw a complete screen
var draw = function(table) {

	// Modulus
	const mod = 2000

	// Draw lines
	for (var i = 0; i < mod; ++i) {

		// Start point
		const x2 = x + radius * Math.cos(radians * i / mod)
		const y2 = y + radius * Math.sin(radians * i / mod)

		// End point
		const x3 = x + radius * Math.cos(radians * (i * table) / mod)
		const y3 = y + radius * Math.sin(radians * (i * table * 2.1) / mod)

		// Draw the line
		context.beginPath()
		context.moveTo(x2, y2)
		context.lineTo(x3, y3)
		context.lineWidth = .15
		context.strokeStyle = "rgb(100,100,0)"
		context.stroke()
	}
}

// Starting times table
var table = 1

// Periodically update screen
var interval = setInterval(function() {

		// Clear screen
		context.clearRect(0, 0, canvas.width, canvas.height)

		// Draw and increment times table
		draw(table)
		table += .025

		if (table > 7) table = 1

		}, 1000 / 20)

// delete window.canvas
// delete window.context
