// Program generates random quotes, often mashing up quotes with random names and years of death

// Store arrays in an object
const msgData = {
    quotes: [
        'Be yourself; everyone else is already taken.',
        'So many books, so little time.',
        'A room without books is like a body without a soul.',
        'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        'Be the change that you wish to see in the world.'
    ],
    authors: [
        'Oscar Wilde',
        'Frank Zappa',
        'Marilyn Monroe',
        'Albert Einstein',
        'Mahatma Gandhi'
    ],
    yearsOfDeath: [1900, 1993, 1962, 1955, 1948],
};

// Generate a random number based on the length of an array
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Generate a random message
function generateRandomMessage(data) {
    const randomQuote = data.quotes[generateRandomNumber(data.quotes.length)];
    const randomAuthor = data.authors[generateRandomNumber(data.authors.length)];
    const randomYear = data.yearsOfDeath[generateRandomNumber(data.yearsOfDeath.length)];

    return `"${randomQuote}"\nBy: ${randomAuthor}\nDied in: ${randomYear}`;
}

// Display the generated message
console.log(generateRandomMessage(msgData));
