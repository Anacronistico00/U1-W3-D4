const tombolone = document.getElementById('tombolone');
const btnEstrai = document.getElementById('estrai');
const btnReset = document.getElementById('cancella');
let numbers = [];

document.addEventListener('load', init());

function init() {
  generateCells();
  click();
}

function generateCells() {
  for (let i = 0; i < 90; i++) {
    const numDiv = document.createElement('div');
    numDiv.innerText = i + 1;
    tombolone.appendChild(numDiv);
  }
}

function click() {
  btnEstrai.addEventListener('click', btnExtract);
}

function btnExtract() {
  if (numbers.length === 90) {
    alert('Hai estratto tutti i numeri');
    btnEstrai.setAttribute('disabled', 'true');
    return;
  }
  let randomNum = Math.floor(Math.random() * 90) + 1;

  if (numbers.includes(randomNum)) {
    btnExtract();
    return;
  }

  numbers.push(randomNum);

  const celle = document.querySelectorAll('#tombolone div');
  for (let i = 0; i < celle.length; i++) {
    if (celle[i].innerText == randomNum) {
      celle[i].classList.add('extracted');
    }
  }
}

btnReset.addEventListener('click', function () {
  ricomincia();
});

function ricomincia() {
  const cellsNumber = document.querySelectorAll('#tombolone div');
  cellsNumber.forEach((cell) => {
    cell.classList.remove('extracted');
  });
  numbers = [];
}

console.log(numbers);
