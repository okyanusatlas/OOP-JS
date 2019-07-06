function UserCreator(name, point) {
    let obj = Object.create(functions);
    obj.name = name;
    obj.point = point;
    return obj;
}

const functions = {
    increase() {
        this.point++;
        console.log("current point:", this.point);
    },
    greet() {
        console.log("hello", this.name);
    }
};

const user1 = UserCreator("Okyanus", 5);
user1.increase();
user1.greet();

function PremiumUserCreator(name, point, balance) {
    let obj = UserCreator(name, point);
    Object.setPrototypeOf(obj, premiumFunctions);
    obj.balance = balance;
    return obj;
}

const premiumFunctions = {
    increaseBalance() {
        this.balance++;
        console.log("current balance:", this.balance);
    }
};

Object.setPrototypeOf(premiumFunctions, functions);

const premiumUser1 = PremiumUserCreator("Atlas", 8, 100);
premiumUser1.greet();
premiumUser1.increase();
premiumUser1.increaseBalance();