const divList = document.querySelector('.listHolder');
const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');
const closeBtn = document.querySelector('#close');

function addLists() {
    if (addInput.value === '') {
        alert('Enter the list name please!!!');
    } else {
        const ul = divList.querySelector('ul');
        const li = document.createElement('li');
        li.innerHTML = addInput.value;
        addInput.value = '';
        ul.appendChild(li);
        createBtn(li);

    }
}

addBtn.addEventListener('click', () => {
    addLists();
});

addInput.addEventListener('keyup', (event) => {
    if (event.which === 13) {
        addLists();
    }
});

function createBtn(li) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}

for (var i = 0; i < lis.length; i++) {
    createBtn(lis[i]);
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


divList.addEventListener('click', (event) => {
    if (event.target.tagName === "SPAN") {
        const span = event.target;
        const li = span.parentNode;
        const ul = li.parentNode;
        if (span.className === 'close') {
            ul.removeChild(li);
        }
    }
});