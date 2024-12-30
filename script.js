document.addEventListener('DOMContentLoaded', () => {
    const flowerBeds = document.querySelectorAll('.flower-bed');
    const vase = document.getElementById('vase');
    const reserveButton = document.getElementById('reserve');

    flowerBeds.forEach(bed => {
        bed.addEventListener('click', () => {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flower.textContent = '🌸';
            vase.appendChild(flower);
        });
    });

    reserveButton.addEventListener('click', () => {
        const flowers = vase.querySelectorAll('.flower');
        const flowerCount = flowers.length;
        alert(`Sie haben ${flowerCount} Blumen reserviert!`);
        // Hier kann die Backend-Logik zur Reservierung hinzugefügt werden
    });
});
