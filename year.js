let yearFact = document.querySelector('#yearFact');
let yearFactText = document.querySelector('#yearFactText');

let yearInput = document.querySelector('#yearInput');
yearInput.addEventListener('input', getYearFactFetch);

function getYearFactFetch() {
    let number = yearInput.value;

    fetch('http://numbersapi.com/' + number + '/year')
        .then(response => response.text())
        .then(data => {
            if (number != "") {
                yearFact.style.display = 'block';
                yearFactText.innerText = data;
            } else {
                yearFact.style.display = 'none';
            }
        })
        .catch(err => console.log(err))
}