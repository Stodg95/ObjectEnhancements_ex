function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName
  }
};

let favoriteNumber = 5;
const instructor = {
  firstName: "Scott",
  [favoriteNumber] : "That's my favorite!"
}

const instructors = {
  firstName: "Scott",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}

function createAnimal(species, verb, noise){
  return {
    species, [verb](){
      return noise;
    }
  }
}

const r = createAnimal("rooster", "crow", "cock-a-doodle-doo");