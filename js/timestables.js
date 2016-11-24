"use strict"

// Start animation
function draw(canvas, context) {

	// Find the centre of the canvas
	const x = canvas.width / 2
	const y = canvas.height / 2

	// Control points around the circle
	const modulus = 200

	// Size of increment for each frame
	const increment = .1

	// Iterations
	const iterations = modulus / increment

	// Draw spokes
	function spokes(count, multiplier) {

		// Check if we need to do anything
		if (count > 0) {

			const radius = y * .9

			// Start point - on the perimeter
			const x2 = x + radius * Math.cos(radians * count / modulus)
			const y2 = y + radius * Math.sin(radians * count / modulus)

			// End point - a bit further around the perimeter
			const x3 = x + radius * Math.cos(radians * (count * multiplier) / modulus)
			const y3 = y + radius * Math.sin(radians * (count * multiplier) / modulus)

			// Draw the line
			context.beginPath()
			context.moveTo(x2, y2)
			context.lineTo(x3, y3)
			context.stroke()

			// Next spoke
			spokes(count - 1, multiplier + 1 / modulus)
		}
	}

	// Draw frames
	function frames(iteration, multiplier) {

		if (iteration > 0) {

			// Clear screen
			context.clearRect(0, 0, canvas.width, canvas.height)

			// Draw the spokes
			spokes(modulus, multiplier)

			// Schedule the next frame
			setTimeout(frames, 10, iteration - 1, multiplier + increment)
		}
	}

	// Draw the first frame
	frames(iterations + 1, 1)
}
