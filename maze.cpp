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

	// A node is a coordinate and a direction
	struct node {
		unsigned int x;
		unsigned int y;
		int direction;
	};

	// Create container of nodes
	vector<struct node> nodes;

	{
	// Create some nodes 
	struct node n1 = {0, 0, 1};
	struct node n2 = {b.width() / 2, b.height() / 2, -1};
	struct node n3 = {50, 60, -1};
	struct node n4 = {60, 60, 1};

	nodes.emplace_back(n1);
	nodes.emplace_back(n2);
	nodes.emplace_back(n3);
	nodes.emplace_back(n4);
	}

	// Iterate over nodes
	for (auto &n : nodes) {

		for (unsigned int i = 0; i < 1000; ++i) {

			if (n.y % 10) {
				n.x += n.direction;
				n.y += n.direction;
			}
			else {
				n.x += n.direction;
				++n.y;
			}

			// Move to new position
			// Change direction if not possible
			if(!b.set(n.x, n.y) || !(n.x % 10))
				n.direction = -n.direction;
		}

		// Print it
		b.print();
	}

	return 0;
}
