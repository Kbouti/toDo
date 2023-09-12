import './style.css';


function component() {
    const element = document.createElement(`div`);
    element.innerHTML = 'To Do List';
    element.classList.add(`hello`);
    return element;
}

document.body.appendChild(component());