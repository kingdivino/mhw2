/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const buttons = document.querySelectorAll(".choice-grid div");
for(let item of buttons){
    item.addEventListener("click", onClick);
}
let flag1 = false;
let flag2 = false;
let flag3 = false;

let risposte = {};

function onClick(event){
    const images = event.currentTarget.querySelector(".checkbox");
    const blocco = event.currentTarget;
    const tipo = blocco.dataset.choiceId;

    if(blocco.dataset.questionId === 'one'){
        const boxes = document.querySelectorAll('[data-question-id="one"]');
        for (let item of boxes){
            item.classList.add("hidden");
            item.classList.remove("cliccato");
            item.querySelector(".checkbox").src = './images/unchecked.png';
        }
        flag1 = true;
        risposte['one'] = tipo;
    }
    if(blocco.dataset.questionId === 'two'){
        const boxes = document.querySelectorAll('[data-question-id="two"]');
        for (let item of boxes){
            item.classList.add("hidden");
            item.classList.remove("cliccato");
            item.querySelector(".checkbox").src = './images/unchecked.png';
        }
        flag2 = true;
        risposte ['two'] = tipo;
    }
    if(blocco.dataset.questionId === 'three'){
        const boxes = document.querySelectorAll('[data-question-id="three"]');
        for (let item of boxes){
            item.classList.add("hidden");
            item.classList.remove("cliccato");
            item.querySelector(".checkbox").src = './images/unchecked.png';
        }
        flag3 = true;
        risposte ['three'] = tipo;
    }
    images.src = './images/checked.png';
    blocco.classList.add("cliccato");
    blocco.classList.remove("hidden");
    
    if(flag1 === true && flag2 === true && flag3 === true){
        const buttons = document.querySelectorAll(".choice-grid div");
        for(let item of buttons){
            item.removeEventListener("click", onClick);
        }
        risultato();
    }
}

function risultato(){
    const article = document.querySelector("article");
    const div = document.createElement("div");
    const testo1 = document.createElement("h1");
    const testo2 = document.createElement("a");
    const bottone = document.createElement("button");
    
    div.classList.add("risultato");
    if (risposte['two'] === risposte['three']){
        let two = risposte['two'];
        testo1.textContent = RESULTS_MAP[two]['title'];
        testo2.textContent = RESULTS_MAP[two]['contents'];
    }
    else{
        let one = risposte['one'];
        testo1.textContent = RESULTS_MAP[one]['title'];
        testo2.textContent = RESULTS_MAP[one]['contents'];
    }
    bottone.textContent = 'Ricomincia il Quiz';
    testo2.classList.add("testo2");
    testo1.classList.add("testo1");
    bottone.classList.add("bottone");
    article.appendChild(div);
    div.appendChild(testo1);
    div.appendChild(testo2);
    div.appendChild(bottone);

    bottone.addEventListener("click", reload);

    console.log(risposte);
}

function reload(){
    for(let item of buttons){
        item.addEventListener("click", onClick);
        item.classList.remove("cliccato");
        item.classList.remove("hidden");
        item.querySelector(".checkbox").src = './images/unchecked.png';
    }
    flag1 = false;
    flag2 = false;
    flag3 = false;

    const div = document.querySelector(".risultato");
    div.remove();
}