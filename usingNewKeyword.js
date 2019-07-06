const UserCreator = function (name, point) {
    this.name = name;
    this.point = point;
};

UserCreator.prototype.increase = function () {
    this.point++;
    console.log("current point:", this.point);
};

UserCreator.prototype.greet = function () {
    console.log("hello", this.name);
};

const user1 = new UserCreator("Okyanus", 5);

user1.greet();
user1.increase();

const PaidUserCreator = function (name, point, balance) {
    UserCreator.call(this, name, point);
    this.balance = balance;
};


PaidUserCreator.prototype = Object.create(UserCreator.prototype);
// Alternative way to set Prototype
// Object.setPrototypeOf(PaidUserCreator.prototype, UserCreator.prototype);

PaidUserCreator.prototype.increaseBalance = function () {
    this.balance++;
    console.log("Current Balance:", this.balance);
};

const premiumUser1 = new PaidUserCreator("Atlas", 8, 100);
premiumUser1.greet();
premiumUser1.increase();
premiumUser1.increaseBalance();
