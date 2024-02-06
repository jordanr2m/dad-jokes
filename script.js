const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
    'Ugh.',
    '🤦🏻‍♂️',
    'omg dad.',
    'you are the worst',
    'seriously',
    'stop it.',
    'please stop',
    'that was the worst one',
];

async function fetchJoke () {
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        }
    });
    const data = await response.json();
    // console.log(data); // Shows joke obj properties
    return data;
}

function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (item === not) {
        console.log('Ahh we used that one last time, try again!')
        return randomItemFromArray(arr, not)
    }
    return item;
}

async function handleClick() {
    const { joke } = await fetchJoke(); // Destructuring the joke into a variable called joke
    // console.log(joke);
    jokeHolder.textContent = joke;
    jokeHolder.style.fontSize = '2.5rem';
    jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent)
}

jokeButton.addEventListener('click', handleClick);