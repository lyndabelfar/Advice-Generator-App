const adviceDiv = document.querySelector('.advice')
const adviceIdDiv = document.querySelector('.advice-id')


async function get(){
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    console.log(data);
    adviceDiv.innerHTML = "";
    adviceDiv.innerHTML = '"' + data.slip.advice +'"';

    adviceIdDiv.innerHTML = ""; 
    adviceIdDiv.innerHTML = "ADVICE #"+ data.slip.id;
    
}

get()

document.querySelector('button').addEventListener('click', get)