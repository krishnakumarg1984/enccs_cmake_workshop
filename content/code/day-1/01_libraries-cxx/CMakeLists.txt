# set minimum cmake version
cmake_minimum_required(VERSION 3.26.4)

# declare project giving project name and language
project(MyLibrary LANGUAGES CXX)

# create the message library from the source files
add_library(Message Message.cpp)

# create hello-world executable from hello-world.cpp
add_executable(hello-world hello-world.cpp)

# link hello-world to the message library
target_link_libraries(hello-world PRIVATE Message)
