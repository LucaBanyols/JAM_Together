class Character {
    HP;
    Speed;
    Attack
    constructor() {
        this.HP = 100;
        this.Speed = 5;
        this.Attack = 5;
    }
    get_HP() {
        return this.HP;
    }
    get_speed() {
        return this.Speed;
    }
    get_attack() {
        return this.Attack;
    }
    add_HP(x) {
        this.HP = this.HP + x;
    }
    add_speed(x) {
        this.Speed = this.Speed + x;
    }
    add_attack(x) {
        this.attack = this.attack + x;
    }
}

module.exports = Character