document.write(`<h1>Hello World!</h1>`); 


// Get element by ID = (IDname.(Propriedade) = ())
teste.innerHTML = 
`<p></p>
<button id="myBtn">Click me</button>
<p class="paragrafo"></p>`;

myBtn.style.backgroundColor = "#000";
myBtn.style.border = "0";
myBtn.style.color = "#fff";
myBtn.style.padding = "1rem 3rem";
myBtn.style.borderRadius = "8px";

// tipos de variaveis;

let number = 1;
let string = `Uma linha`;
let boolean = true | false ;

let p = document.querySelector(`p`);

p.innerHTML = `Frase inserida com JS`;

let paragrafo = document.querySelector(`.paragrafo`);
paragrafo.innerHTML = `Outro parafrago inserido via JS <a href="#">Meu Link</a>`;

paragrafo.onclick = function() {
    paragrafo.style.color = `red`
};

let paragrafoLink = document.querySelector(`.paragrafo a`);
paragrafoLink.style.textDecoration = `none`;
paragrafoLink.style.color = `red`;