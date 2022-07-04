const btn = document.querySelector('button');
console.log('howdy, world')
btn.addEventListener('click', ()=>{
    document.querySelector('h1').innerText = 'Clicked!!!!!'
    console.log('hello World')
})