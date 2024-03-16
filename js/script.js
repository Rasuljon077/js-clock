// birinchi strelkaga ulanamiz

const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes')

// console.log(new Date());
// new Date() - Global Object Komputerdagai hozirgi vaqtni ko'rsatadi
// getHours() - komputerdagi vaqtdan soatni olib beradi
// getMinutes() - komputerdagi vaqtdan minutni olib beradi
// getSeconds() - komputerdagi vaqtdan secundni olib beradi
// console.log(new Date().getHours());
function clock() {
    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30


    sec.style.transform = `rotate(${second}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    hour.style.transform = `rotate(${hours}deg)`
    setTimeout(() => {
        clock()
    }, 1000);

    hourNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
}
clock()

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

// links.forEach((link,i) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault()
//         links.forEach((all,j) =>{
//             all.classList.remove('active')
//             tabs[j].classList.remove('active')
//         })
//         link.classList.add('active')
//         tabs[i].classList.add('active')
//     })
// })
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        e.preventDefault()
        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove('active')
            tabs[j].classList.remove('active')
        }
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}

const click = document.querySelector('.stopwatch__btn')
const dot = document.querySelector('.tabsLink__span')

const setTimeoutSecons = document.querySelector('.stopwatch__seconds')
const setTimeoutMnutes = document.querySelector('.stopwatch__minutes')
const setTimeoutHours = document.querySelector('.stopwatch__hours')

click.addEventListener('click',()=>{
   if (click.innerHTML == "start") {
    click.innerHTML = "stop"
    dot.classList.add('active')
    second()
   }else if(click.innerHTML == "stop"){
    click.innerHTML = 'clean'
    dot.classList.add('active_clear')
   } else{
     click.innerHTML = 'start'
     dot.classList.remove('active_clear','active')
     setTimeoutSecons.innerHTML = 0
     setTimeoutMnutes.innerHTML = 0
     setTimeoutHours.innerHTML = 0
    
   }
})

function second() {
    if (click.innerHTML == "stop") {
    setTimeoutSecons.innerHTML++
    }
    if (setTimeoutSecons.innerHTML == 59) {
        setTimeoutSecons.innerHTML = "0"
        setTimeoutMnutes.innerHTML++
        if(setTimeoutMnutes.innerHTML == 59){
            setTimeoutMnutes.innerHTML = "0"
            setTimeoutHours.innerHTML++
        }
    }
    setTimeout(() => {
        second()
    }, 1000);
     
}





