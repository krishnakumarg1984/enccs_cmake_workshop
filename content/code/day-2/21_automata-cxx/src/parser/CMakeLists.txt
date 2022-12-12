# create library from the sources in this folder
add_library(parser)
target_sources(parser PRIVATE parser.cpp PUBLIC parser.hpp)

# add this folder to include directories for this project
target_include_directories(parser PUBLIC ${CMAKE_CURRENT_LIST_DIR})
