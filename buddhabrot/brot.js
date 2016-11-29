"use strict"

console.log(new Date)

onload = function() {

	// Create a canvas element
	var canvas = document.createElement("canvas")
	var body = document.getElementsByTagName("body")[0]

	// Add it to the DOM
	body.appendChild(canvas)

	// Define canvas
	var context = canvas.getContext("2d")

	// Set canvas size
	context.canvas.width = 20
	context.canvas.height = 20

	// Radians in a circle
	const radians = 2 * Math.PI

	function pixel(x, y, s, r, g, b) {

		context.fillStyle = "rgb(" + r + ", " + g + "," + b + ")"
		context.fill(x, y, s, s)
	}

	// Clear the canvas
	function clear() {
		context.clearRect(0, 0, canvas.width, canvas.height)
	}

	/*
	function brot(iterations) {

		console.log("iterations", iterations)

		clear()

		var escapeR = []
		var escapeI = []

		// Test if a point is in the Mandelbrot set
		function member(e, zr, zi, cr, ci) {

			escapeR[escapeR.length] = zr
			escapeI[escapeI.length] = zi

			// Check if we're outside the set
			if ((zr*zr + zi*zi) > 4)
				return e

			// Otherwise keep going
			if (e > 0) {

				const zr2 = zr * zr + zi * zi * -1 + cr
				const zi2 = zi * zr + zr * zi + ci

				return member(e - 1, zr2, zi2, cr, ci)
			}

			// Point is in the set
			return 0
		}

		const grid = height / 2.6
		const resolution = .005

		const iMin = -2
		const iMax = 3 
		const jMin = -1.3
		const jMax = 1.3

		// Print the points within the set
		for (var i = iMin; i < iMax; i += resolution)
			for (var j = jMin; j < jMax; j += resolution) {

				// Clear down the escape path
				escapeR = []
				escapeI = []
		
				// Check if this point is a member
				const e = member(iterations, i, j, i, j)

				// Draw a point using the iterations before exiting the set as the colour

				// If it's an escape path plot each point
				// if (e > 0)
					for(var k = 0; k < escapeR.length; ++k) 
						pixel(
							(escapeI[k] - jMin) * grid,
							(escapeR[k] - iMin) * grid,
							1,
							0,
							0,
							0
						)
		}	
	}

	brot(10)

	*/
}
