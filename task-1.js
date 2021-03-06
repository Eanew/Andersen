const INVALID_INPUT_MESSAGE = `Некорректный ввод!`

const isValidNumber = input => input && !isNaN(+input)

const logNumber = () => {   
    const number = prompt(`Введите десятичное число:`)

    if (!isValidNumber(number)) return console.log(INVALID_INPUT_MESSAGE)

    const notation = prompt(`Введите систему исчисления:`)

    console.log(!isValidNumber(notation) ? INVALID_INPUT_MESSAGE : (+number).toString(notation))
}

logNumber()
