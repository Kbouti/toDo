function component() {
    const element = document.createElement(`div`);
    element.innerHTML = 'To Do List';
    return element;
}

document.body.appendChild(component);