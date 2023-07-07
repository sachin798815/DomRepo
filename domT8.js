let form =document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit',addItem);

itemList.addEventListener('click',remover);

function addItem(e){
    e.preventDefault();
    let val = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(val));
    itemList.appendChild(li);
    //delete button
    var button = document.createElement('button');
    button.className ='btn btn-danger btn-sm float-right delete';
    button.appendChild(document.createTextNode('X'));
    li.appendChild(button);
    //edit button
    let editBtn = document.createElement('button');
    editBtn.className ='btn btn-primary btn-sm float-right';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
}

function remover(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}