// Document object
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title="Edited Title";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[11]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


//fetching
//ID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
let adder = document.getElementById('main').firstElementChild;
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText= 'bye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<span>yo</span>';
header.style.borderBottom = 'solid 3px black';
adder.style.fontWeight='bold';
adder.style.color='green';


