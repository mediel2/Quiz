const Questions = [
    {
        question: "В какой войне был убит Андуин Лотар?",
        options: ["1", "2", "3", "4"],
        answer: 2,
    },
    {
        question: "Сколько примерно на данный момент лет Иллидану?",
        options: ["10000 лет", "50 лет", "15000 лет", "1000 лет"],
        answer: 3,
    },
    {
        question: "Как называются две играбельные фракции в World of Warcraft?",
        options: ["Орда и Альянс", "Алый орден и Серебрянный рассвет", "Алдоры и Провидцы", "Пылающий легион и Плеть"],
        answer: 1,
    },
    {
        question: "Сколько раз Легион нападал на Азерот?",
        options: ["1", "2", "3", "Легион никогда не нападал на Азерот"],
        answer: 3,
    },
    {
        question: "Кто был первым рыцарем смерти?",
        options: ["Артас Менетил", "Дарион Могрейн", "Терон Кровожад", "Газ Душегуб"],
        answer: 3,
    },
    {
        question: "Кем был Кел'Тузад до вступления в плеть?",
        options: ["Жрецом", "Чернокнижником", "Инженером", "Магом"],
        answer: 4,
    },
    {
        question: "Единственный смертный, кто смог ранить Саргераса",
        options: ["Громмаш Адский крик", "Броксигар Саурфанг", "Иллидан фрость бури", "Тирион Фордринг"],
        answer: 2,
    },
    {
        question: "Самый сильный древний бог на Азероте",
        options: ["И'шарадж", "Йогг-Сарон", "Н'зот", "К'тун"],
        answer: 1,
    },
    {
        question: "Кем был Нер'зул до смерти?",
        options: ["Человек", "Орк", "Дреней", "Эльф"],
        answer: 2,
    },
    {
        question: "Высшая раса вселенной Warcraft",
        options: ["Повелители бездны", "Титаны", "Предвечные", "Мурлоки"],
        answer: 4,
    },
    {
        question: "final",
        options: ["final", "final"],
        answer: 0,
    },
]

// определение элементов 
const question = document.querySelector('.question');
const answers = document.querySelector('.variant');
const next = document.querySelector('.next');
const result = document.querySelector('.answer-btn');

// счёт
let score = 0;
let questionNumber = 0;

clearForm();
getQuestion();
next.onclick = checkAnswer;

//-------------- функции --------------------

// очистка формы
function clearForm() {
    question.innerHTML = '';
    answers.innerHTML = '';
}

// генерация вопроса
function getQuestion() {
    const newQuestion = `<h1 class="question">${Questions[questionNumber]['question']}</h1>`;
    question.innerHTML = newQuestion;

    let num = 1
    for (i of Questions[questionNumber]['options']) {
        const newOptoins = 
        `<label>
            <li class="options_num">
                <input value="${num}" class="options_btn" type="radio" name="answer">
                <span class="options">${i}</span>
            </li>
        </label>`

        answers.innerHTML += newOptoins;
        num++
    }
}

// проверка ответа
function checkAnswer() {
    const options = document.querySelector('input[class="options_btn"]:checked');
    const rightAnswer = document.querySelector(`input[value="${Questions[questionNumber]['answer']}"]`);

    if (!options) {
        return
    } else if (options == rightAnswer) {
        score++
    }

    questionNumber++
    clearForm();
    getQuestion();

    if (questionNumber == 10) {
        showResult()
    }
}

//результат викторины
function showResult() {
    clearForm();
    getQuestion();

    question.innerHTML = `<h1 class="question-final">Викторина завершена!</h1>`;

    switch (score) {
        case 1: score_name = "очко"
            break;
        case 2:
        case 3:
        case 4:
            score_name = "очка"            
            break;        
        default: score_name = "очков"
            break;
    }

    result.innerHTML = `
    <div class="result"> Ваш результат <br> 
        <span class="amount">${score} ${score_name}</span>
    </div>`;

    next.innerHTML = `    
        <button class="restart" type="button">Начать заново</button>
    `

    const restart = document.querySelector('.restart');
    restart.onclick = function() {        
        history.go();
    };
}
