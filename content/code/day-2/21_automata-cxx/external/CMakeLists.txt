# create library from sources in this folder
add_library(conversion)
target_sources(conversion PRIVATE conversion.cpp PUBLIC conversion.hpp)

# add this folder to include directories for the project
target_include_directories(conversion PUBLIC ${CMAKE_CURRENT_LIST_DIR})
