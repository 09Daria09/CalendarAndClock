function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const basePath = 'IMG/';
    

    const timeString = `${hours}:${minutes}:${seconds}`;
    let imgHTML = '';
    for (const char of timeString) {
        const imgName = char === ':' ? 'points' : char;
        const extraClass = char === ':' ? ' class="points"' : ' class="clock-img"';
        imgHTML += `<img${extraClass} src="${basePath}${imgName}.gif" alt="${char}">`;
    }
    
    

    document.getElementById('clock').innerHTML = imgHTML;
}

function blinkPoints() {
    const points = document.querySelectorAll('.points');
    points.forEach(point => {
        point.style.opacity = '1';
    });
    setTimeout(() => {
        points.forEach(point => {
            point.style.opacity = '0';
        });
    }, 300); 
}

setInterval(updateClock, 1000);
setInterval(blinkPoints, 2000);

window.onload = updateClock;

  
