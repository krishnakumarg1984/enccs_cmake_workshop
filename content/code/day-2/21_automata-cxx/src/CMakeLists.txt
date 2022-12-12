# add automata executable from main.cpp
add_executable(automata main.cpp)

# FIXME add subdirectories for each sub-library
add_subdirectory(evolution)
add_subdirectory(initial)
add_subdirectory(io)
add_subdirectory(parser)

# link libraries to the executable
target_link_libraries(automata PRIVATE conversion evolution initial io parser)
