const $play = document.getElementById("play")
const $audio = document.getElementById("audio")
const $nota = document.querySelector('.nota')
const $result = document.querySelector(".result")


const notas = [
    new Audio('music/do.mp3'),
    new Audio('music/re.mp3'),
    new Audio('music/mi.mp3'),
    new Audio('music/fa.mp3'),
    new Audio('music/sol.mp3'),
    new Audio('music/la.mp3'),
    new Audio('music/si.mp3')
]

const play = () => {
    $result.textContent = ""
    $result.style.display = "none" 
    let rand = random()
    notas[rand].play()
    seeNote(rand)
}

let notaText = ""
const seeNote = (num) => {
    switch (num) {
        case 0:
            notaText = "do"
            break;
        case 1:
            notaText = "re"
            break;
        case 2: 
            notaText = "mi"
            break;
        case 3:
            notaText = "fa"
            break;
        case 4: 
            notaText = "sol"
            break;
        case 5: 
            notaText = "la"
            break;
        case 6: 
            notaText = "si"
            break;
    }
    
    $nota.textContent = notaText
}

const random = () => {
    let numRandom = Math.floor(Math.random() * notas.length)
    return numRandom;
}

$play.addEventListener('click', play)
const $do = document.querySelector(".do").getAttribute("name")
document.querySelector(".do").addEventListener("click", () => {
    console.log($do);
})

const $buttonsNotes = document.querySelectorAll(".btn-note")

$buttonsNotes.forEach((el) => {
    el.addEventListener("click", () => {
        const noteElement = el.getAttribute("name")
        $result.style.display = "block" 

        if(noteElement == notaText){
            $result.classList.remove("nota-no-acertada")
            $result.classList.add("nota-acertada")
            $result.textContent = "Nota Acertada"
        } else {
            $result.classList.remove("nota-acertada")
            $result.classList.add("nota-no-acertada")
            $result.textContent = "Nota No Acertada"
        }
    })
})