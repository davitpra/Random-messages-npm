const messages = [
    "oscar",
    "ana",
    "nicolay",
    "yessica",
    "diego",
    "juan"
];

const randomMsg = () => {
    const message = messages [ Math.floor(Math.random()* messages.length)];
    console.log (message);
};

module.exports = {randomMsg};

