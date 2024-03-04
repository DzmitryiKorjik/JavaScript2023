'use strict';

// Место для первой задачи
function calculateVolumeAndArea(edgeLength) {
    if (typeof edgeLength !== 'number' || edgeLength <= 0 || !Number.isInteger(edgeLength)) {
        return 'При вычислении произошла ошибка'
    }
    const volume = edgeLength * edgeLength * edgeLength;
    const surfaceArea = 6 * edgeLength * edgeLength;
    
    return `Объем куба: ${volume}, площадь всей поверхности: ${surfaceArea}`;
}
console.log(calculateVolumeAndArea(3));
    

// Место для второй задачи
function getCoupeNumber(seatNumber) {
    if (typeof seatNumber !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }
    if (seatNumber % 4 === 0) {
        return Math.floor(seatNumber / 4);
    } else {
        return Math.floor(seatNumber / 4) + 1;
    }
}
console.log(getCoupeNumber(5));
console.log(getCoupeNumber(0));