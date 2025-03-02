

setInterval(() => {
    document.querySelector('dialog').style.opacity = 1;

  setTimeout(() => {
    document.querySelector('dialog').style.opacity = 0;
  }, 5000);
}, 10000);