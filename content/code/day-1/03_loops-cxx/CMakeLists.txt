# set minimum cmake version
cmake_minimum_required(VERSION 3.25)

project(compute_areas
  LANGUAGES CXX
)

add_executable(compute_areas compute-areas.cpp)

add_library(
  geometry
  STATIC
  geometry_circle.cpp
  geometry_polygon.cpp
  geometry_rhombus.cpp
  geometry_square.cpp)

# we wish to compile the library with the optimization flag: -O3
target_compile_options(geometry PRIVATE -O3)

list(
  APPEND
  sources_with_lower_optimization
  geometry_circle.cpp
  geometry_rhombus.cpp)

# we use the IN LISTS foreach syntax to set source properties
message(STATUS "Setting source properties using IN LISTS syntax:")
foreach(_source IN LISTS sources_with_lower_optimization)
  set_source_files_properties(${_source} PROPERTIES COMPILE_FLAGS -O2)
  message(STATUS "Appending -O2 flag for ${_source}")
endforeach()

# we demonstrate the plain foreach syntax to query source properties
# which requires to expand the contents of the variable
message(STATUS "Querying sources properties using plain syntax:")
foreach(_source ${sources_with_lower_optimization})
  get_source_file_property(_flags ${_source} COMPILE_FLAGS)
  message(
    STATUS
    "Source ${_source} has the following extra COMPILE_FLAGS: ${_flags}")
endforeach()

target_link_libraries(compute_areas PRIVATE geometry)
