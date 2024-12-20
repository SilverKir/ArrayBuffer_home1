export class Character {

    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
        this.stoned = false;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    set attack(value) {
        this._attack = value;
    }

    get attack() {
        return this._attack;
    }

    getAttack(distance) {
        let newAttack = this.attack;
        newAttack = newAttack * (1 - (distance - 1) * 0.1);
        if (this.stoned) {
            newAttack = newAttack - Math.log2(distance) * 5;
        }
        if (newAttack < 0) {
            newAttack = 0;
        }
        return newAttack;
    }
}