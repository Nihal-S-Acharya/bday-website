document.getElementById('playMusic').addEventListener('click', function () {
    let iframe = document.getElementById('hiddenPlayer');
    let widget = SC.Widget(iframe);
    widget.play();
});

document.getElementById('surprise').addEventListener('click', function () {
    let animation = document.getElementById('animation');
    let imageBoxes = document.querySelectorAll('.image-box');

    setTimeout(() => {
        animation.classList.remove('hidden');
        animation.classList.add('fade-in');
    }, 1000);

    imageBoxes.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('show');
        }, 2000 + index * 2000);
    });
});

// Close button functionality
document.getElementById("closeButton").addEventListener("click", function () {
    window.open('', '_self', '');
    window.close();
});
