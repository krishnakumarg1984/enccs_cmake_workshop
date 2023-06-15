# set minimum cmake version
cmake_minimum_required(VERSION 3.18)

# project name
project(ctest-cost LANGUAGES NONE)

# detect python
find_package(Python REQUIRED)

# enable testing
enable_testing()

# add tests
add_test(a ${Python_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/test/a.py)
add_test(b ${Python_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/test/b.py)
add_test(c ${Python_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/test/c.py)
add_test(d ${Python_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/test/d.py)

add_test(e ${Python_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/test/e.py)
add_test(f ${Python_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/test/f.py)
add_test(g ${Python_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/test/g.py)

add_test(h ${Python_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/test/h.py)

add_test(i ${Python_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/test/i.py)

add_test(j ${Python_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/test/j.py)

# FIXME set tests properties
set_tests_properties(a b c d PROPERTIES COST 0.5)
set_tests_properties(e f g PROPERTIES COST 1.5)
set_tests_properties(h PROPERTIES COST 2.5)
set_tests_properties(i PROPERTIES COST 3.5)
set_tests_properties(j PROPERTIES COST 4.5)
