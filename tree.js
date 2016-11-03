#!/usr/bin/node

// A node
function Node(x, y) {

	this.X = x;
	this.Y = y;
}

// Create first node
nodes = []
nodes[nodes.length] = new Node(0, 0)

console.log("size of array", nodes.length)
