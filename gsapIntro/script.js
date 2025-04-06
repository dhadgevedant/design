document.addEventListener("DOMContentLoaded", (event) => {
            
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#greet",{
        y:-400,
        rotate:360,
        duration:1,
        ease: "back.inOut",
    })
    gsap.to("#greet",{
        delay:0.6,
        backgroundColor:"white",
        color:"black",
        duration:1,
        ease:"bounce"

    })

    //section 2        
    const arr = SplitType.create('#sec2');
    // console.log(arr.words);
    gsap.from(arr.chars, {
        scrollTrigger:{
            trigger:'#sec2',
            toggleActions: "restart restart restart none",
        },
        duration: 0.1,
        opacity: 0,
        y: -80,
        ease: "elastic",
        stagger: 0.02,
        scale:-0.01,
    })

    //section 3

    // const sec3Head = document.getElementById( "sec3");
    // // const races = document.querySelector(".races");
    // console.log(sec3Head.offsetWidth)

    // function getScrollAmount() {
    //     let racesWidth = sec3Head.scrollWidth;
    //     return -(racesWidth - window.innerWidth);
    // }

    // const tween = gsap.to("#sec3",{
    //     x: getScrollAmount,
    //     duration: 3,
    //     ease: "none",
    // });

    // ScrollTrigger.create({
    //     trigger:"#sec3Parent",
    //     start:"top 20%",
    //     end: () => `+=${getScrollAmount() * -1}`,
    //     pin:true,
    //     animation:tween,
    //     scrub:1,
    //     invalidateOnRefresh:true,
    //     markers:true
    // });

//     const races = document.querySelector(".races");
// console.log(races.offsetWidth)

// function getScrollAmount() {
// 	let racesWidth = races.scrollWidth;
// 	return -(racesWidth - window.innerWidth);
// }

// const tween = gsap.to(races, {
// 	x: getScrollAmount,
// 	duration: 3,
// 	ease: "none",
// });


// ScrollTrigger.create({
// 	trigger:".racesWrapper",
// 	start:"top 20%",
// 	end: () => `+=${getScrollAmount() * -1}`,
// 	pin:true,
// 	animation:tween,
// 	scrub:1,
// 	invalidateOnRefresh:true,
// 	markers:true
// })

const sec3 = document.querySelector("#sec3");
const lenghtOfDiv = sec3.offsetWidth;
console.log(lenghtOfDiv)

gsap.to(sec3, {
    
    scrollTrigger: {
        trigger: "#sec3",
        start: "top 50%",
        markers:true,
        toggleActions: "restart restart restart none",

    },
    x:"-32rem",
    
    duration:2,
    delay:1,

})


    

        

});
