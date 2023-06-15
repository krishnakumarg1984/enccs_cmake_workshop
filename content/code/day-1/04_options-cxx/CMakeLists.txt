cmake_minimum_required(VERSION 3.26)
project(library_via_options LANGUAGES CXX)

# expose options to the user
option(USE_LIBRARY "Compile sources into a library" OFF)
message(STATUS "Compile sources into a library? ${USE_LIBRARY}")

include(CMakeDependentOption)

# second option depends on the value of the first
cmake_dependent_option(
    MAKE_STATIC_LIBRARY
    "Make a static library"
    ON
    "USE_LIBRARY"
    OFF
)

# third option depends on the value of the first
cmake_dependent_option(
    MAKE_SHARED_LIBRARY
    "Make a shared library"
    ON
    "USE_LIBRARY;NOT MAKE_STATIC_LIBRARY"
    OFF
)

set(CMAKE_WINDOWS_EXPORT_ALL_SYMBOLS ON)

if(USE_LIBRARY)
    message(
        STATUS
        "Compile sources into a STATIC library? ${MAKE_STATIC_LIBRARY}"
    )
    message(
        STATUS
        "Compile sources into a SHARED library? ${MAKE_SHARED_LIBRARY}"
    )
    # create executable from hello-world.cpp
    add_executable(hello-world hello-world.cpp)
    if(MAKE_SHARED_LIBRARY)
        # create a shared library
        add_library(message-shared SHARED Message.cpp)
        # link executable to shared library
        target_link_libraries(hello-world PRIVATE message-shared)
    endif()
    if(MAKE_STATIC_LIBRARY)
        # create a static library
        add_library(message-static STATIC Message.cpp)
        # link executable to static library
        target_link_libraries(hello-world PRIVATE message-static)
    endif()
else()
    # create executable from all sources
    add_executable(hello-world hello-world.cpp Message.cpp)
endif()
