const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');

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

async function handleClick() {
    const { joke } = await fetchJoke(); // Destructuring the joke into a variable called joke
    // console.log(joke);
    jokeHolder.textContent = joke;
}

jokeButton.addEventListener('click', handleClick);