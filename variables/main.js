//Задача 1

class Weapon {
	constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.takeDamage = function(damage) {
            durability = this.durability - damage;
                if (durability < 0) {
           	       return 0;
                }
            return durability
        }
        this.newDurability = this.takeDamage(damage);
        this.getDamage = function(newDurability) {
        	if ((newDurability / durability) >= 0.3) {
        		return this.attack
        	} else if (newDurability === 0) {
        		return 0
        	} else {
        		return this.attack / 2
        	} 
        }

        this.isBroken = function(newDurability) {
            if (durability > 0) {
            	return false
            } else {
            	return true 
            }
        }
    }
}

let damage = 100;

const hand = new Weapon('Рука' , 1, Infinity, 1);
console.log(hand.name);
console.log(hand.durability);
console.log(hand.takeDamage(damage));
console.log(hand.getDamage(hand.newDurability));
console.log(hand.isBroken(hand.newDurability));

const bow = new Weapon('Лук' , 10, 200, 3);
console.log(bow.name);
console.log(bow.durability);
console.log(bow.takeDamage(damage));
console.log(bow.getDamage(bow.newDurability));
console.log(bow.isBroken(bow.newDurability));

const sword = new Weapon('Меч' , 25, 500, 1);
console.log(sword.name);
console.log(sword.durability);
console.log(sword.takeDamage(damage));
console.log(sword.getDamage(sword.newDurability));
console.log(sword.isBroken(sword.newDurability));

const knife = new Weapon('Нож' , 5, 300, 1);
console.log(knife.name);
console.log(knife.durability);
console.log(knife.takeDamage(damage));
console.log(knife.getDamage(knife.newDurability));
console.log(knife.isBroken(knife.newDurability));

const staff = new Weapon('Посох' , 8, 300, 2);
console.log(staff.name);
console.log(staff.durability);
console.log(staff.takeDamage(damage));
console.log(staff.getDamage(staff.newDurability));
console.log(staff.isBroken(staff.newDurability));

const longBow = new Weapon ('Длинный лук', 15, 200, 4);
console.log(longBow.name);
console.log(longBow.durability);
console.log(longBow.takeDamage(damage));
console.log(longBow.getDamage(longBow.newDurability));
console.log(longBow.isBroken(longBow.newDurability));

const axe = new Weapon ('Секира', 27, 800, 1);
console.log(axe.name);
console.log(axe.durability);
console.log(axe.takeDamage(damage));
console.log(axe.getDamage(axe.newDurability));
console.log(axe.isBroken(axe.newDurability));

const staffStorm = new Weapon ('Посох Бури', 10, 300, 3);
console.log(staffStorm.name);
console.log(staffStorm.durability);
console.log(staffStorm.takeDamage(damage));
console.log(staffStorm.getDamage(staffStorm.newDurability));
console.log(staffStorm.isBroken(staffStorm.newDurability));


//Задача 2

class Hand extends Weapon {
	constructor() {
    	super(name);
    	super(attack);
    	super(durability);
    	super(range);
    	super(takeDamage(damage));
    	super(newDurability);
    	super(getDamage(newDurability));
    	super(isBroken(newDurability));
    }
}

class longBow extends Bow {
	constructor() {
		super(name);
    	super(attack);
    	super(durability);
    	super(range);
    	super(takeDamage(damage));
    	super(newDurability);
    	super(getDamage(newDurability));
    	super(isBroken(newDurability));
	}
}

const strongHand = new Hand('Сильная рука', 15, 400, 2);
console.log(strongHand.name);
