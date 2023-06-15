cmake_minimum_required(VERSION 3.18)

project(Hello LANGUAGES NONE)

find_package(Python REQUIRED)

enable_testing()

add_test(
    NAME testing_intentional_failure
    COMMAND ${Python_EXECUTABLE} "${CMAKE_CURRENT_SOURCE_DIR}/test.py"
)

set_tests_properties(testing_intentional_failure PROPERTIES WILL_FAIL True)
