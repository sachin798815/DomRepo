let form = document.querySelector('form');
form.addEventListener('submit',fetcher);
function fetcher(e){
    e.preventDefault();
    let fname = document.getElementById('fname');
    let fmail = document.getElementById('mail');
    let fphone = document.getElementById('phone');
    let fdate= document.getElementById('fdate');
    let ftime = document.getElementById('ftime');
    localStorage.setItem('Name',fname.value);
    localStorage.setItem('Email',fmail.value);
    localStorage.setItem('Phone',fphone.value);
    localStorage.setItem('Date',fdate.value);
    localStorage.setItem('Time',ftime.value);
}