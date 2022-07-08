let results = document.getElementById('result-text');

let test = document.location.search.split('&');
let test2 = test[0].split('=').pop();
console.log(test2);