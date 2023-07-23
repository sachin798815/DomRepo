let myForm = document.getElementById('myForm');
let listUl = document.getElementById('listUl');

myForm.addEventListener('submit',Submitter);

function Submitter(event){
    event.preventDefault();
    let amount = document.getElementById('amount').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;

    obj = {
        'Amount': amount,
        'Description' : description,
        'Category' : category
    }

    //add item
    let insertItem = document.createElement('li');
    insertItem.className = "list-group-item border-black";
    let displayText = document.createTextNode(`${amount} - ${description} - ${category}`);
    insertItem.appendChild(displayText);
    localStorage.setItem(description,JSON.stringify(obj));
    
    //edit button
    let editBtn = document.createElement('input');
    editBtn.type = "button" ;
    editBtn.className = "btn btn-info float-end"
    editBtn.value = "Edit Expense";
    editBtn.addEventListener('click',(e)=>{
        localStorage.removeItem(description);
        document.getElementById('amount').value = amount;
        document.getElementById('description').value = description;
        document.getElementById('category').value = category;
        e.target.parentElement.remove();
    });

    insertItem.appendChild(editBtn);

    //delete button
    let delBtn = document.createElement('input');
    delBtn.type = "button" ;
    delBtn.className = "btn btn-danger float-end mx-2 "
    delBtn.value = "Delete Expense";
    delBtn.addEventListener('click',(e)=>{
        localStorage.removeItem(description);
        e.target.parentElement.remove();
    });
    insertItem.appendChild(delBtn);

    listUl.appendChild(insertItem);
}
