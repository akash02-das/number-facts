let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
// numberInput.addEventListener('input', getFactAjax);
numberInput.addEventListener('input', getNumberFactFetch);

// function getNumberFactAjax() {
//     let number = numberInput.value;

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/' + number);

//     xhr.onload = function () {
//         if (this.status == 200 && number != "") {
//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         }
//     }

//     xhr.send();
// }

function getNumberFactFetch() {
    let number = numberInput.value;

    fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data => {
            if (number != "") {
                fact.style.display = 'block';
                factText.innerText = data;
            } else {
                fact.style.display = 'none';
            }
        })
        .catch(err => console.log(err))
}