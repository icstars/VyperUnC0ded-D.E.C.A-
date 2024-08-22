const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const infoBox = this.nextElementSibling;
        infoBox.style.display = infoBox.style.display === 'block' ? 'none' : 'block';
    });
});