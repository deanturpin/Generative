"use strict"

// Start animation
function draw(width, height) {

	clear()

	// Complex number
	function complex(real, imaginary) {

		this.x = real
		this.y = imaginary

		this.print = function() {
			console.log(this.x, this.y)
		}

		this.square = function() {

			return new complex(
				this.x * this.x - this.y * this.y,
				this.y * this.x + this.x * this.y
			)
		}
	}

	// Test if a point is in the Mandelbrot set
	function member(iteration, x, y) {

		const h = Math.sqrt(x * x + y * y)

		if (h < 1)
			return true

		if (iteration > 0) {

			const p = new complex(x, y)
			const q = p.square()
		
			return member(iteration - 1, p.x + 1, q.y)
		}
		else
			return false
	}

	const resolution = .05
	const scale = 150

	// Middle of the canvas
	const x = width / 4
	const y = height / 4

	// Print the points within the set
	for (var i = -2; i < 2; i += resolution)
		for (var j = -2; j < 2; j += resolution)
			if (! member(4, i, j))
				circle(x + (1 + i) * scale, y + (1 + j) * scale, resolution * 25)

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
