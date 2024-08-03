"use strict";
/*
const link = document.querySelector("a");
console.log(link.getAttribute("href"));


const msg =document.querySelector('h1');

console.log(msg.style);

msg.style.margin='50px';
msg.style.color='crimson';


 const para=(document.querySelector('body > h1')
);

console.log(para);

const paragraphs=document.querySelectorAll('p');

console.log(paragraphs[0]);

paragraphs.forEach(par=>{console.log(par);});

 

console.log(para.innerText);
para.innerText +=' ninjas are awesome';


paras.forEach(para =>{
    console.log(para.innerText);
    para.innerText+='New text';
})

const paras = document.querySelectorAll("p");
const para = document.querySelector("p");

const content = document.querySelector(".content");

// console.log(content.innerHTML);

// content.innerHTML='<h2>This is a new H2.</h2>'

const people = ["mario", " luigi", 'yoshi'];
people.forEach(person =>{
    content.innerHTML+= `<p>${person}</p>`;
});

const title= document.querySelector('h1');
console.log(title.sytle);

console.log(title.style.color);
title.style.margin = '50px' ;

title.setAttribute('style','margin: 50px')

const content = document.querySelector('p');

content.classList.add('error');


const content = document.querySelectorAll("p");

content.forEach((p) => {
    if (p.textContent.includes("error")) {
      p.classList.add("error");
    }
    if (p.textContent.includes("success")) {
      p.classList.add("success");
    }
  });
   

*/

const ul = document.querySelector("ul");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new to do";
  ul.append(li);
  //   ul.prepend(li);
});

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     //console.log(e.target);
//     //e.target.style.textDecoration = "line-through";
//     e.target.remove();

//   });
// });

ul.addEventListener("click", (e) => {
  console.log(e.target);
  if(e.target.tagName==='LI'){
    e.target.remove();
  }
});
