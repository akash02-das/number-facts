let mathFact = document.querySelector('#mathFact');
let mathFactText = document.querySelector('#mathFactText');

let mathInput = document.querySelector('#mathInput');
mathInput.addEventListener('input', getYearFactFetch);

function getYearFactFetch() {
    let number = mathInput.value;

    fetch('http://numbersapi.com/' + number + '/math')
        .then(response => response.text())
        .then(data => {
            if (number != "") {
                mathFact.style.display = 'block';
                mathFactText.innerText = data;
            } else {
                mathFact.style.display = 'none';
            }
        })
        .catch(err => console.log(err))
}