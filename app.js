// another funny thing
document.querySelector('form').addEventListener('submit', function (event) {
    const value = document.querySelector('input').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.icndb.com/jokes/random/${value}`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            ///////////////////////////////////////////////////////////////////////////////////////////
            let output = '';
            if (response.type === 'success') {
                response.value.forEach(function (current) {
                    output += `<li>${current.joke}</li>`;
                });
            } else {
                output += '<li>Something went wrong</li>';
            }
            document.querySelector('ul').innerHTML = output;
            document.querySelector('input').value = '';
            ///////////////////////////////////////////////////////////////////////////////////////////
        }
    };
    xhr.send();
    event.preventDefault();
});
