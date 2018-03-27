function Pet(words) {
    this.words = words;
    this.speak = function () {
        console.log(this.words)
    }
}

function Dog(words) {
    // Pet.call(this, words);
    Pet.apply(this, words)
}

var dog = new Dog(['Wang', 'aa']);
dog.speak()