"use strict"

// Start animation
function draw(width, height) {

	clear()

	// Test if a point is in the Mandelbrot set
	function member(iteration, r, i) {

		const z = Math.sqrt(r * r + i * i)

		if (z < 2)
			return true

		if (iteration > 0) {

			// First pair
			const a = r
			const b = i

			// Second pair
			const c = r
			const d = i

			// z^2
			const r2 = a*c - b*d + 6.5
			const i2 = (b*c + a*d) * -1
			
			return member(iteration - 1, r2, i2)
		}
		else
			return false
	}

	const scale = 50
	const resolution = 1 / scale
	const range = 5
	const ticks = 2 * range / resolution
	const min = ((width / ticks) < (height / ticks) ? width / ticks : height / ticks)

	console.log(resolution, scale, range, ticks)
	console.log(width, height, width / ticks, height / ticks)

	// Print the points within the set
	for (var i = -range; i < range; i += resolution)
		for (var j = -range; j < range; j += resolution)
			if (member(30, i, j))
				circle(
					scale * (i + range) * min,
					scale * (j + range) * min, resolution * 10)

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
