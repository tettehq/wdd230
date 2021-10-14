const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const list = document.querySelector('.list');
const main = document.querySelector('main');

buttonElement.addEventListener('click', function() {
    let inputText = inputElement.value;
    const para = document.createElement('p');

    if (inputText === '') {
        para.textContent = 'Enter the name of your favorite Book of Mormon chapter.'
        main.appendChild(para);
    }

    else {
        const listItem = document.createElement('li');
        listItem.textContent = inputText;
        const listButton = document.createElement('button');
        listButton.textContent = '❌';
        listItem.appendChild(listButton);
        list.appendChild(listItem);
        listButton.addEventListener('click', function() {
            list.removeChild(listItem);
        })
    }

    inputElement.focus();
    inputElement.value = '';
})