const INVALID_INPUT_MESSAGE = `Некорректный ввод!`

const isValidNumber = input => input && !isNaN(+input)

const logSumAndQuotient = () => {   
    const first = prompt(`Введите первое число:`)

    if (!isValidNumber(first)) return console.log(INVALID_INPUT_MESSAGE)

    const second = prompt(`Введите второе число:`)

    console.log(!isValidNumber(second) ? INVALID_INPUT_MESSAGE : `Ответ: ${(+first) + (+second)}, ${first / second}.`)
}

logSumAndQuotient()
