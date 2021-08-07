var lightBoxContainer = document.getElementById("lightBoxContainer");
var imgs = document.querySelectorAll(".item-portofolio img");
var lightBoxItem = document.getElementById("lightBoxItem");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var currentImg;
console.log(imgs);
close.addEventListener("click" , function(){
    lightBoxContainer.style.display = "none";
});

for(let i = 0;i<imgs.length ;i++){
    imgs[i].addEventListener("click" , function(eventInfo){

        var srcImg =  (eventInfo.target).getAttribute('src');
        currentImg = i;
        console.log(currentImg);
        lightBoxItem.style.backgroundImage = `url(${srcImg})`;
        lightBoxContainer.style.display = "flex";
    });
}




prev.addEventListener("click" , function(){
    if(currentImg!=0){
        var srcImg =  imgs[currentImg-1];
        currentImg--;
        lightBoxItem.style.backgroundImage  = `url(${srcImg.src})`;

        console.log(srcImg.getAttribute("src"));
    }
   
});
next.addEventListener("click" , function(){
    if(currentImg!=imgs.length-1){
        var srcImg = imgs[currentImg+1];
        currentImg++;
        lightBoxItem.style.backgroundImage  = `url(${srcImg.src})`;
        console.log(srcImg.getAttribute("src"));
    }
   
});