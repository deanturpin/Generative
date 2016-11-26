"use strict"

// Start animation
function draw(width, height) {

	clear()

	// Test if a point is in the Mandelbrot set
	function member(e, r, i, c) {

		if (c > 4)
			return e

		if (e > 0) {

			const c = r*r + i*i
			return member(e - 1, r + c, i, c)
		}

		return e
	}

	const grid = 100
	const resolution = .05

	const iMin = -2.3
	const iMax = 4
	const jMin = -2
	const jMax = 2

	// Print the points within the set
	for (var i = iMin; i < iMax; i += resolution)
		for (var j = jMin; j < jMax; j += resolution) {
		
			const iterations = 10
			const e = member(iterations, i, j)

			var r = 0
			var g = 0
			var b = 0

			if (e === 0) {
				r = 255
				g = 0
				b = 0
			}
			else if (e === 1) {
				r = 0
				g = 255
				b = 0
			}
			else if (e === 2) {
				r = 0
				g = 0
				b = 255
			}

			// Draw a point
			circle(
				(i - iMin) * grid,
				(j - jMin) * grid,
				resolution * grid / 2,
				Math.round(e * 255 / iterations),
				g,
				b
				)
			}

	/*
	const x1 = width / 2
	const y1 = height / 2

	// Control points around the circle
	const modulus = 150

	// Size of increment for each frame
	const increment = .05

	// Iterations
	const iterations = modulus / increment

	// Draw spokes
	function spokes(count, multiplier) {

		// Check if we need to do anything
		if (count > 0) {

			const radius = y1 * .9

			// Start point - on the perimeter
			const x2 = x1 + radius * Math.cos(radians * count / modulus)
			const y2 = y1 + radius * Math.sin(radians * count / modulus)

			// End point - a bit further around the perimeter
			const x3 = x1 + radius * Math.cos(radians * (count * multiplier) / modulus)
			const y3 = y1 + radius * Math.sin(radians * (count * multiplier) / modulus)

			// Draw the line
			line(x2, y2, x3, y3)

			// Next spoke
			spokes(count - 1, multiplier + 1 / modulus)
		}
	}

	// Draw frames
	function frames(iteration, multiplier) {

		if (iteration > 0) {

			clear()

			// Draw the spokes
			spokes(modulus, multiplier)

			// Schedule the next frame
			setTimeout(frames, 10, iteration - 1, multiplier + increment)
		}
	}

	// Draw the first frame
	frames(iterations + 1, 1)
	*/
}
