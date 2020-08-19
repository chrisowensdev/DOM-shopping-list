'use strict';

const button = document.querySelector('#generateList');
const inputs = document.querySelectorAll(".input")
const myList = document.querySelector('#myList')
const ul = document.createElement('ul');

myList.appendChild(ul)

button.addEventListener('click', (e) => {
    ul.innerHTML = "";
    inputs.forEach((item) => {
        if (item.value) {
            const list = document.createElement("li")
            ul.appendChild(list);
            list.innerHTML = item.value;
        }
    })
})