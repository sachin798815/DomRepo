let form = document.querySelector('form');
let itemContainer = document.getElementById('itemContainer');
form.addEventListener('submit',fetcher);
var counter = 1;
function fetcher(e){
    e.preventDefault();
    let fmail = document.getElementById('mail').value;
    let fname = document.getElementById('fname').value;
    let fphone = document.getElementById('phone').value;
    let fdate = document.getElementById('fdate').value;
    let ftime = document.getElementById('ftime').value;
    let userObj = {
        name : fname,
        mail : fmail,
        phone : fphone,
        date : fdate,
        time : ftime
    }
    localStorage.setItem(fmail,JSON.stringify(userObj));
    let userInfo = `${fname} - ${fmail} - ${fphone} - ${fdate} - ${ftime}`;
    let currentUser = document.createElement('li');
    currentUser.className='userClass';
    currentUser.innerHTML=userInfo;
    itemContainer.appendChild(currentUser);
    //delete button
    let delBtn = document.createElement('input');
    delBtn.type='button';
    delBtn.value = 'Delete';
    delBtn.className="del-btn";
    delBtn.addEventListener('click',function(e) {
        localStorage.removeItem(fmail);
        e.target.parentElement.remove();
    });
    
    currentUser.appendChild(delBtn);
}