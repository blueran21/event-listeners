// Your code here
window.addEventListener('DOMContentLoaded', event => {
    showAlert(event);
    const redInputEvent = redInput(event);
    const addItemEvent = addItem(event);
    const changeColorEvent = changeColor(event);

    const removeListener = document.getElementById('remove-listeners');
    removeListener.addEventListener('click', event => {
        document.getElementById('red-input').removeEventListener('input', redInputEvent);
        document.getElementById('add-item').removeEventListener('click', addItemEvent);
        document.getElementById('color-select').removeEventListener('input', changeColorEvent);
    });

    const reAddListener = document.getElementById('re-add-listeners');
    reAddListener.addEventListener('click', event => {
        redInput(event);
        addItem(event);
        changeColor(event);
    });

    hoverText(event);

    window.addEventListener('keydown', event => {
        if (event.key === ' ') {
            alert('The space bar is pressed');
        }
    });

});



function showAlert(event) {
    alert("DOM has loaded");
}

function redInput(event) {
    const redInput = document.getElementById('red-input');
    const cb = event => {
        let text = redInput.value;
        if (text.includes('red')) {
            redInput.style.backgroundColor = 'red';
        } else {
            redInput.style.backgroundColor = 'transparent';
        }
    }
    redInput.addEventListener('input', cb);
    return cb;
};

function addItem(event) {
    const newItem = document.getElementById('list-add');
    const addItem = document.getElementById('add-item');
    const ulElement = document.querySelector('#section-2 ul');
    const cb = event => {
        const text = newItem.value;
        if (text) {
            const newLi = document.createElement('li');
            newLi.innerText = text;
            ulElement.appendChild(newLi);
        }
    }

    addItem.addEventListener('click', cb);
    return cb;
}


function changeColor(event) {
    const newColor = document.getElementById('color-select');
    const section3 = document.getElementById('section-3');
    const cb = event => {
        const color = newColor.value;
        section3.style.backgroundColor = color;
    }
    newColor.addEventListener('input', cb);
    return cb;
}

function hoverText(event) {
    const addHover = document.getElementById('section-6');
    const addDiv = document.getElementById('hover-text');

    addHover.addEventListener('mouseover', event => {
        addDiv.innerText = "It is being hovered over!";
    });

    addHover.addEventListener('mouseleave', event => {
        addDiv.innerText = '';
    })
}
