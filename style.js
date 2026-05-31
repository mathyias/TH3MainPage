
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Inter,Arial,sans-serif;background:#040404;color:#fff;overflow-x:hidden}
#stars{position:fixed;inset:0;z-index:-2}
nav{position:fixed;top:0;width:100%;padding:20px 6%;display:flex;justify-content:space-between;backdrop-filter:blur(15px);border-bottom:1px solid rgba(255,255,255,.08)}
.logo{font-size:32px;font-weight:900;background:linear-gradient(90deg,#00e5ff,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.enter,.cta{text-decoration:none;color:#fff;padding:14px 24px;border-radius:18px;background:linear-gradient(90deg,#8b5cf6,#00e5ff)}
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:20px;position:relative}
.hero h1{font-size:clamp(90px,15vw,220px);font-weight:900}
.hero h2{font-size:clamp(32px,5vw,72px);margin:10px 0}
.hero p{max-width:800px;font-size:20px;opacity:.85;margin:20px 0 40px}
.glow{position:absolute;width:700px;height:700px;background:#8b5cf6;filter:blur(250px);opacity:.18;border-radius:50%}
.panel{padding:100px 8%;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:25px}
.card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(25px);padding:35px;border-radius:28px}
.card span{font-size:32px;font-weight:800;background:linear-gradient(90deg,#00e5ff,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.card p{margin-top:12px}
footer{text-align:center;padding:60px;opacity:.7}
@media(max-width:768px){.hero p{font-size:18px}.enter{display:none}}
