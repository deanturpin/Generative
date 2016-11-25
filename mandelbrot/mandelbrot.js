"use strict"

// Start animation
function draw(width, height) {

	for (var i = 0; i < width; i += 5)
		for (var j = 0; j < width; j += 5)
			circle(i, j, 1)

	// Draw a grid
	/*
	function grid(x, y, size) {

		circle(x * width / size, y * height / size, 2)

		if (x < size) grid(x + 1, y, size)
		else if (y < size) {

			x = 0
			grid(x, y + 1, size)
		}
	}
	*/

	// grid(0, 0, 80)

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
