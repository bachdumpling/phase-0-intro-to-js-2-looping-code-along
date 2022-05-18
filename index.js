// const  gifts = [];

// function writeCards(gifts, event) {
//     const messages = [];
//     for (let i = 0; i < gifts.length; i++) {
//         messages.push(`Thank you, ${gifts[i]}, for the wonderful ${event} gift!`);
//     }
//     return gifts;
// }

// writeCards();

const names = [];

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

const number = [1,2,3,4,5,6,7,8,9,10];

function countDown(number) {
    let i = 10
    while (i>=0) {
        console.log(i--)
    }

    return number;
}