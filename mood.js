let colors = ['yellow', 'blue', 'red', 'white'];

for (const square of document.querySelectorAll('.square')) {
    square.addEventListener('click', () => {
      square.style.background = colors[(colors.indexOf(square.style.background) + 1) % colors.length];
    });
}