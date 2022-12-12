# create library from the sources in this folder
add_library(io)

target_sources(io PRIVATE io.cpp PUBLIC io.hpp)

# add this folder to include directories for this project
target_include_directories(io PUBLIC ${CMAKE_CURRENT_LIST_DIR})
