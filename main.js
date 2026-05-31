// 1. Logika gwiazd
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener("resize", resize); resize();

const stars = Array.from({ length: 300 }, () => ({
    x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
    r: Math.random() * 2 + 0.3, v: Math.random() * 0.3 + 0.05
}));

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
        s.y += s.v; if (s.y > canvas.height) s.y = -10;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();

// 2. Podpięcie pod API (Miejsce na Twój kod Web3)
document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('address').innerText = accounts[0].substring(0, 10) + "...";
            console.log("Wallet connected:", accounts[0]);
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        alert("Zainstaluj MetaMask!");
    }
});
