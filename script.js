
var tl=gsap.timeline()
function time(){
    var a=0
    setInterval(function(){
        a= a+ Math.floor(Math.random()*15)
if (a<100) {
    document.querySelector("#loader h1").innerHTML=a+"%"
}
else{
    a=100
    document.querySelector("#loader h1").innerHTML=a+"%"
}
    },100)
}
tl.to("#loader h1",{
   
    delay:0.5,
    duration:1,
  
    onStart:time(),
 
})
tl.to("#loader",{
   
    top:"-110%",
    delay:0.1,

    duration:1.2,
    
})
tl.from("nav img ,nav h3 , nav h4 , nav button ",{
    y:-100,
    duration:1,
    delay:0.1,
    opactiy:0,
    stagger:0.2
})
tl.from("#item h1",{
    x:-50,
    opacity:0,
    duration:1,
    stagger:0.5
    
})
tl.to("#item h1",{
    transform:"translateX(-100%)",
    duration:1.5,
    fontWeight:"99",
    scrollTrigger:{
        trigger:"#item",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin:true
    }
})
gsap.from("#page2 h1 ,#page2>img",{
scale:0,
duration:1,
delay:1,
rotate:360,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 30%",
        scrub:3
    }
})
