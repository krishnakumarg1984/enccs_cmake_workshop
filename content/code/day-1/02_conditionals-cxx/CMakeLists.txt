# set minimum cmake version
cmake_minimum_required(VERSION 3.25)

# declare project giving project name and language
project(MyLibrary LANGUAGES CXX)

# MAKE_SHARED_LIBRARY
option(MAKE_SHARED_LIBRARY "Build a shared library" OFF)

# create the message library from the source files
if(MAKE_SHARED_LIBRARY)
    add_library(Message SHARED Message.cpp)
else()
    add_library(Message STATIC Message.cpp)
endif()

# create hello-world executable from hello-world.cpp
add_executable(hello-world hello-world.cpp)

# link hello-world to the message library
target_link_libraries(hello-world PRIVATE Message)
