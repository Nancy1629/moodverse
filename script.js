
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mood-form');
    const moodInput = document.getElementById('mood');
    const message = document.getElementById('message');
    const galaxy = document.getElementById('galaxy');
    const myButton = document.getElementById('my-button');
 myButton.addEventListener('click', function (e) {
    e.preventDefault();

    const mood = moodInput.value.trim();
    if (mood === '') {
        message.textContent = "Please enter a mood.";
        return;
    }

    saveMood(mood);
    message.textContent = getMoodMessage(mood);
    form.reset();
});


  

    // Load saved moods
    displaySavedMoods();

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const mood = moodInput.value.trim();

        if (mood === '') {
            message.textContent = "Please enter a mood.";
            return;
        }

        saveMood(mood);
        message.textContent = getMoodMessage(mood);
        form.reset();
    });

    function saveMood(mood) {
        let moods = JSON.parse(localStorage.getItem('moods')) || [];
        moods.push({ mood: mood, date: new Date().toLocaleDateString() });
        localStorage.setItem('moods', JSON.stringify(moods));
        addStarToGalaxy(mood);
    }

    function displaySavedMoods() {
        let moods = JSON.parse(localStorage.getItem('moods')) || [];
        moods.forEach(entry => {
            addStarToGalaxy(entry.mood);
        });
    }




    function addStarToGalaxy(mood) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.title = mood;

        // Random position inside the galaxy
        star.style.top = Math.random() * 95 + '%';
        star.style.left = Math.random() * 95 + '%';

        galaxy.appendChild(star);
    }


});



