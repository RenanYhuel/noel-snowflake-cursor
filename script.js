let lastTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime < 50) return;
    lastTime = now;

    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    const star = document.createElement('div');
    star.classList.add('star');

    const offsetX = Math.random() * 30 - 10;
    const offsetY = Math.random() * 30 - 10;
    star.style.left = `${e.pageX + offsetX}px`;
    star.style.top = `${e.pageY + offsetY}px`;

    document.body.appendChild(star);

    setTimeout(() => star.remove(), 1000);
});
