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

			unsigned int width() const {
				
				return X;
			}

			unsigned int height() const {
				
				return Y;
			}
	};
}

int main() {

	using namespace std;

	// Create bitmap
	bit::map b(260, 164);

	// Create container of nodes
	vector<pair<unsigned int, unsigned int>> nodes;

	// Create some nodes 
	nodes.push_back(make_pair(b.width() / 2, b.height() / 2));
	nodes.push_back(make_pair(0, 0));

	// Iterate over nodes
	for (auto &n : nodes) {

		for (unsigned int i = 0; i < 1000; ++i) {

			if (n.second % 6) {
				++n.first;
				++n.second;
			}
			else {
				++n.second;
				n.first += 2;
			}

			if (!(n.first % 10))
				n.first -= 5;

			// Move to new position
			// Jump out of loop if it cannot be set
			if(!b.set(n.first, n.second))
				break;
		}

		// Print it
		b.print();
	}

	return 0;
}
