'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    // Вычисляем общую площадь магазинов
    const totalArea = data.shops.reduce((acc, shop) => acc + (shop.width * shop.length), 0);
    // Вычисляем общий объем торгового центра
    const totalVolume = totalArea * data.height;
    // Вычисляем стоимость отопления для всего объема
    const heatingCost = totalVolume * data.moneyPer1m3;
    // Сравниваем стоимость отопления с бюджетом
    if (heatingCost <= data.budget) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

const result = isBudgetEnough(shoppingMallData);
console.log(result);