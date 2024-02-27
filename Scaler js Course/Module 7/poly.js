class Animal {
    sound(){
        console.log('Animals makes different sounds')
    }

}

class Dog {
    sound(){
        console.log('Dog Barks')
    }
}

class Cat {
    sound(){
        console.log('Cat Mews')
    }
}

let Animal1 = new Animal()

let tommy = new Dog()

let percy = new Cat()

tommy.sound()
percy.sound()
Animal1.sound()