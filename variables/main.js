//Задача 1
let damage = 400;


class Weapon {
	constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }
    takeDamage(damage) {
        this.durability = this.startDurability - damage;
        if (this.durability < 0) {
            this.durability = 0;
            return this.durability
        } else {
        return this.durability
        }
    }

    getDamage() {
    	if ((this.durability/ this.startDurability) >= 0.3) {
    		return this.attack
    	} else if (this.durability === 0) {
    		return 0
    	} else {
    		return this.attack / 2
    	} 
    }

    isBroken() {
        if (this.durability > 0) {
        	return false
        } else {
        	return true 
        }
    }
}



const hand = new Weapon('Рука' , 1, Infinity, 1);
console.log(hand.name);
console.log(hand.durability);
console.log(hand.takeDamage(damage));

const bow = new Weapon('Лук' , 10, 200, 3);
console.log(bow.name);
console.log(bow.durability);
console.log(bow.takeDamage(damage));
console.log(bow.durability);
console.log(bow.getDamage(bow.newDurability));
console.log(bow.isBroken(bow.newDurability));

const sword = new Weapon('Меч' , 25, 500, 1);

const knife = new Weapon('Нож' , 5, 300, 1);

const staff = new Weapon('Посох' , 8, 300, 2);
console.log(staff.name);
console.log(staff.durability);
console.log(staff.takeDamage(damage));


const longBow = new Weapon ('Длинный лук', 15, 200, 4);
console.log(longBow.name);
console.log(longBow.durability);
console.log(longBow.takeDamage(damage));

const axe = new Weapon ('Секира', 27, 800, 1);
console.log(axe.name);
console.log(axe.durability);
console.log(axe.takeDamage(damage));

const staffStorm = new Weapon ('Посох Бури', 10, 300, 3);
console.log(staffStorm.name);
console.log(staffStorm.durability);
console.log(staffStorm.takeDamage(damage));


//Задача 2

class Hand extends Weapon {
    constructor(name, attack, durability, range) {
        super();
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }
}
const strongHand = new Hand('Рука', 1, Infinity, 1);
console.log(strongHand.name);
console.log(strongHand.durability);
console.log(strongHand.takeDamage(damage));
console.log(strongHand.getDamage())
console.log(strongHand.isBroken());


class Bow extends Weapon {
    constructor(name, attack, durability, range) {
        super();
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }
}

const newBow = new Bow('Лук', 10, 200, 3);
console.log(newBow.name);
console.log(newBow.attack);
console.log(newBow.takeDamage(damage));
console.log(newBow.durability);
console.log(newBow.getDamage())
console.log(newBow.isBroken());

class Sword extends Weapon {
    constructor(name, attack, durability, range) {
        super();
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }
}

const newSword = new Sword('Меч', 25, 500, 1);
console.log(newSword.name);

class Knife extends Weapon {
    constructor(name, attack, durability, range) {
        super();
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }
}

const newKnife = new Knife('Нож', 5, 300, 1);
console.log(newKnife.name);


class Staff extends Weapon {
    constructor(name, attack, durability, range) {
        super();
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }
}

const newStaff = new Staff('Посох', 8, 300, 2);
console.log(newStaff.name);



class LongBow extends Bow {
    constructor(name, attack, durability, range) {
        super();
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }
}

const newLongBow = new LongBow('Длинный лук', 15, 200, 4);
console.log(newLongBow.name);
console.log(newLongBow.durability);



class Axe extends Sword {
    constructor(name, attack, durability, range) {
        super();
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }
}

const newAxe = new Axe('Секира', 27, 800 ,1);
console.log(newAxe.name);
console.log(newAxe.durability);
console.log(newAxe.takeDamage(damage));
console.log(newAxe.durability);
console.log(newAxe.getDamage())
console.log(newAxe.isBroken());





class StaffStorm extends Staff {
    constructor(name, attack, durability, range) {
        super();
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }
}

const newStaffStorm = new StaffStorm('Посох бури',10, 300, 3);
console.log(newStaffStorm.name);
console.log(newStaffStorm.durability);
console.log(newStaffStorm.takeDamage(damage));
console.log(newStaffStorm.durability);
console.log(newStaffStorm.getDamage())
console.log(newStaffStorm.isBroken());