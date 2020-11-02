const button=document.getElementById('btn');
const links=document.querySelectorAll('.links');


button.addEventListener('click',function(){


    links.classList.toggle('show-links');

})