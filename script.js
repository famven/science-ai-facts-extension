const facts = [
    "The human brain has about 86 billion neurons, roughly the same number of stars in the Milky Way galaxy.",
    "Artificial intelligence can now detect diseases like cancer with higher accuracy than human doctors.",
    "Quantum computers use qubits that can represent both 0 and 1 simultaneously, potentially solving complex problems faster.",
    "The observable universe is estimated to be 93 billion light-years in diameter.",
    "Neurons can transmit signals at speeds up to 120 meters per second.",
    // Add more facts as desired
  ];
  
  function displayFact() {
    const factElement = document.getElementById('fact');
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factElement.textContent = randomFact;
  }
  
  displayFact();
  