let searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('You pressed the button!');
    getVal();
})

function getVal () {
    const inputVal = document.getElementById('inputVal');

    if(!inputVal) {
        console.error('Please enter a location');

        return;
    } else {
        location.replace('./search-results.html?search=' + inputVal);
    }
}

