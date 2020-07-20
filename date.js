let dateFact = document.querySelector('#dateFact');
let dateFactText = document.querySelector('#dateFactText');

let dateInput = document.querySelector('#dateInput');
dateInput.addEventListener('input', getDateFactFetch);

function getDateFactFetch() {
    let number = dateInput.value;

    fetch('http://numbersapi.com/' + number + '/date')
        .then(response => response.text())
        .then(data => {
            if (number != "") {
                dateFact.style.display = 'block';
                dateFactText.innerText = data;
            } else {
                dateFact.style.display = 'none';
            }
        })
        .catch(err => console.log(err))
}