var lightBoxContainer = document.getElementById("lightBoxContainer");
var imgs = document.querySelectorAll(".item-portofolio img");
var lightBoxItem = document.getElementById("lightBoxItem");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var moveToUp = document.getElementById("moveToUp");
var navbar = document.getElementById("navbar");
var currentImg;


// Sections Offsets //
let aboutSection = document.getElementById("aboutSection");
let serviceSection = document.getElementById("service");
let workSection  = document.getElementById("work");
let portofailo = document.getElementById("portofailoSection");
///

/// sections Tabs ///
let homeTab = document.getElementById("homeTab");
let aboutTab = document.getElementById("about");
let serviceTab = document.getElementById("serviceTab");
let workTab = document.getElementById("workTab");
let blogTab = document.getElementById("blogTab");
////
for(let i = 0;i<imgs.length ;i++){
    imgs[i].addEventListener("click" , function(eventInfo){
        
            var srcImg =  (eventInfo.target).getAttribute('src');
            currentImg = i;
            console.log(currentImg);
            lightBoxItem.style.backgroundImage = `url(${srcImg})`;
            lightBoxContainer.style.display = "flex";
    });
}

close.addEventListener("click" , closeSlid);

function closeSlid(){

    lightBoxContainer.style.display = "none";
}

document.addEventListener("scroll" , function(){
    if(scrollY > 200){
        moveToUp.style.display = "flex";
    }
    else{
        moveToUp.style.display = "none";
    }
    if(scrollY < aboutSection.offsetTop - 120){
        homeTab.style.borderBottom = "2px solid #fff";
    }else{
        console.log("Else Condition !");
        homeTab.style.borderBottom = "none";
    }    
    if( scrollY >= aboutSection.offsetTop - 100 && scrollY < serviceSection.offsetTop - 100 ){
        aboutTab.parentNode.style.borderBottom = "2px solid #fff";
    }else{
        aboutTab.parentNode.style.borderBottom = "none";
    }

    if(scrollY >= serviceSection.offsetTop - 110 && scrollY < workSection.offsetTop - 120){
        serviceTab.parentNode.style.borderBottom = "2px solid #fff";
    }else{
        serviceTab.parentNode.style.borderBottom = "none";
    }

    if(scrollY >= workSection.offsetTop - 100){
        workTab.parentNode.style.borderBottom = "2px solid #fff";
    }else{
        workTab.parentNode.style.borderBottom = "none";
    }

    if(scrollY >= portofailo.offsetTop - 120){
        workTab.parentNode.style.borderBottom = "none";
        blogTab.parentNode.style.borderBottom = "2px solid #fff";
    }else{
        blogTab.parentNode.style.borderBottom = "none";
    }
    
});
document.addEventListener("scroll" , function(){
    if(scrollY > 200){  
        navbar.classList.remove("bg-transparent");
        navbar.style.backgroundColor = "#4e4e4e !important";
    }else{
        navbar.classList.add("bg-transparent");
    }
});
moveToUp.addEventListener("click" , function(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'});
});
document.body.addEventListener("keydown" , function(evetntInfo){
    if(evetntInfo.code == "ArrowLeft"){
        prevSlid();
    }else if(evetntInfo.code == "ArrowRight"){
        nextSlid();
    }else if(evetntInfo.code == "Escape"){
        closeSlid();
    }
});

prev.addEventListener("click" , prevSlid);
function prevSlid(){
    if(currentImg!=0){
        var srcImg =  imgs[currentImg-1];
        currentImg--;
        lightBoxItem.style.backgroundImage  = `url(${srcImg.src})`;
    }
}

next.addEventListener("click" , nextSlid);
function nextSlid(){
    if(currentImg!=imgs.length-1){
        var srcImg = imgs[currentImg+1];
        currentImg++;
        lightBoxItem.style.backgroundImage  = `url(${srcImg.src})`;
    }
}

lightBoxContainer.addEventListener("click" , function(event){
    
    let clickedElement = event.target.id;
    if(clickedElement == 'lightBoxContainer'){
        closeSlid();

    }
});