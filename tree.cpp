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
				// system("tput civis");
			}

			void print() const {

				// Jump to top of screen
				// system("tput cup 0 0");

				for (const auto &r : maze) {

					for (const auto &c : r)
						cout << c;

					cout << endl;
				}
			}

			bool set(const unsigned int x, const unsigned int y) {

				// Check we're in range
				if (x >= X || y >= Y)
					return false;

				// If so, set the bit
				// maze[y][x] = '#';

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
	// bit::map b(260, 164);
	bit::map b(80, 40);

	// A node is a coordinate and a direction
	struct node {
		unsigned int x;
		unsigned int y;
		unsigned int speed;
	};

	// Create container of nodes
	vector<struct node> nodes;

	{
	// Create first node 
	struct node n = {b.width() / 2, 0, 1};
	nodes.emplace_back(n);
	}

	for (unsigned int i = 0; i < 100; ++i) {

		// Iterate over nodes
		for (auto &n : nodes) {

			// Move down
			n.y += n.speed;

			// Check and set
			if(!b.set(n.x, n.y))
				break;

			// Maybe create a new branch
			// if (!(i % 10)) {
			if (i == 10) {

				// Create new node
				{
				struct node _n(n); // {n.x - n.speed, n.y, 1};
				--_n.x;
				nodes.emplace_back(_n);
				}

				++n.x; //  += n.speed;
			}
		}
	}

	// Print it
	b.print();

	return 0;
}
