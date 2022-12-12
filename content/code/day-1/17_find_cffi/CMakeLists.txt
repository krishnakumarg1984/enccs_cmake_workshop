cmake_minimum_required(VERSION 3.18)

project(find_cffi
  LANGUAGES NONE
)

find_package(Python REQUIRED)

execute_process(
  COMMAND
  # provide the Python command
  ${Python_EXECUTABLE} -c "import cffi; print(cffi.__version__)"
  # ${Python_EXECUTABLE} -c "import cff; print(cffi.__version__)"
  OUTPUT_VARIABLE python_process_result
  # provide a variable for capturing the standard output stream
  ERROR_VARIABLE python_process_error
  # FIXME provide a variable for capturing the standard error stream
  OUTPUT_STRIP_TRAILING_WHITESPACE
  ERROR_STRIP_TRAILING_WHITESPACE)

# FIXME print out the contents of the standard output and standard error streams
# FIXME quit if "ModuleNotFoundError" is in the standard error stream
# HINT: use the MATCHES operator to search in the string
include(CMakePrintHelpers)
cmake_print_variables(python_process_result python_process_error)

if(python_process_error MATCHES "ModuleNotFoundError")
  message(FATAL_ERROR "The request python module not found, CMake will exit.")
endif()
