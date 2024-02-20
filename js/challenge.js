const counter = document.getElementById('counter')
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');
const likes = document.querySelector('.likes');
let interval = updateCounter();

function updateCounter() {
    return setInterval(function () {
        let text = parseInt(counter.innerText);
        counter.innerText = text + 1;
        }, 1000);
};

plus.addEventListener('click', () => {
    let button = parseInt(counter.innerText);
    counter.innerText = button + 1;
});

minus.addEventListener('click', () => {
    let button = parseInt(counter.innerText);
    counter.innerText = button - 1;
});

heart.addEventListener('click', () => {
    let value = counter.innerText
    likes[value] = (likes[value] || 0) +1;
    likes.innerHTML = '';

    for (const value in likes) {
        if (likes.hasOwnProperty(value)) {
            let numberLikes = document.createElement('li');
            numberLikes.innerText = 'Number' + value + 'has been liked' + likes[value] + 'times';
            likes.appendChild(numberLikes);
        }
    }
});

pause.addEventListener('click', () => {
    const otherButtons = document.querySelectorAll('button:not([id="pause"])');

    if (interval) {
        clearInterval(interval);
        interval = null;
        pause.innerText = 'Resume';
        otherButtons.forEach(button => button.disabled = true);
    } else {
        interval = updateCounter();
        pause.innerText = 'Pause';
        otherButtons.forEach(button => button.disabled = false);
    }
});

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentInput = commentForm.querySelector('input[type="text"]');
    const comment = commentInput.value;
    const comments = document.querySelector('.comments');
    const newComment = document.createElement('p');
    newComment.innerText = comment;
    comments.appendChild(newComment);
    commentInput.value = '';
})