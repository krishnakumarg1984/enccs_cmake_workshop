#include "geometry_polygon.hpp"

#define _USE_MATH_DEFINES
#include <cmath>

namespace geometry::area {
double polygon(int nSides, double side) {
    const double perimeter = nSides * side;
    const double apothem   = side / (2.0 * std::tan(M_PI / nSides));

    return (perimeter * apothem) / 2.0;
}
}  // namespace geometry::area
