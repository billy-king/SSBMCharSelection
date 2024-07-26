let characterChoice = document.querySelector('#characterChoice')
let characterName = document.querySelector('#characterName')

function changeText(charName) {
    characterName.innerText = charName    
}

// event listeners for each li
document.querySelector('#drMario').addEventListener('click', drMarioBG)
document.querySelector('#mario').addEventListener('click', marioBG)
document.querySelector('#luigi').addEventListener('click', luigiBG)
document.querySelector('#bowser').addEventListener('click', bowserBG)
document.querySelector('#peach').addEventListener('click', peachBG)
document.querySelector('#yoshi').addEventListener('click', yoshiBG)
document.querySelector('#dk').addEventListener('click', dkBG)
document.querySelector('#captainFalcon').addEventListener('click', captainFalconBG)
document.querySelector('#ganon').addEventListener('click', ganonBG)
document.querySelector('#falco').addEventListener('click', falcoBG)
document.querySelector('#fox').addEventListener('click', foxBG)
document.querySelector('#ness').addEventListener('click', nessBG)
document.querySelector('#icies').addEventListener('click', iciesBG)
document.querySelector('#kirby').addEventListener('click', kirbyBG)
document.querySelector('#samus').addEventListener('click', samusBG)
document.querySelector('#zeldaSheik').addEventListener('click', zeldaSheikBG)
document.querySelector('#link').addEventListener('click', linkBG)
document.querySelector('#youngLink').addEventListener('click', youngLinkBG)
document.querySelector('#pichu').addEventListener('click', pichuBG)
document.querySelector('#pikachu').addEventListener('click', pikachuBG)
document.querySelector('#jPuff').addEventListener('click', jPuffBG)
document.querySelector('#mewtwo').addEventListener('click', mewtwoBG)
document.querySelector('#mrGaW').addEventListener('click', mrGaWBG)
document.querySelector('#marth').addEventListener('click', marthBG)
document.querySelector('#roy').addEventListener('click', royBG)

function drMarioBG() {
    characterChoice.style.backgroundImage = "url(assets/drMarioBG.png)"
    changeText('Dr. Mario')
}
function marioBG() {
    characterChoice.style.backgroundImage = "url(assets/MarioBG.png)"
    changeText('Mario')
}
function luigiBG() {
    characterChoice.style.backgroundImage = "url(assets/luigiBG.png)"
    changeText('Luigi')
}
function bowserBG() {
    characterChoice.style.backgroundImage = "url(assets/bowserBG.png)"
    changeText('Bowser')
}
function peachBG() {
    characterChoice.style.backgroundImage = "url(assets/peachBG.png)"
    changeText('Peach')
}
function yoshiBG() {
    characterChoice.style.backgroundImage = "url(assets/yoshiBG.png)"
    changeText('Yoshi')
}
function dkBG() {
    characterChoice.style.backgroundImage = "url(assets/dkBG.png)"
    changeText('Donkey Kong')
}
function captainFalconBG() {
    characterChoice.style.backgroundImage = "url(assets/captainFalconBG.png)"
    changeText('Captain Falcon')
}
function ganonBG() {
    characterChoice.style.backgroundImage = "url(assets/ganonBG.png)"
    changeText('Ganondorf')
}
function falcoBG() {
    characterChoice.style.backgroundImage = "url(assets/falcoBG.png)"
    changeText('Falco')
}
function foxBG() {
    characterChoice.style.backgroundImage = "url(assets/foxBG.png)"
    changeText('Fox')
}
function nessBG() {
    characterChoice.style.backgroundImage = "url(assets/nessBG.png)"
    changeText('Ness')
}
function iciesBG() {
    characterChoice.style.backgroundImage = "url(assets/iciesBG.png)"
    changeText('Ice Climbers')
}
function kirbyBG() {
    characterChoice.style.backgroundImage = "url(assets/kirbyBG.png)"
    changeText('Kirby')
}
function samusBG() {
    characterChoice.style.backgroundImage = "url(assets/samusBG.png)"
    changeText('Samus')
}
function zeldaSheikBG() {
    characterChoice.style.backgroundImage = "url(assets/zeldaBG.png)"
    changeText('Zelda')
}
function linkBG() {
    characterChoice.style.backgroundImage = "url(assets/linkBG.png)"
    changeText('Link')
}
function youngLinkBG() {
    characterChoice.style.backgroundImage = "url(assets/youngLinkBG.png)"
    changeText('Young Link')
}
function pichuBG() {
    characterChoice.style.backgroundImage = "url(assets/pichuBG.png)"
    changeText('Pichu')
}
function pikachuBG() {
    characterChoice.style.backgroundImage = "url(assets/pikachuBG.png)"
    changeText('Pikachu')
}
function jPuffBG() {
    characterChoice.style.backgroundImage = "url(assets/jPuffBG.png)"
    changeText('Jigglypuff')
}
function mewtwoBG() {
    characterChoice.style.backgroundImage = "url(assets/mewtwoBG.png)"
    changeText('Mewtwo')
}
function mrGaWBG() {
    characterChoice.style.backgroundImage = "url(assets/mrGaWBG.png)"
    changeText('Mr. Game & Watch')
}
function marthBG() {
    characterChoice.style.backgroundImage = "url(assets/marthBG.png)"
    changeText('Marth')
}
function royBG() {
    characterChoice.style.backgroundImage = "url(assets/royBG.png)"
    changeText('Roy')
}