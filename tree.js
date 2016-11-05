#!/usr/bin/node

const radians = 2 * Math.PI / 360

// A node
function node(x, y, d, l, a) {

	// Position
	this.x1 = x;
	this.y1 = y;
	this.x2 = 0;
	this.y2 = 0;
	this.direction = d;
	this.length = l;
	this.angle = a

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

	// Grow this node
	this.grow = function() {

		// Trig
		this.x2 = this.x1 + (this.length * Math.cos(this.direction * radians))
		this.y2 = this.y1 + (this.length * Math.sin(this.direction * radians))
	}

	// Branch this node
	this.branch = function(sway) {

		// Direction is old direction plus a sway
		const direction = this.direction + (this.angle * sway)

		// Return new node
		var n = new node(this.x2, this.y2,
			direction, this.length * 0.9, this.angle * 0.7)

		// And grow it
		n.grow()

		return n
	}
}

// Create first node at the origin pointing upwards
nodes = []
nodes[nodes.length] = new node(0, 0, 90, 5, 40)
nodes[0].grow()

for (i = 0; i < 1; ++i) {

	totalNodes = nodes.length

	// Iterate over nodes adding new branches
	for (n = 0; n < totalNodes; ++n) {

		// Branch node
		nodes[nodes.length] = nodes[n].branch(1)
		nodes[nodes.length] = nodes[n].branch(-1)
	}
}

// Dump all points
for (n = 0; n < nodes.length; ++n)
	nodes[n].print()
