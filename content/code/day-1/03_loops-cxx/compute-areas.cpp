#include <cstdlib>
#include <iostream>

#include "geometry_circle.hpp"
#include "geometry_polygon.hpp"
#include "geometry_rhombus.hpp"
#include "geometry_square.hpp"

int main() {
    using namespace geometry;

    double radius   = 2.5293;
    double A_circle = area::circle(radius);
    std::cout << "A circle of radius " << radius << " has an area of " << A_circle << '\n';

    int nSides       = 19;
    double side      = 1.29312;
    double A_polygon = area::polygon(nSides, side);
    std::cout << "A regular polygon of " << nSides << " sides of length " << side << " has area: " << A_polygon << '\n';

    double d1        = 5.0;
    double d2        = 7.8912;
    double A_rhombus = area::rhombus(d1, d2);
    std::cout << "A rhombus of major diagonal " << d1 << " & minor diagonal " << d2 << " has area: " << A_rhombus
              << '\n';

    double l        = 10.0;
    double A_square = area::square(l);
    std::cout << "A square of side " << l << " has an area of " << A_square << '\n';
    return EXIT_SUCCESS;
}
