const theForm = document.getElementById('theForm');
const listContainer = document.getElementById('listContainer');

theForm.addEventListener('submit',fetcher);
window.addEventListener('DOMContentLoaded',reloader);

//fetch from the form and post it
function fetcher(e){
    e.preventDefault();
    let itemName = document.getElementById('itemName').value;
    let description = document.getElementById('description').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;

    let obj = {
        itemName,
        description,
        price,
        quantity
    }

    console.log(obj);
    axios.post('https://crudcrud.com/api/4a0e6ed7c58b4682a3cab3898b97bbf6/inventory',obj)
    .then((response)=>{
        displayer(response.data);
    })
    .catch(err=>console.log(err))
}

//runs on page reload
function reloader(){
    axios.get('https://crudcrud.com/api/4a0e6ed7c58b4682a3cab3898b97bbf6/inventory')
    .then((response)=>{
        for(let i=0;i<response.data.length;i++){
            displayer(response.data[i]);
        }
    })
    .catch(err=>console.log(err))
}

//to display items on screen
function displayer(data){
    const liElement = document.createElement('li');
    liElement.className = 'list-group-item';
    liElement.innerHTML = `${data.itemName}    ${data.description}    ${data.price}   ${data.quantity}  `;
    //add buttons
    let buy1 = btnFunction("Buy1",()=>{
        let newQuantity = data.quantity-1;
        // console.log(newQuantity)
        axios.put(`https://crudcrud.com/api/4a0e6ed7c58b4682a3cab3898b97bbf6/inventory/${data._id}`,{
            itemName : data.itemName,
            description : data.description,
            price : data.price.toString(),
            quantity : newQuantity.toString()
        })
        .then(window.location.reload())
        .catch(err=>console.log(err))
    })
    let buy2 = btnFunction("Buy2",()=>{
        let newQuantity = data.quantity-2;
        axios.put(`https://crudcrud.com/api/4a0e6ed7c58b4682a3cab3898b97bbf6/inventory/${data._id}`,{
            itemName : data.itemName,
            description : data.description,
            price : data.price.toString(),
            quantity : newQuantity.toString()
        })
        .then(window.location.reload())
        .catch(err=>console.log(err))
    })
    let buy3 = btnFunction("Buy3",()=>{
        let newQuantity = data.quantity-3;
        axios.put(`https://crudcrud.com/api/4a0e6ed7c58b4682a3cab3898b97bbf6/inventory/${data._id}`,{
            itemName : data.itemName,
            description : data.description,
            price : data.price.toString(),
            quantity : newQuantity.toString()
        })
        .then(window.location.reload())
        .catch(err=>console.log(err))
    })
    liElement.appendChild(buy1);
    liElement.appendChild(buy2);
    liElement.appendChild(buy3);
    listContainer.appendChild(liElement);
}

//the button function
function btnFunction(label,onClick){
    const btn = document.createElement('input');
    btn.type = 'button';
    btn.value = label;
    btn.addEventListener('click',onClick)
    return btn;
}