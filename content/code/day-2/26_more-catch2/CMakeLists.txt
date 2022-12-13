# set minimum cmake version
cmake_minimum_required(VERSION 3.25)

# project name and language
project(Catch2Example
  LANGUAGES CXX
)

# require C++14
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# create sum_integers library
add_library(sum_integers)
target_sources(sum_integers PRIVATE sum_integers.cpp PUBLIC sum_integers.hpp)

# create sum_up executable
add_executable(sum_up main.cpp)

# link sum_up executable to sum_integers library
target_link_libraries(sum_up PRIVATE sum_integers)

# enable FetchContent
include(FetchContent)

# declare Catch2 content
fetchcontent_declare(
  Catch2 # name of the content
  GIT_REPOSITORY
  https://github.com/catchorg/Catch2.git # the repository from which to download the content
  GIT_TAG # the tag to download
  v2.13.10)

# make content available
fetchcontent_makeavailable(Catch2)

# create cpp_test testing binary
add_executable(cpp_test test.cpp)

# link cpp_test against the Catch2 imported target and the sum_integers library
target_link_libraries(cpp_test PRIVATE sum_integers Catch2::Catch2)

# enable testing functionality
enable_testing()

# define test
add_test(NAME catch_test COMMAND $<TARGET_FILE:cpp_test> --success)
