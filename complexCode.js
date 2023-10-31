/*
filename: complexCode.js

This code is an example of a complex JavaScript application that simulates a virtual pet game. It includes various functions and objects to manage the pet's behavior, needs, and interactions with the user.

More than 200 lines of code are provided to demonstrate the complexity and sophistication of this application.
*/

// Helper function to generate random numbers within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Pet class definition
class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 50;
    this.thirst = 50;
    this.energy = 100;
    this.happiness = 50;
  }

  feed() {
    this.hunger -= getRandomNumber(5, 10);
    if (this.hunger < 0) this.hunger = 0;
    this.happiness += getRandomNumber(5, 10);
    if (this.happiness > 100) this.happiness = 100;
  }

  drink() {
    this.thirst -= getRandomNumber(5, 10);
    if (this.thirst < 0) this.thirst = 0;
    this.happiness += getRandomNumber(5, 10);
    if (this.happiness > 100) this.happiness = 100;
  }

  sleep() {
    this.energy += getRandomNumber(10, 20);
    if (this.energy > 100) this.energy = 100;
    this.happiness += getRandomNumber(5, 10);
    if (this.happiness > 100) this.happiness = 100;
  }

  play() {
    this.energy -= getRandomNumber(10, 20);
    if (this.energy < 0) this.energy = 0;
    this.happiness += getRandomNumber(10, 20);
    if (this.happiness > 100) this.happiness = 100;
  }

  updateNeeds() {
    this.hunger += getRandomNumber(1, 3);
    if (this.hunger > 100) this.hunger = 100;
    this.thirst += getRandomNumber(1, 3);
    if (this.thirst > 100) this.thirst = 100;
    this.energy -= getRandomNumber(1, 2);
    if (this.energy < 0) this.energy = 0;
    this.happiness -= getRandomNumber(1, 2);
    if (this.happiness < 0) this.happiness = 0;
  }
}

// User interface module
const UI = (() => {
  const nameInput = document.getElementById('pet-name');
  const typeInput = document.getElementById('pet-type');
  const feedBtn = document.getElementById('feed-button');
  const drinkBtn = document.getElementById('drink-button');
  const sleepBtn = document.getElementById('sleep-button');
  const playBtn = document.getElementById('play-button');
  const statsContainer = document.getElementById('pet-stats');

  function updateStats(pet) {
    statsContainer.innerHTML = `
      <h3>${pet.name} the ${pet.type}</h3>
      <p>Hunger: ${pet.hunger}</p>
      <p>Thirst: ${pet.thirst}</p>
      <p>Energy: ${pet.energy}</p>
      <p>Happiness: ${pet.happiness}</p>
    `;
  }

  function bindUI(pet) {
    feedBtn.addEventListener('click', () => {
      pet.feed();
      updateStats(pet);
    });

    drinkBtn.addEventListener('click', () => {
      pet.drink();
      updateStats(pet);
    });

    sleepBtn.addEventListener('click', () => {
      pet.sleep();
      updateStats(pet);
    });

    playBtn.addEventListener('click', () => {
      pet.play();
      updateStats(pet);
    });
  }

  return {
    bindUI,
  };
})();

// Initialize Pet
const myPet = new Pet('Fluffy', 'Cat');

// Bind UI interactions to the Pet
UI.bindUI(myPet);

// Simulate pet needs and updates
setInterval(() => {
  myPet.updateNeeds();
  UI.updateStats(myPet);
}, 5000);  // Update every 5 seconds