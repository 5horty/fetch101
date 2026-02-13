/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
}
async function showList(elem, url){
    const response = await fetch(url);
    const content = await response.json();

    for (const item of content){
        const li = document.createElement("li");
        li.textContent = item;
        elem.append(li);

    }

}
async function startShowingMessage(elem, url){
    setInterval(async () => {
        const response = await fetch(url);
        const content = await response.text();
        elem.textContent = content; 
        return elem;

    },1000);
    return elem;

}

async function handleError(elem, url){
   const response = await fetch(url); 
   if (!response.ok){
        elem.textContent = "OH DEAR";
    }else{
        const content = await response.text();
        elem.textContent = content

    }
}

async function drawBox(canvas, url){
    const rx = canvas.getContext("2d");

        setInterval(async () => {
            const response = await fetch(url);
            const content = await response.json();

            console.log(content);

            rx.fillStyle = content.color; // why no colour? :(
            rx.fillRect(content.x ,content.y,10,10)

        },1000);

}

