#!/usr/bin/node

// A node
function node(x, y) {

	// Position
	this.x = x;
	this.y = y;

	// Debug
	this.print = function() { console.log(x + ", " + y + ",") }
}

// Create first node
nodes = []
nodes[nodes.length] = new node(0, 0)

jitter = 1
for (i = 0; i < 5; ++i) {

	totalNodes = nodes.length

	// Iterate over nodes adding new branches
	for (n = 0; n < totalNodes; ++n) {

		// New left branch
		x = nodes[n].x - 1 - (jitter * Math.random())
		y = nodes[n].y + 3 + (jitter * Math.random())
		nodes[nodes.length] = new node(x, y)

		// New right branch
		x = nodes[n].x + 1 + (jitter * Math.random())
		y = nodes[n].y + 3 + (jitter * Math.random())
		nodes[nodes.length] = new node(x, y)
	}
}

// Dump all points
for (n = 0; n < nodes.length; ++n)
	nodes[n].print()
