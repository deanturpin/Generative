#include <algorithm>
#include <iostream>
#include <vector>

int main() {

	using namespace std;

	cout << "Maze" << endl;

	const int X = 80;
	const int Y = 40;

	// Create maze
	vector<char> raster(X, '.');
	vector<vector<char>> maze(Y, raster);

	// Print maze
	for_each(maze.cbegin(), maze.cend(), [](auto &r) {

		for_each(r.cbegin(), r.cend(), [](auto &b) { cout << b; });

		cout << endl;
	});

	return 0;
}
