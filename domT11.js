let form = document.querySelector('form');
form.addEventListener('submit',fetcher);
var counter = 1;
function fetcher(e){
    e.preventDefault();
    let userObj = {
        name : document.getElementById('fname').value,
        mail : document.getElementById('mail').value,
        phone : document.getElementById('phone').value,
        date : document.getElementById('fdate').value,
        time : document.getElementById('ftime').value
    }
    localStorage.setItem(`userinfo${counter++}`,JSON.stringify(userObj));
}