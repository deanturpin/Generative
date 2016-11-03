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

// Dump all points
console.log("size of array", nodes.length)
for (n = 0; n < nodes.length; ++n)
	nodes[n].print()
