
const c=document.getElementById('stars');
const ctx=c.getContext('2d');
function r(){c.width=innerWidth;c.height=innerHeight}
r();addEventListener('resize',r);
const s=[...Array(250)].map(()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,z:Math.random()*2}));
(function a(){
ctx.clearRect(0,0,c.width,c.height);
ctx.fillStyle='white';
s.forEach(p=>{ctx.globalAlpha=Math.random();ctx.beginPath();ctx.arc(p.x,p.y,p.z,0,6.28);ctx.fill();});
requestAnimationFrame(a);
})();
