let logo = document.querySelector(".logo img")
console.log(logo);
logo.style.padding = '3px 10px'
logo.style.border  = '2px solid black'
logo.style.borderRadius = '10px'

logo.addEventListener("mouseenter",function(){
logo.style.border  = '3px solid #5955b3'
logo.style.scale = '1.1'
logo.style.boxShadow = '#5955b3 0px 10px 20px, #5955b3 0px 6px 6px';

})

logo.addEventListener("mouseleave",function(){
    logo.style.border  = '2px solid black'
    logo.style.scale = '1.1'
logo.style.boxShadow = 'none';

    })

let btns = document.querySelectorAll(".buttons button")
console.log(btns);

btns.forEach(function(btn){

    btn.style.backgroundColor = '#5955b3'
    btn.style.color = 'white'
    btn.style.border = "3px solid transparent"
    btn.style.padding = '5px 10px'
    btn.style.borderRadius = '10px'
    btn.style.fontWeight =  "600"

})


let nav = document.querySelectorAll("li a")
console.log(nav);

nav.forEach(function(item){

item.addEventListener("mouseenter",function(){

    item.style.backgroundColor = ' rgb(228, 238, 247)';
    item.style.cursor = 'pointer'
    }
    )

    item.addEventListener("mouseleave",function(){
        item.style.backgroundColor = 'white';
        item.style.cursor = 'none'
        }
        )
})


let main = document.querySelector(".page1")
let crsr = document.querySelector(".cursor")


main.addEventListener("mousemove",function(dets){
// console.log(dets.x);
crsr.style.left = dets.x+"px"
crsr.style.top = dets.y+"px"

})

let sign = document.querySelector(".sign")
console.log(sign);

sign.addEventListener("mouseenter",function(){
    sign.style.backgroundColor = 'white'
    sign.style.color = '#5955b3'
    sign.style.border = '3px solid #5955b3'
    sign.style.cursor = "pointer"
   sign.style.boxShadow = ' rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';


})


sign.addEventListener("mouseleave",function(){
    sign.style.backgroundColor = '#5955b3'
    sign.style.color = 'white'
    sign.style.border = '3px solid transparent'
    sign.style.cursor = "none"
   sign.style.boxShadow = 'none';

})

let count = 0

sign.addEventListener("click",function(){
if (count == 0) {
    sign.innerHTML = 'Log In'
    alert("log In")

    count ++
} else {
    
    sign.innerHTML = 'Sign Up'
    count --
}
})


let contact = document.querySelector(".first")
console.log(sign);

contact.addEventListener("mouseenter",function(){
    contact.style.backgroundColor = 'white'
    contact.style.color = '#5955b3'
    contact.style.border = '3px solid #5955b3'
    contact.style.cursor = "pointer"
   contact.style.boxShadow = ' rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';

})


contact.addEventListener("mouseleave",function(){
    contact.style.backgroundColor = '#5955b3'
    contact.style.color = 'white'
    contact.style.border = '3px solid transparent'
    contact.style.cursor = "none"
   contact.style.boxShadow = 'none';

})


let btn2 = document.querySelector("#btn3")
console.log(btn2);

btn2.addEventListener("mouseenter",function(){
    btn2.style.backgroundColor = 'white'
    btn2.style.color = '#5955b3'
    btn2.style.border = '3px solid #5955b3'
    btn2.style.cursor = "pointer"
   btn2.style.boxShadow = ' rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';
})


btn2.addEventListener("mouseleave",function(){
    btn2.style.backgroundColor = '#5955b3'
    btn2.style.color = 'white'
    btn2.style.border = '3px solid transparent'
    btn2.style.cursor = "none"
    btn2.style.boxShadow = 'none';
})


let h1 = document.querySelector(".head1")
console.log(h1);

let h2 = document.querySelector(".head2")
let h3 = document.querySelector(".head3")

h1.addEventListener("mouseenter",function(){
    h1.style.color = '#5955b3'
})

h1.addEventListener("mouseleave",function(){
    h1.style.color = '#3c2f60'
})


h3.addEventListener("mouseenter",function(){
    h3.style.color = '#5955b3'
})

h3.addEventListener("mouseleave",function(){
    h3.style.color = '#3c2f60'
})



let tl = gsap.timeline()
tl.from("ul li a",{
    y:-100,
    duration:1,
    delay:0.9,
    opacity:0,
    stagger:0.2
})

tl.from(".first, .sign",{
    y:-100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

// tl.from(".sign",{
//     y:-100,
//     duration:0.5,
//     delay:0.5,
//     opacity:0,
//     stagger:0.2
// })

tl.from(".head1, .head2 , .head3",{
    x:-200,
    duration:0.5,
    delay:0.9,
    opacity:0,
    stagger:0.2
})

tl.from(".right h3",{
    y:-100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from("#btn3",{
    y:100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2
})