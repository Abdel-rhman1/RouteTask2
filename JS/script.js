var lightBoxContainer = document.getElementById("lightBoxContainer");
var imgs = document.querySelectorAll(".item-portofolio img");
var lightBoxItem = document.getElementById("lightBoxItem");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var currentImg;
console.log(imgs);


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


document.body.addEventListener("keydown" , function(evetntInfo){
    console.log(evetntInfo);
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

        console.log(srcImg.getAttribute("src"));
    }
}



next.addEventListener("click" , nextSlid);
function nextSlid(){
    if(currentImg!=imgs.length-1){
        var srcImg = imgs[currentImg+1];
        currentImg++;
        lightBoxItem.style.backgroundImage  = `url(${srcImg.src})`;
        console.log(srcImg.getAttribute("src"));
    }
}