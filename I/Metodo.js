

class Hero {
    constructor (name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    
    atacar (){
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monje: "artes marciais",
            ninja: "shuriken"
        };

        const ataque = ataques[this.type] || "ataque desconhecido ";

        console.log (`O ${this.type} atacou usando o ${ataque}`);
    }

}

const hero1 = new Hero ('gandof', 200, 'mago');
hero1.atacar();

const hero2 = new Hero ('canon', 30, 'guerreiro');
hero2.atacar();

const hero3 = new Hero ('jack', 42, 'monje');
hero3.atacar();

const hero4 = new Hero ('Lee kang', 51, 'ninja')
hero4.atacar();




