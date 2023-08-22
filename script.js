(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    function updateCountdown(countDown, index) {
        const x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;

            const daysEl = document.getElementsByClassName('days')[index];
            const hoursEl = document.getElementsByClassName('hours')[index];
            const minutesEl = document.getElementsByClassName('minutes')[index];
            const secondsEl = document.getElementsByClassName('seconds')[index];

            daysEl.innerText = Math.floor(distance / day);
            hoursEl.innerText = Math.floor((distance % day) / hour);
            minutesEl.innerText = Math.floor((distance % hour) / minute);
            secondsEl.innerText = Math.floor((distance % minute) / second);

            if (distance < 0) {
                document.getElementsByClassName('webinar-details')[index].style.display = 'none';
                clearInterval(x);
            }
        }, 0);
    }

    function startCountdown(dayMonth, year, index) {
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, '0'),
            mm = String(today.getMonth() + 1).padStart(2, '0'),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1;

        today = mm + '/' + dd + '/' + yyyy;
        let webinarDate = dayMonth + year;
        if (today > webinarDate) {
            webinarDate = dayMonth + nextYear;
        }

        const countDown = new Date(webinarDate).getTime();
        updateCountdown(countDown, index);
    }

    // Here we can pass the webinar date for each webinar
    startCountdown('09/30/', new Date().getFullYear(), 0);
    startCountdown('10/31/', new Date().getFullYear(), 1);
    //Specific year
    startCountdown('12/25/', 2024, 2);
})();


document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.querySelector('.close-btn');
    const video = document.getElementById('myVideo');

    closeButton.addEventListener('click', function () {
        // Pause the video
        video.pause();
    });
});