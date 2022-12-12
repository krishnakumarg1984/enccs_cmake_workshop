# create library from the sources in this folder
add_library(initial)

target_sources(initial PRIVATE initial.cpp PUBLIC initial.hpp)

# add this folder to include directories for this project
target_include_directories(initial PUBLIC ${CMAKE_CURRENT_LIST_DIR})
