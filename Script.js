const INIT_INPUTS_SIZE = 3;

function init() {
    for (let i = 0; i < INIT_INPUTS_SIZE; ++i) {
        addInput();
    }
    let buttonAdd = document.getElementById("btn-add");
    buttonAdd.className = 'btn-add';
    buttonAdd.addEventListener("click", (evt) => {
        addInput();
    });
}

init();

function addInput() {
    let allInputs = document.getElementById("elements");
    let inputsCount = allInputs.children.length;
    let nextInputNumber = ++inputsCount;

    let inputElement = document.createElement("div");
    inputElement.setAttribute("data-index", nextInputNumber);

    let input = document.createElement("input");
    input.className = "elements";
    attachListenerOnInput(input);
    let buttonDelete = document.createElement("button");
    buttonDelete.className = 'btn-delete';
    buttonDelete.innerHTML = 'x';
    buttonDelete.setAttribute("data-index", nextInputNumber);
    buttonDelete.addEventListener("click", (evt) => {
        let inputNumber = evt.target.dataset.index;
        console.log(evt.target);
        console.log(inputNumber);
        let inputToRemove = document.querySelector(`[data-index='${inputNumber}']`);
        console.log(inputToRemove);
        allInputs.removeChild(inputToRemove);
        countSum();
    });

    inputElement.appendChild(input);
    inputElement.appendChild(buttonDelete);

    allInputs.appendChild(inputElement);
}

function attachListenerOnInput(inputElement) {
    inputElement.addEventListener('input', () => {
        countSum();
    });
}

function countSum() {
    let sum = 0;
    let inputElements = document.getElementsByTagName("input");
    for (let inputElement of inputElements) {
        let numberValue = inputElement.value;
        if (!isNaN(numberValue) && numberValue !== '') {
            console.log(numberValue);
            sum += parseInt(numberValue);
        }
    }
    let sumLabel = document.getElementById("summ-label");
    sumLabel.innerHTML = `Загальна сумма: ${sum}`;
}