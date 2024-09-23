//  typing animation
var typed = new Typed(".typing" , {
    strings : ["Web Developer", "Web Designer", "Full Stack Web Developer"] , typeSpeed : 100 , BackSpeed : 60 , loop : true
});

// Aside Block
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length , 
    allSection = document.querySelectorAll(".section") ,
    totalSection = allSection.length;
    for(let i = 0 ; i < totalNavList ; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click" , function(){
            removeBackSection();
            for(let j = 0 ; j < totalNavList ; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                 }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }
function removeBackSection(){
    for(let i = 0 ; i < totalSection ; i++){
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}
function showSection(element){
    for(let i = 0 ; i < totalSection ; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element){
    const target = element.getAttribute("href").split("#")[1];
    for(let i = 0  ; i < totalNavList ; i++){
        navList[i].querySelector("a").classList.remove("active");
        if(target == navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click" , function(){
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTooglerBtn = document.querySelector(".nav-toogler"),
aside = document.querySelector(".aside");
navTooglerBtn.addEventListener("click" , ()=>{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTooglerBtn.classList.toggle("open");
    for(let i = 0 ; i < totalSection ; i++){
        allSection[i].classList.toggle("open");
    }
}