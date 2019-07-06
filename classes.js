class UserCreator {

    constructor(name, point) {
        this.name = name;
        this.point = point;
    }

    increase() {
        this.point++;
        console.log("current point:", this.point);
    }

    greet() {
        console.log("hello", this.name);
    }
}

const user1 = new UserCreator("Okyanus", 5);

user1.greet();
user1.increase();

class PaidUserCreator extends UserCreator {
    constructor(name, point, balance) {
        super(name, point);
        this.balance = balance;
    }

    increaseBalance() {
        this.balance++;
        console.log("Current Balance:", this.balance);
    }
}
const premiumUser1 = new PaidUserCreator("Atlas", 8, 100);
premiumUser1.greet();
premiumUser1.increase();
premiumUser1.increaseBalance();
