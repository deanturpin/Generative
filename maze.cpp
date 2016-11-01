#include <algorithm>
#include <iostream>
#include <vector>

int main() {

	using namespace std;

	cout << "Maze" << endl;

	const unsigned int X = 80;
	const unsigned int Y = 40;

	// Create maze
	vector<char> raster(X, '.');
	vector<vector<char>> maze(Y, raster);

	// Start at top left
	unsigned int x = X / 2;
	unsigned int y = 0;

	for (unsigned int i = 0; i < 20; ++i) {

		// Jump to top of screen
		system("tput cup 0 0");

		// Set the current point
		maze.at(y).at(x) = '#';

		// Print maze
		for_each(maze.cbegin(), maze.cend(), [](auto &r) {

			for_each(r.cbegin(), r.cend(), [](auto &b) { cout << b; });

			cout << endl;
		});

		// Move to new position
		++x;
		// ++y;
	}

	return 0;
}
