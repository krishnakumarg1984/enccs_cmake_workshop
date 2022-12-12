#pragma once

#include <iosfwd>
#include <string>
#include <utility>

class Message {
  public:
    explicit Message(std::string m)
        : message_(std::move(m)) {}

    friend std::ostream& operator<<(std::ostream& os, Message& obj) { return obj.printObject(os); }

  private:
    std::string message_;
    std::ostream& printObject(std::ostream& os);
};
