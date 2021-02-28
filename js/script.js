let checkbox = document.querySelector('.checkbox');
let annual = document.querySelector('.annual');
let monthly = document.querySelector('.month');
console.log(checkbox);
console.log(checkbox.value);

checkbox.addEventListener('change', () => {
    if(checkbox.checked){
        let annual = document.querySelector('.annual');
        annual.style.display = 'none';
        monthly.style.display= 'flex';
    }else{
        annual.style.display = 'flex';
        monthly.style.display = 'none';
    }
})