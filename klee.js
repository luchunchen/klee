let button = document.querySelector('#button');

button.addEventListener('click', () => {
    let input1 = document.getElementById('input1');

    let input2 = document.getElementById('input2');

    let input3 = document.getElementById('input3');

    let input4 = document.getElementById('input4');

    let fin = document.querySelector('.fin');

    let talk = document.querySelector('.talk');

    let x = Number(input1.value);

    let y = Number(input2.value);

    let z = Number(input3.value) / 100;

    let xx = Number(input4.value) / 100;  

    let total = ((x+y)/x)*(1+(xx*z));

    total = total.toFixed(2);

    fin.innerHTML= total;

    if (total < 4.24 ) {
        talk.innerHTML="看來還需要多加油!!";
    } else if (total < 6.75 ) {
        talk.innerHTML="算是畢業了，可以考慮先刷別人的";
    } else if (total < 9) {
        talk.innerHTML="大佬您好!";
    } else if (total > 9) {
        talk.innerHTML="你已經成神了!!";
    }
    

    
}) 


let button2 = document.querySelector('#button2');

button2.addEventListener('click', () => {
    
    let input1 = document.getElementById('input1');

    let input2 = document.getElementById('input2');

    let input3 = document.getElementById('input3');

    let input4 = document.getElementById('input4');

    let input6 = document.getElementById('input6');

    let fin = document.querySelector('.fin');

    let talk = document.querySelector('.talk');

    let fin2 = document.querySelector('.fin2');

    let x = Number(input1.value);

    let y = Number(input2.value);

    let z = Number(input3.value) / 100;

    let xx = Number(input4.value) / 100;

    let yy = Number(input6.value) / 100;

    let total = ((x+y)/x)*(1+(xx*z));

    let total2 = total*(1+yy);
    
    total2 = total2.toFixed(2);

    fin2.innerHTML= total2;
    

    
})



