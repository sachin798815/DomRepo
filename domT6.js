//querySelector
// let header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px red';
// let input = document.querySelector('input');
// input.value = 'Hello mate';
// let submit = document.querySelector('input[type="submit"]');
// submit.value='SEND';
// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color= 'green';
// let nthItem = document.querySelector('.list-group-item:nth-child(2)');
// nthItem.style.color = 'blue';
//task
// let secItem = document.querySelector('.list-group-item:nth-child(2)');
// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// secItem.style.background='green';
// thirdItem.style.visibility = 'hidden';

//querySelectorAll
// let titles= document.querySelectorAll('.title');
// console.log(titles);
let odd=document.querySelectorAll('li:nth-child(odd)');
// let even=document.querySelectorAll('li:nth-child(even)');
let secItem=document.querySelectorAll('li');
secItem[1].style.color= 'green';
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
    // even[i].style.backgroundColor = 'blue';
}

