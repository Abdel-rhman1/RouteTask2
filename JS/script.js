

var lightBoxContainer = document.getElementById("lightBoxContainer");
var imgs = document.querySelectorAll(".item-portofolio img");
var lightBoxItem = document.getElementById("lightBoxItem");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var moveToUp = document.getElementById("moveToUp");
var navbar = document.getElementById("navbar");
var currentImg;

let aboutSection = document.getElementById("about");







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