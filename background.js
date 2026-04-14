document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.background img');
    let index = 0;

    const interval = 7000; // 7 segundos
  
    setInterval(() => {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }, 5000);
});
