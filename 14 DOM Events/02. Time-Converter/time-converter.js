document.addEventListener('DOMContentLoaded', solve);

function solve() {


    const values = { days: 86400, hours: 3600, minutes: 60, seconds: 1 };

    const inputDaysEl = document.querySelector('#days-input');
    const inputHoursEl = document.querySelector('#hours-input');
    const inputMinutesEl = document.querySelector('#minutes-input');
    const inputSecondsEl = document.querySelector('#seconds-input');

    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleSubmitEvent)
    });

    function handleSubmitEvent(e) {
        e.preventDefault();

        const currentInputEl = e.target.querySelector('input[type="number"]');
        const currentValue = Number(currentInputEl.value);

        if (currentValue < 1) return;

        const key = currentInputEl.getAttribute('id').split('-input')[0];
        const multiplier = values[key];

        updateValues(currentValue * multiplier);
    }

    function updateValues(secondsAmount) {
        inputDaysEl.value = Number(secondsAmount / values.days).toFixed(2);
        inputHoursEl.value = Number(secondsAmount / values.hours).toFixed(2);
        inputSecondsEl.value = Number(secondsAmount / values.seconds).toFixed(2);
        inputMinutesEl.value = Number(secondsAmount / values.minutes).toFixed(2);

    }
}