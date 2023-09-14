import createElement from './elementMaker.js';


//  Create element takes 4 arguments:
//  1. Array containing first the id, then any class attributes.
//  2. A string indicating the type of the new element    'div'
//  3. A string containing the innerhtml content.
//  4. A string containing the id of the element you'd like to append the new element to. The main container is #content.

function buildPage(){
    createElement([`header`], `div`, ``,`content`);
        createElement([`title`], `div`, `To Do List`, `header`);
    createElement([`sidebar`], `div`, ``, `content`);
    createElement([`mainBody`], `div`, ``, `content`);
    createElement([`footer`], `div`, ``, `content`);
}


export default buildPage;