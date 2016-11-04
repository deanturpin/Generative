#!/usr/bin/node

// A node
function node(x1, y1, x2, y2, d, l) {

	// Position
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.direction = d;
	this.length = l;
	this.angle = 20
	this.radians = 2 * Math.PI / 360

	// Debug
	this.print = function() {
		
		console.log(

			this.x1,
			this.y1
		)

		console.log(

			this.x2,
			this.y2
		)

		console.log()
	}

	this.branch = function(sway) {

		// Direction is old direction plus a sway
		const direction = this.direction + (this.angle * sway)

		// Trig
		var x3 = this.x2 + (this.length * Math.cos(direction * this.radians))
		var y3 = this.y2 + (this.length * Math.sin(direction * this.radians))

		// Return new node
		return new node(this.x2, this.y2, x3, y3, direction, this.length * (0.6 * Math.random()))
	}
}

// Branch properties
const scale = 0.9

// Create first node at the origin pointing upwards
nodes = []
nodes[nodes.length] = new node(0, 0, 0, 5, 90, 5)

for (i = 0; i < 3; ++i) {

	totalNodes = nodes.length

	// Iterate over nodes adding new branches
	for (n = 0; n < totalNodes; ++n) {

		// New branches
		nodes[nodes.length] = nodes[n].branch(1)
		nodes[nodes.length] = nodes[n].branch(0.1)
		nodes[nodes.length] = nodes[n].branch(-1)
	}
}

// Dump all points
for (n = 0; n < nodes.length; ++n)
	nodes[n].print()
