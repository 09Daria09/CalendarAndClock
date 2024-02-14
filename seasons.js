function generateCalendar() {
    let isValidDate = false;
let userInput, year, month, inputDay;

while (!isValidDate) {
    userInput = prompt("Введите дату в формате DD/MM/YYYY:");
    if (!/^([0-2]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(userInput)) {
        alert("Дата должна быть в формате DD/MM/YYYY. Попробуйте снова.");
        continue;
    }

    [inputDay, month, year] = userInput.split('/').map(num => parseInt(num, 10)); 
    const date = new Date(year, month - 1, inputDay);

    if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === inputDay) {
        isValidDate = true;
    } else {
        alert("Введена некорректная дата. Пожалуйста, введите действительную дату.");
    }
}


    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = '';
    ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'day day-header';
        dayElement.innerText = day;
        calendarDiv.appendChild(dayElement);
    });

    const firstDayOfMonth = new Date(year, month - 1, 1);
    let startDayOfWeek = firstDayOfMonth.getDay();
    startDayOfWeek = startDayOfWeek === 0 ? 7 : startDayOfWeek; 
    const daysInMonth = new Date(year, month, 0).getDate();

    for (let i = 1; i < startDayOfWeek; i++) {
        const spacer = document.createElement('div');
        spacer.className = 'day';
        calendarDiv.appendChild(spacer);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.innerText = day;
        if (day === inputDay) {
            dayElement.classList.add('selected-day');
        }
        calendarDiv.appendChild(dayElement);
    }

    const lastDayOfMonth = new Date(year, month - 1, daysInMonth);
    let endDayOfWeek = lastDayOfMonth.getDay();
    endDayOfWeek = endDayOfWeek === 0 ? 7 : endDayOfWeek;
    for (let i = endDayOfWeek; i < 7; i++) {
        const spacer = document.createElement('div');
        spacer.className = 'day';
        calendarDiv.appendChild(spacer);
    }

    let backgroundImage = '';
    switch (month) {
        case 12:
        case 1:
        case 2:
            backgroundImage = 'Seasons/1.jpg';
            break;
        case 3:
        case 4:
        case 5:
            backgroundImage = 'Seasons/2.jpg';
            break;
        case 6:
        case 7:
        case 8:
            backgroundImage = 'Seasons/3.jpg';
            break;
        case 9:
        case 10:
        case 11:
            backgroundImage = 'Seasons/4.jpg';
            break;
    }

    calendarDiv.style.backgroundImage = `url(${backgroundImage})`;
    calendarDiv.style.backgroundSize = 'cover';
    calendarDiv.style.backgroundPosition = 'center';
}

generateCalendar();
