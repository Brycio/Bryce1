function scrollAppearLarge (){
    let imageSlide = document.querySelector('.section2-left');
    let introPosition = imageSlide.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.5;

    if (introPosition < screenPosition){
        imageSlide.classList.add("section2-left-appear");
    } 
}

window.addEventListener('scroll', scrollAppearLarge);




function isVisible(phoneBlocks){
    let phoneBlocksBox = phoneBlocks.getBoundingClientRect();
    let distanceFromTop = -80;

    if (phoneBlocksBox.top - window.innerHeight < distanceFromTop){
        return true;
    } else {
        return false;
    }
}

function scanDocument () {
    let imageSlide = document.querySelectorAll('.section2-phone-blocks');
    imageSlide.forEach(function(section){
        if(isVisible(section)){
            section.classList.add('phone-blocks-appear');
        }
    })
}

document.addEventListener('scroll', scanDocument);




function backToTop () {

let BackToTopBtn = document.querySelector('#back-to-top');
let backToTopClick = document.querySelector('#back-to-top');

if (window.pageYOffset > 500){
    BackToTopBtn.style.display = 'block';
} else {
    BackToTopBtn.style.display = 'none';
}

backToTopClick.addEventListener('click', () =>{
    window.scrollTo({top:0, behavior:'smooth'});
});

}

window.addEventListener('scroll', backToTop);
backToTop();