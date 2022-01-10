const lenghtFirstRoom = prompt('Введите длину вашей 1й комнаты');
const weightFirstRoom = prompt('Введите ширину вашей 1й комнаты');
const lenghtSecondRoom = prompt('Введите длину вашей 2й комнаты');
const weightSecondRoom = prompt('Введите ширину вашей 2й комнаты');

const squareHouse = (lenghtFirstRoom * weightFirstRoom) + (lenghtSecondRoom * weightSecondRoom)

alert("Площадь вашего дома - " + squareHouse + "кв.м.")