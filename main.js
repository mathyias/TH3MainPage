const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const stars = [];

for (let i = 0; i < 300; i++) {
    stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2 + 0.3,
        v: Math.random() * 0.3 + 0.05
    });
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {

        star.y += star.v;

        if (star.y > canvas.height) {
            star.y = -10;
            star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fill();
    }

    requestAnimationFrame(animate);
}

animate();
