#!/usr/bin/node

// A node
function node(x, y, d) {

	// Position
	this.x = x;
	this.y = y;
	this.direction = d;

	// Debug
	this.print = function() {
		
		console.log(this.x + ", " + this.y + "," + this.direction / radians)
	}
}

// Branch properties
const length = 5
const radians = 2 * Math.PI / 360
const angle = 10 * radians

// Create first node at the origin pointing upwards
nodes = []
nodes[nodes.length] = new node(0.0, 0.0, 90 * radians)

for (i = 0; i < 5; ++i) {

	totalNodes = nodes.length

	// Iterate over nodes adding new branches
	for (n = 0; n < totalNodes; ++n) {

		// New clockwise branch
		direction = nodes[n].direction - angle
		x = nodes[n].x + (length * Math.cos(direction))
		y = nodes[n].y + (length * Math.sin(direction))
		nodes[nodes.length] = new node(x, y, direction)

		// New anticlockwise branch
		direction = nodes[n].direction + angle
		x = nodes[n].x + (length * Math.cos(direction))
		y = nodes[n].y + (length * Math.sin(direction))
		nodes[nodes.length] = new node(x, y, direction)
	}
}

// Dump all points
for (n = 0; n < nodes.length; ++n)
	nodes[n].print()
