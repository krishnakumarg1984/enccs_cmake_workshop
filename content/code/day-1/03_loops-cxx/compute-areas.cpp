#include "geometry_circle.hpp"
#include "geometry_polygon.hpp"
#include "geometry_rhombus.hpp"
#include "geometry_square.hpp"

#include <cstdlib>
#include <iostream>

int main() {
    using namespace geometry;

    constexpr double radius = 2.5293;
    const double A_circle   = area::circle(radius);
    std::cout << "A circle of radius " << radius << " has an area of " << A_circle << '\n';

    constexpr int nSides   = 19;
    constexpr double side  = 1.29312;
    const double A_polygon = area::polygon(nSides, side);
    std::cout << "A regular polygon of " << nSides << " sides of length " << side << " has area: " << A_polygon << '\n';

    constexpr double d1    = 5.0;
    constexpr double d2    = 7.8912;
    const double A_rhombus = area::rhombus(d1, d2);
    std::cout << "A rhombus of major diagonal " << d1 << " & minor diagonal " << d2 << " has area: " << A_rhombus
              << '\n';

    constexpr double l    = 10.0;
    const double A_square = area::square(l);
    std::cout << "A square of side " << l << " has an area of " << A_square << '\n';

    return EXIT_SUCCESS;
}
