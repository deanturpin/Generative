#!/usr/bin/node

// A node
function node(x, y, d, l) {

	// Position
	this.x = x;
	this.y = y;
	this.direction = d;
	this.length = l;
	this.angle = 20
	this.radians = 2 * Math.PI / 360

	// Debug
	this.print = function() {
		
		console.log(
			this.x,
			this.y,
			this.direction,
			this.length,
			this.angle
		)
	}

	this.branch = function(sway) {

		// Direction is old direction plus a sway
		const direction = this.direction + (this.angle * sway)

		// Trig
		var x = this.x + (this.length * Math.cos(direction * this.radians))
		var y = this.y + (this.length * Math.sin(direction * this.radians))

		// Return new node
		return new node(x, y, direction, this.length)
	}
}

// Branch properties
const scale = 0.9

// Create first node at the origin pointing upwards
nodes = []
nodes[nodes.length] = new node(0.0, 0.0, 90, 5)

for (i = 0; i < 2; ++i) {

	totalNodes = nodes.length

	// Iterate over nodes adding new branches
	for (n = 0; n < totalNodes; ++n) {

		// New clockwise branch
		nodes[nodes.length] = nodes[n].branch(1)

		// New anticlockwise branch
		nodes[nodes.length] = nodes[n].branch(-1)
	}
}

// Dump all points
for (n = 0; n < nodes.length; ++n)
	nodes[n].print()
