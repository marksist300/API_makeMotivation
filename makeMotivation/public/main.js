const updateBtn = document.querySelectorAll(".update-quote");
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
        console.log(data);
        location.reload();
    }
    catch(err){
        console.log('Errors with fetch: ', err)
    }
    }
