#include <algorithm>
#include <iostream>
#include <vector>

namespace bit {

	using namespace std;

	class map {

		const unsigned int X;
		const unsigned int Y;
		vector<char> raster;
		vector<vector<char>> maze;

		public:

			map(const unsigned int x, const unsigned int y)
			: X(x)
			, Y(y)
			, raster(X, ' ')
			, maze(Y, raster) {

				// Hide the cursor
				system("tput civis");
			}

			void print() const {

				// Jump to top of screen
				system("tput cup 0 0");

				for (const auto &r : maze) {

					for (const auto &c : r)
						cout << c;

					cout << '|' << endl;
				}
						
			}

			bool set(const unsigned int x, const unsigned int y) {

				// Check we're in range
				if (x >= X || y >= Y)
					return false;

				// If so, set the bit
				maze[y][x] = '#';

				return true;
			}
	};
}

int main() {

	using namespace std;

	// Start position
	unsigned int x = 0;
	unsigned int y = 0;

	bit::map maze(260, 164);

	for (unsigned int i = 0; i < 100; ++i) {

		// Move to new position

		if (y % 3) {
			++x;
			++y;
		}
		else {
			++y;
			x += 2;
		}

		// Just out of loop if it cannot be set
		if(!maze.set(x, y))
			break;

		// Print it
		maze.print();
	}

	return 0;
}
