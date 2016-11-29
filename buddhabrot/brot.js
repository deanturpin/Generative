"use strict"

console.log(new Date)

onload = function() {

	// Create a canvas element
	var canvas = document.createElement("canvas")
	var body = document.getElementsByTagName("body")[0]

	// Add it to the DOM
	body.appendChild(canvas)

	// Define canvas (view port)
	var context = canvas.getContext("2d")

	// Set canvas size
	const width = context.canvas.width = 2
	const height = context.canvas.height = 2

	// Create bitmap
	var bitmap = new Array(width)

	for (var x = 0; x < width; ++x)
		bitmap[x] = new Array(height)

	// Initialise bitmap
	for (var x = 0; x < width; ++x)
		for (var y = 0; y < height; ++y)
			bitmap[x][y] = 0

	// 'Brot limits
	var limit = {
		x: {min: -2, max: 2},
		y: {min: -1, max: 1},
	}

	console.log(limit.x)

	// Draw the 'brot
	function brot(iterations) {

		// Clear the canvas`
		context.clearRect(0, 0, canvas.width, canvas.height)

		// Test if point is a member of the set
		function member(cr, ci, iterations) {

			var zr = 0
			var zi = 0

			var i
			for (i = 0; i < iterations; ++i) {

				// console.log(cr, ci, i)

				// Don't look any further if we've escaped the set
				if ((cr * cr + ci * ci) > 4)
					break

				// Calculate next point
				cr = zr * zr + zi * zi * -1 + cr
				ci = zi * zr + zr * zi + ci
			}

			return i
		}

		// Test if each element in the bitmap is a member of the set
		for (var x = 0; x < width; ++x)
			for (var y = 0; y < height; ++y) {

				const e = member(x, y, 3)

				if (e > 0)
					bitmap[x][y] = 1

				console.log(x, y, (e == 0 ? "in" : "out"))
			}

		for (var x = 0; x < width; ++x)
			console.log(bitmap[x])
	}

	brot(10)
}
