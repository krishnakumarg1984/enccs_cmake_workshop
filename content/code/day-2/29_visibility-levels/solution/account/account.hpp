#pragma once

class Account {
  public:
    Account();
    ~Account();

    void deposit(double amount);
    void withdraw(double amount);
    [[nodiscard]] double get_balance() const;

  private:
    double balance;
    bool is_initialized;
};
