// check on local storage 
if(window.localStorage.getItem('color-option') !== null)
{
    
    document.documentElement.style.setProperty('--main-color',localStorage.getItem('color-option'));
    //remove active class from all li
    document.querySelectorAll(".option-box ul li").forEach(ele =>{
        ele.classList.remove("active");
    // add active class to li element that data-color === color option in local storage
    if(ele.dataset.color === localStorage.getItem('color-option')){
        ele.classList.add("active")

    }
    })

}
// background variables control
let backgroundstatus = "true";
let interved;

/*start setting box
rotat the gear onclick*/
let myGear = document.querySelector(".setting-icon");
let mySettingbox = document.querySelector(".setting-box");
myGear.onclick = function(){
    this.classList.toggle("fa-spin");
    mySettingbox.classList.toggle("open");

}
//switch between colors
const listedColors = document.querySelectorAll(".option-box ul li");
listedColors.forEach(ele =>
    ele.addEventListener("click",e => {
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        //set color to local storage
        window.localStorage.setItem("color-option",e.target.dataset.color);
        //remove active class from all li
        listedColors.forEach(ele =>{
            ele.classList.remove("active");
            e.target.classList.add("active")
        })

    }) 
     
     
        
)



// img slider

let landing = document.querySelector(".landing-page");
let imgsArray = ["url('imgs/landing1.jpg')","url('imgs/landing2.jpg')","url('imgs/landing3.jpg')"];

function customBackground(){
        if(backgroundstatus === "true"){
        interved = setInterval(function(){
            let randomIndex = Math.floor(Math.random() * imgsArray.length);
            landing.style.backgroundImage = imgsArray[randomIndex];
            
        },1000);
        }
    }
   customBackground()




//random background
let mySpan = document.querySelectorAll(".option-box span");
mySpan.forEach(function(span){
    span.addEventListener("click",(e)=>{
        mySpan.forEach(function(ele){
            ele.classList.remove("active");
        })
            e.target.classList.add("active");
            if(e.target.dataset.background === "yes"){
                customBackground() 
            }
            else{
                backgroundstatus === "false";
                clearInterval(interved)
                
            }
            
            
        
        
    })

})



//our skills progress
let skillsSection = document.querySelector(".skills");
let progressSpan = document.querySelectorAll(".skills-color");
window.onscroll = function(){
    
    if(window.scrollY > (skillsSection.offsetTop - 100) ){
    
              progressSpan.forEach(span => {
              span.style.width = span.dataset.progress
              })
        
            }
    
    
}

//end skills progress



//create popup image
let allImages = document.querySelectorAll(".img-gallery img");
allImages.forEach(image =>{
    image.addEventListener("click",(e) => {
        // create overlay element
        let popOverlay = document.createElement("div");
        // add class to overlay
        popOverlay.className = "overlay";
        // appen(add) overlay to body
        document.body.appendChild(popOverlay);
        //create the pop up box
        let imgDiv = document.createElement("div");
        imgDiv.className = "image-popup";
        // create image heading
        if(image.alt){
            let imgHeading = document.createElement("h3");
            // create text for heading
            let headinText = document.createTextNode(image.alt);
            // append text to h3
            imgHeading.appendChild(headinText);
            // add heading to popup box
            imgDiv.appendChild(imgHeading);
        }
        
        // create the img
        let myImg = document.createElement("img");
        //set img src
        myImg.src = image.src;
        // add img to image popup
        imgDiv.appendChild(myImg);
        // add popup box to body
        document.body.appendChild(imgDiv);

        // create close button
        let closeSpan = document.createElement("span");
        let spanText = document.createTextNode("X");
        closeSpan.appendChild(spanText);
        closeSpan.className = "closebtn"
        imgDiv.appendChild(closeSpan);
        // remove imgdiv when clicking on close btn
        document.addEventListener("click",function(e){
          if(e.target.className === 'closebtn'){
              e.target.parentElement.remove()
        // remove overlay also
        popOverlay.remove()
             
          }
        })

        
    })
})


// bullets

let myBullets = document.querySelectorAll('.nav-bullet .bullet');
let myLinks = document.querySelectorAll('.links li');
function scrollToSection(elements){
    elements.forEach((ele) =>{
        ele.addEventListener("click",(e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:"smooth"
            })
    
        })
    })

}
scrollToSection(myBullets);
scrollToSection(myLinks);


//control nav bullet
let bulletContainer = document.querySelector(".nav-bullet");
let bulletSpan  = document.querySelectorAll(".bullet-option span");
let bulletLocalItem = localStorage.getItem("bullet-option");
if (bulletLocalItem !== null) {
    if(bulletLocalItem === 'block'){
        bulletContainer.style.display = "block";
    }
    else{
        bulletContainer.style.display = "none";
    }
 
}
bulletSpan.forEach(span =>{
    span.addEventListener("click",e =>{
        if(span.dataset.display === "yes"){
            bulletContainer.style.display = "block";
            localStorage.setItem("bullet-option",'block');
            
        }
        else{
            bulletContainer.style.display = "none";
            localStorage.setItem("bullet-option",'none');
            
        }

    })
})

//reset button option
document.querySelector(".reset-options").onclick = function(){
    //localStorage.clear();
    localStorage.removeItem("color-option");
    localStorage.removeItem("bullet-option");

    window.location.reload();
}


//toggle menue
let toggleBtn = document.querySelector(".toggle-menue");
let tlinks = document.querySelector(".links");
toggleBtn.onclick = function(e){
    e.stopPropagation()
    this.classList.toggle("menue-active");
    tlinks.classList.toggle("open")
}

//click anywhere outside menue to close it 
document.addEventListener("click",function(e){
    if(e.target !== toggleBtn && e.target !== tlinks){
        if(tlinks.classList.contains("open")){
            toggleBtn.classList.remove("menue-active");
            tlinks.classList.remove("open")
        }
    }

})

tlinks.onclick = function(e){
    e.stopPropagation()
}


