
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form1').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`Thank You for all of your personal information, ${name}!`);
    };
});

document.addEventListener('DOMContentLoaded', () => {
   document.querySelector('select').onchange = function () {
       document.querySelector('#color').style.color = this.value; 
   };
});