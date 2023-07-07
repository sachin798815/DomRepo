let itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';
// console.log(itemList.parentNode.parentNode.parentNode);
//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'grey';
// console.log(itemList.parentElement.parentElement.parentElement);
//childNode
// console.log(itemList.childNodes);
//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';
//firstChild
// console.log(itemList.firstChild);
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello';
//lastChild
// console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello';
//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);
//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='red';

//createElement
// let newDiv = document.createElement('div');
// console.log(newDiv);
// newDiv.className='helloclass';
// newDiv.id='helloid'
// newDiv.setAttribute('title','yo');
// let newDivText = document.createTextNode('hello world');
// newDiv.appendChild(newDivText);
// console.log(newDiv);
// let container= document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// container.insertBefore(newDiv,h1);
// newDiv.style.fontSize = '30px';

let div2 = document.createElement('div');
let div2Text = document.createTextNode('hello world');
div2.appendChild(div2Text);

let container = document.querySelector('#main');
let list = document.querySelector('#items');
container.insertBefore(div2,list);