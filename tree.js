#!/usr/bin/node

// Initialise scan
scan = []
for (i = 0; i < 40; ++i)
	scan[i] = 0

scan[30] = 1

console.log("size of array", scan.length)
console.log(scan)

