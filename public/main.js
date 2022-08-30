const updateBtn = document.querySelectorAll(".update-quote");
const deleteBtn = document.querySelectorAll(".delete-quote");
const templateQuoteString = document.getElementById("quote-0");
const templateQuoteBtn = document.getElementById("random-quote-update0");
const templateDeleteBtn = document.getElementById("deleteBtn-0");
import QUOTE_DATA from './quotes.js'
templateQuoteBtn.style.display = "none";
templateDeleteBtn.style.display = "none";
templateQuoteString.style.display = "none";
templateQuoteString.parentElement.style.display = "none"

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selectAQuote(QUOTE_FILE){
    const id = getRandomIntInclusive(0,200)
    return QUOTE_FILE[id][`id_${id}`]
}

Array.from(updateBtn).forEach(link=> link.addEventListener('click', putReq));

async function putReq() {
    let num = this.id.slice(19);
    let spanQuote = document.querySelector(`#quote-${num}`).innerText;
    try{
        const response = await fetch("/update", {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "oldQuote": spanQuote,
                "newQuote": selectAQuote(QUOTE_DATA),
            }),
        })
        const data = await response.json();
        }
    catch(err){
        console.log('Errors with fetch: ', err)
    }
    location.reload();
}

Array.from(deleteBtn).forEach(link=> link.addEventListener('click', deleteReq))

async function deleteReq(){
    let num = this.id.slice(10);
    let spanQuote = document.querySelector(`#quote-${num}`).innerText;
    try{
        const response = await fetch("/delete", {
            method: "delete",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "quote": spanQuote 
            })
        })
        const data = await response.json();
    }
    catch(err){
        console.log(`Error on delete: ${err}`)
    }
    location.reload();
}


