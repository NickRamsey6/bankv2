// business logic
function Account (name, balance) {
  this.name = name;
  this.balance = balance;
};

Account.prototype.Deposit = function (deposit) {
  return this.balance + deposit;
};

Account.prototype.Withdrawal = function () {
  return this.balance(balance - withdrawal);
};

// user interface logic
$(document).ready(function() {
  $("form#new-account").submit(function() {
    debugger;
    event.preventDefault();
    var balance = parseInt($("input#initial-deposit").val());
    var name = ($("#new-first-name").val());
    var deposit = parseInt($("input#deposit").val());
    // var withdrawal = parseInt($("input#withdrawal").val());
    var userAccount = new Account(name, balance);
    var balance = userAccount.Deposit(deposit);
    alert(userAccount.balance);

  })
})
