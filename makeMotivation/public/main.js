const updateBtn = document.querySelectorAll(".update-quote");
const deleteBtn = document.querySelectorAll(".delete-quote");
const templateQuoteBtn = document.getElementById("random-quote-update0");
const templateDeleteBtn = document.getElementById("deleteBtn-0");
templateQuoteBtn.style.display = "none";
templateDeleteBtn.style.display = "none";

const QUOTE_DATA = {
    "quote": "One cannot step twice into the same river"
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
                "newQuote": QUOTE_DATA.quote,
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