let slideIndex = 1;
const slides = document.getElementsByClassName("mySlides");
const imgs = document.querySelectorAll('img')
const slideClick = document.querySelectorAll('.slide-click')
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}



function showSlides(n) {
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}   
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    slideClick.forEach((item)=>{
        if(slideIndex==2){
            item.style.color="black"
        }else{
            item.style.color="white"
        }
    })

}

let endDate = new Date("11/10/2023 00:00:00").getTime();
let check = setInterval(function(){
    let now = new Date().getTime();
    let distance = endDate - now;
    let day = Math.floor(distance / (24*60*60*1000));
    let hour = Math.floor((distance % (24*60*60*1000)) / (60* 60*1000));
    let minute = Math.floor((distance % (60* 60*1000)) / (60*1000));
    let seconds = Math.floor((distance % (60*1000)) / 1000);
    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('seconds').innerText = seconds;
    if(distance <= 0){
        clearInterval(check);
    }
}, 1000);




//main
const hoVaTen = document.getElementById('hovaten')
const email = document.getElementById('email')
const sdt = document.getElementById('sdt')
const diaChi = document.getElementById('diachi')
const submitButton = document.getElementById('submit')
const spanButton = document.querySelector('span')

//hover
const nav = document.querySelectorAll('.navigation a')
nav.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
        item.style.opacity='1'

    })
    item.addEventListener('mouseout',()=>{
        item.style.opacity='0.5'

    })
})
const buttonSlider = document.querySelector('.slider-left-button')
buttonSlider.addEventListener('mouseover',()=>{
    buttonSlider.style.backgroundColor='white'
    buttonSlider.style.color='black'
})
buttonSlider.addEventListener('mouseout',()=>{
    buttonSlider.style.backgroundColor='blue'
    buttonSlider.style.color='white'
})
//hover submit form
submitButton.addEventListener('mouseover',()=>{
    submitButton.style.border='none'
    submitButton.style.color='white'
    spanButton.style.width='100%'
})
submitButton.addEventListener('mouseout',()=>{
    submitButton.style.border='2px solid black'
    submitButton.style.color='transparent'
    spanButton.style.width='0'

    
})
function checkValidate(listInput){
    listInput.forEach((item)=>{
        item.value = item.value.trim()
        if(!item.value){
            showError(item,"Không được để trống")
            return 
        }else{
            showSuccess(item)
            if(!validateEmail(email.value)){
                showError(email,"Không đúng định dạng email")
            }else if(!validatePhoneNumber(sdt.value)){
                showError(sdt,"Không đúng định dạng số điện thoại")
            }else{
                showSuccess(item)
            }

        }
    })
}

//check validate
// Xử lý sự kiện khi nhấn nút "submit"
submitButton.addEventListener("click", function (e) {
    e.preventDefault()
    checkValidate([hoVaTen,sdt,email,diaChi])
   
});


function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function validatePhoneNumber(phone) {
    const phonePattern = /^\d{10,11}$/;
    return phonePattern.test(phone);
}
function showError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText=message

}
function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText=''

}
