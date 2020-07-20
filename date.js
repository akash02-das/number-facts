let dateFact = document.querySelector('#dateFact');
let dateFactText = document.querySelector('#dateFactText');

let dayInput = document.querySelector('#dayInput');
let monthInput = document.querySelector('#monthInput');
let dateInput = document.querySelector('#dateInput');
dateInput.addEventListener('input', getDateFactFetch);

function getDateFactFetch() {
    let number = `${monthInput.value}/${dayInput.value}`;

    fetch('http://numbersapi.com/' + number + '/date')
        .then(response => response.text())
        .then(data => {
            if (dayInput.value != "" && monthInput.value != "") {
                dateFact.style.display = 'block';
                dateFactText.innerText = data;
            } else {
                dateFact.style.display = 'none';
            }
        })
        .catch(err => console.log(err))
}