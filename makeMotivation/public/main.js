const updateBtn = document.querySelector("#random-quote-update");


const QUOTE_DATA = {
    "quote": "One cannot step twice into the same river"
}

updateBtn.addEventListener('click', postReq);

function postReq() {
    fetch("/update", {
        method: "put",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(QUOTE_DATA),
    })
    .then(res=> {
        console.log('OK');
        console.log(JSON.stringify(QUOTE_DATA.quote))
    })
    .catch(err=> console.log(`Fetch Error: ${err}`))
}