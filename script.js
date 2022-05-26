const arr = ["Roger", "Russell", "Clyde", "Egbert", "Clare", "Bobbie", "Simon", "Elizabeth", "Ted", "Caroline", "John"];
const choices = arr.sort(() => Math.random() - 0.5)
const firsthalf = choices.slice(0, 5)
const secondhalf = choices.slice(5, 10)