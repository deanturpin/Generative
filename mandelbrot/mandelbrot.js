"use strict"

// Start animation
function draw(width, height) {

	clear()

	// Test if a point is in the Mandelbrot set
	function member(e, zr, zi, cr, ci) {

		// Check if we're outside the set
		if ((zr*zr + zi*zi) > 4)
			return e

		// Otherwise keep going
		if (e > 0) {

			const zr2 = zr*zr + zi*zi*-1 + cr
			const zi2 = zi*zr + zr*zi + ci

			return member(e - 1, zr2, zi2, cr, ci)
		}

		// Point is in the set
		return e
	}

	const grid = height / 2.6
	const resolution = .007

	const iMin = -2.1
	const iMax = .8
	const jMin = -1.3
	const jMax = 1.3

	// Print the points within the set
	for (var i = iMin; i < iMax; i += resolution)
		for (var j = jMin; j < jMax; j += resolution) {
		
			const iterations = 20
			const e = member(iterations, i, j, i, j)

			// Draw a point
			circle(
				(i - iMin) * grid,
				(j - jMin) * grid,
				resolution * grid / 1.5,
				Math.round(e * 255 / iterations), // red
				0, // green
				0 // blue
				)
			}
}
