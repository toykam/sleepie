document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Define CSS keyframes for falling, rotating, and sliding animations
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes falling {
            to { top: ${window.innerHeight + 150}px; }
        }
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes slide {
            from { left: -200px; }
            to { left: ${window.innerWidth}px; }
        }
    `;
    document.head.appendChild(styleSheet);

    // Function to create and animate a juice box
    function createAndAnimateJuiceBox() {
        const img = document.createElement('img');
        img.src = 'images/falll.png'; // Updated path
        img.style.position = 'fixed';
        img.style.maxWidth = '100px';
        img.style.height = 'auto';
        img.style.zIndex = '15';
        img.style.pointerEvents = 'none';
        img.style.display = 'block'; // Added to ensure visibility

        // Generate a random starting position
        const startX = Math.random() * window.innerWidth;
        img.style.left = `${startX}px`;
        img.style.top = '-150px';

        body.appendChild(img);

        const fallingDuration = 4 + Math.random() * 2;
        const rotateDuration = 5 + Math.random();
        img.style.animation = `falling ${fallingDuration}s linear forwards, rotate ${rotateDuration}s linear infinite`;

        setTimeout(() => {
            img.remove();
        }, fallingDuration * 1000);
    }

    // Function to create and animate the sliding penguin
    function createAndAnimateSlidingPenguin() {
        const img = document.createElement('img');
        img.src = 'images/FROGE (2).png'; // Updated path
        img.style.position = 'fixed';
        img.style.width = '200px';
        img.style.height = 'auto';
        img.style.bottom = '-10px';
        img.style.zIndex = '10';
        img.style.pointerEvents = 'none';
        img.style.display = 'block'; // Added to ensure visibility

        body.appendChild(img);

        const slideDuration = 5;
        img.style.animation = `slide ${slideDuration}s linear infinite`;
    }

    // Create initial set of juice boxes
    for (let i = 0; i < 9; i++) {
        createAndAnimateJuiceBox();
    }

    setInterval(createAndAnimateJuiceBox, 1000);
    createAndAnimateSlidingPenguin();
});
