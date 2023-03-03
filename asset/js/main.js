let currIndex = 0
let nextBtn = document.querySelector('.next-btn')
let prevBtn = document.querySelector('.prev-btn')
let dotList = document.querySelectorAll('.dot')

nextBtn.onclick = () => {
    slideShow(currIndex+1)
}

prevBtn.onclick = () => {
    slideShow(currIndex-1)
}
// add event for each dot button
for (let i = 0; i < dotList.length; i++) {
    dotList[i].onclick = () => {
        slideShow(i)
    }
}

slideShow(currIndex)

// automatic slideshow in 5s
setInterval(() => {
    slideShow(currIndex + 1)
}, 5000);


function slideShow(index) {
    let slideList = document.querySelectorAll('.slide-item')
    
    if (index >= slideList.length) { 
        index = 0 
    }
    else if (index < 0) { 
        index = slideList.length - 1 
    }

    //change slide
    slideList[currIndex].classList.remove('active')
    slideList[index].classList.add('active')

    //change dot with slide
    dotList[currIndex].classList.remove('active')
    dotList[index].classList.add('active')

    currIndex = index

}