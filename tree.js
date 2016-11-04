#!/usr/bin/node

// A node
function node(x, y, d, l) {

	// Position
	this.x = x;
	this.y = y;
	this.direction = d;
	this.length = l;

	// Debug
	this.print = function() {
		
		console.log(
			this.x,
			this.y,
			this.direction / radians,
			this.length
		)
	}
}

// Branch properties
const radians = 2 * Math.PI / 360
const angle = 20 * radians
const scale = 0.9

// Create first node at the origin pointing upwards
nodes = []
nodes[nodes.length] = new node(0.0, 0.0, 90 * radians, 5)

for (i = 0; i < 5; ++i) {

	totalNodes = nodes.length

	// Iterate over nodes adding new branches
	for (n = 0; n < totalNodes; ++n) {

		// New clockwise branch
		direction = nodes[n].direction - angle
		x = nodes[n].x + (nodes[n].length * Math.cos(direction))
		y = nodes[n].y + (nodes[n].length * Math.sin(direction))
		nodes[nodes.length] = new node(x, y, direction, nodes[n].length * Math.random())

		// New anticlockwise branch
		direction = nodes[n].direction + angle
		x = nodes[n].x + (nodes[n].length * Math.cos(direction))
		y = nodes[n].y + (nodes[n].length * Math.sin(direction))
		nodes[nodes.length] = new node(x, y, direction, nodes[n].length * Math.random())
	}
}

// Dump all points
for (n = 0; n < nodes.length; ++n)
	nodes[n].print()
