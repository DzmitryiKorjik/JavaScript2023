"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    const {skills: {exp} } = plan;
    return exp;
}

const experienceResult = showExperience(personalPlanPeter);
console.log(experienceResult); // Вывод: '1 month'

function showProgrammingLangs(plan) {
    const { skills: {programmingLangs} } = plan;

    if (!programmingLangs || Object.keys(programmingLangs).length === 0) {
        return ""; // Если нет информации о языках, возвращаем пустую строку
    }
    const result = Object.entries(programmingLangs)
        .map(([lang, percent]) => `Язык ${lang} изучен на ${percent}`)
        .join(" ");

    return result;

}

const programmingLangsResult = showProgrammingLangs(personalPlanPeter);
console.log (programmingLangsResult); // Вывод: "Язык js изучен на 20% Язык php изучен на 10%"

