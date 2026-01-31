/* ===== MODE ===== */
function toggleMode(){
  document.body.classList.toggle('dark-mode')
  localStorage.setItem('mode',
    document.body.classList.contains('dark-mode')?'dark':'light')
  updateModeIcon()
}

function updateModeIcon(){
  document.getElementById('mode-icon').src =
    document.body.classList.contains('dark-mode')
    ? 'https://files.catbox.moe/otr78j.png'
    : 'https://files.catbox.moe/yqnixc.png'
}

/* ===== NAVIGASI ===== */
function navigateTo(e,id){
  e.preventDefault()
  history.pushState({},'',id)
  showSection(id)
}

function showSection(id){
  document.querySelectorAll('section')
    .forEach(s=>s.classList.remove('active'))
  document.getElementById(id)?.classList.add('active')
}

/* ===== JAM & BATERAI ===== */
setInterval(()=>{
  document.getElementById('time').textContent =
    'Waktu: '+new Date().toLocaleTimeString('id-ID')
},1000)

navigator.getBattery?.().then(b=>{
  document.getElementById('battery-level').textContent =
    'Baterai: '+Math.round(b.level*100)+'%'
})

/* ===== TYPING TEXT ===== */
const text="Selamat datang di website pribadi saya ✨"
let i=0
;(function type(){
  if(i<text.length){
    typed-text.textContent+=text[i++]
    setTimeout(type,40)
  }
})()

/* ===== STATISTIK PENGUNJUNG ===== */
let visitors = localStorage.getItem('visitors') || 0
visitors++
localStorage.setItem('visitors',visitors)
document.getElementById('visitor-count').textContent = visitors

/* ===== WAKTU ONLINE ===== */
let seconds = 0
setInterval(()=>{
  seconds++
  document.getElementById('online-time').textContent =
    Math.floor(seconds/60)+'m'
},1000)

/* ===== MUSIK ===== */
let playing=false
function toggleMusic(){
  const m=document.getElementById('bg-music')
  const icon=document.getElementById('music-icon')
  playing ? m.pause() : m.play()
  playing=!playing
  icon.textContent = playing?'⏸️':'▶️'
}

/* LOAD MODE */
if(localStorage.getItem('mode')==='dark'){
  document.body.classList.add('dark-mode')
}
updateModeIcon()
