let btnSquare = document.querySelector('.btnSquare');
let btnCode = document.querySelector('.btnCode');
let codePlace = document.querySelector('.code-place')
let showCode = true

btnSquare.addEventListener('click', function () {
    const lenghtFirstRoom = prompt('Введите длину вашей 1й комнаты');
    const weightFirstRoom = prompt('Введите ширину вашей 1й комнаты');
    const lenghtSecondRoom = prompt('Введите длину вашей 2й комнаты');
    const weightSecondRoom = prompt('Введите ширину вашей 2й комнаты');

    const squareHouse = (lenghtFirstRoom * weightFirstRoom) + (lenghtSecondRoom * weightSecondRoom)

    alert("Площадь вашего дома - " + squareHouse + "кв.м.")
});

btnCode.addEventListener('click', function () {
    if (!showCode) {
        codePlace.classList.add('past')
        showCode = !showCode
        }
     else {
    codePlace.classList.remove('past')
        showCode = !showCode
    }
})

insertCode();
function insertCode(){
    let code = document.createElement('pre');
    code.innerHTML = `
function SeasonsCreator(season = 'не задали'){
    this.numberMounts=3;
    this.nowYear=2022;
    this.season=season;
    this.welcomeSeason = function (){
        console.log('\${this.numberMounts} месяца \${this.season} \${this.nowYear} - прекрасное время года!')
    }
}`
codePlace.appendChild(code)
}

function SeasonsCreator(season = 'не задали'){
    this.numberMounts=3;
    this.nowYear=2022;
    this.season=season;
    this.welcomeSeason = function (){
        console.log(`${this.numberMounts} месяца ${this.season} ${this.nowYear} - прекрасное время года!`)
    }
}
