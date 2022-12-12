# create library from the sources in this folder
add_library(evolution)

target_sources(evolution PRIVATE evolution.cpp PUBLIC evolution.hpp)

# add this folder to include directories for this project
target_include_directories(evolution PUBLIC ${CMAKE_CURRENT_LIST_DIR})
