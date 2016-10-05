#include <algorithm>
#include <iostream>
#include <vector>

int main() {

	using namespace std;

	cout << "Maze" << endl;

	const int X = 40;
	const int Y = 30;

	// Create maze
	vector<unsigned int> raster(X, 'X');
	vector<vector<unsigned int>> maze(Y, raster);

	// Print maze
	for_each(maze.cbegin(), maze.cend(), [](auto &r) {

		for_each(r.cbegin(), r.cend(), [](auto &b) { cout << b; });
		
		cout << endl;
	});

	return 0;
}
