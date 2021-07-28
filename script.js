const windows_home = document.getElementById('windows_home');
const windows_items = document.querySelector('.windows-items');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const file_manager = document.querySelector('.file-manager');
const folder = document.querySelector('.folder');

windows_home.addEventListener('click',function(){
    windows_items.classList.toggle('active');
})

time.addEventListener('click',function(){
    date.classList.toggle('active')
})

folder.addEventListener('click',function(){
    file_manager.classList.toggle('active');
})

document.onclick = function(e){
    if(e.target.id !=='windows_home'){
        windows_items.classList.remove('active');
    }
}