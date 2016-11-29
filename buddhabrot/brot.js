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
	const scale = 1
	const width = 400
	const height = 400
	const zoom = 200
	const iterations = 20
	context.canvas.width = width * scale
	context.canvas.height = height * scale

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

	// Draw the 'brot
	function brot() {

		// Clear the canvas`
		context.clearRect(0, 0, canvas.width, canvas.height)

		// Test if point is a member of the set
		function member(zr, zi, iterations) {

			var cr = zr
			var ci = zi

			for (var i = 0; i < iterations; ++i) {

				// Don't look any further if we've escaped the set
				if ((zr * zr + zi * zi) > 4) {

					console.log("escaped with", iterations - i)
					return iterations - i
				}

				// Calculate next point
				const zr2 = (zr * zr) + (zi * zi * -1) + cr
				const zi2 = (zi * zr) + (zr * zi) + ci

				console.log(zr, zi, zr2, zi2, i)

				zr = zr2
				zi = zi2
			}

			return 0
		}

		console.log = function() {}

		// Test if each element in the bitmap is a member of the set
		for (var x = 0; x < width; ++x)
			for (var y = 0; y < height; ++y)
				bitmap[x][y] = member(x / zoom, y / zoom, iterations)

		// Display 'brot
		for (var x = 0; x < width; ++x) {

			// console.log(bitmap[x])

			for (var y = 0; y < height; ++y) {

				if (bitmap[x][y] > 0) {

					context.fillStyle = "#f00"
					context.fillRect(x * scale, y * scale, scale, scale)
				}
			}
		}
	}

	brot()
}
