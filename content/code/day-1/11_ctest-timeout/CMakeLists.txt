# set minimum cmake version
cmake_minimum_required(VERSION 3.18)

# project name
project(ctest-timeout
  LANGUAGES NONE
)

# detect python
find_package(Python REQUIRED)

# enable testing
enable_testing()

# we expect this test to run for 2 seconds
add_test(
  NAME timeout_test
  COMMAND ${Python_EXECUTABLE} "${CMAKE_CURRENT_SOURCE_DIR}/test.py")

# timeout for this test is now set to be lower
set_tests_properties(timeout_test PROPERTIES TIMEOUT 1.5)
