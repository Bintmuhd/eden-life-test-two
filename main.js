const meals = [
    {
        food:"Pap & Akara",
        text: "Cabohydrate",
        imgSrc: "./style/assets/Akara.png",
        bigImg:"./style/assets/gastonton-img.png"
    },
    {
        food:"Jollof Rice",
        text: "Protein",
        imgSrc: "./style/assets/JollofRice.png",
        bigImg:"./style/assets/gastonton-img.png"
    },
    {
        food:"Gastonton",
        text: "Cabohydrate",
        imgSrc: "./style/assets/Gastonton.png",
        bigImg:"./style/assets/gastonton-img.png"
    },
    {
        food:"Port Domenic",
        text: "Cabohydrate",
        imgSrc: "./style/assets/PortDomenic.png",
        bigImg:"./style/assets/gastonton-img.png"

    },
    {
        food:"Carleeville",
        text: "Fat & Oils",
        imgSrc: "./style/assets/Carleeville.png",
        bigImg:"./style/assets/gastonton-img.png"

    },
    {
        food:"South Chesleyton",
        text: "Vegetable",
        imgSrc: "./style/assets/SouthChesleyton.png",
        bigImg:"./style/assets/gastonton-img.png"

    },
]

const footer = [
    {
        icon: "./style/assets/calendar-range.png",
        text: "Shedule",
    },

    {
        icon: "./style/assets/history.png",
        text: "History"
    },

    {
        icon:"./style/assets/notification",
        text: "Notification"
    },

    {
        icon:"./style/assets/message",
        text: "Chat"
    },
]




const foodList = document.querySelector('#foodList')
const mealSection = document.querySelector('#mealSection')
const mealSectionCloseBtn = document.querySelector('#meal-close-btn').addEventListener('click', closeFirstModal)
const checkEmBtn = document.querySelector('#checkEmBtn').addEventListener('click', openFirstModal)
let yourMeal;

function openFirstModal (e) {
     mealSection.classList.toggle('mealSection')
}

function closeFirstModal(e) {
    mealSection.classList.toggle('mealSection')
}


window.addEventListener('DOMContentLoaded', (event) => {
    
    
        let eachFoodHtmlContent = meals.map((meal, index) => (`
        <li id="meal"  data-mealSelected="${index}">
            <img src="${meal.imgSrc}" alt="akara"/>
            <div class="food">
                <h3>${meal.food}</h3>
                <p style="margin-top: -1.5rem">${meal.text}</p>
            </div>
        </li>
    `)).join(' ')
    
    foodList.innerHTML = eachFoodHtmlContent
    let allMeals = document.querySelectorAll("#meal")
    let singleFood = document.querySelector("#singleFood")
    let secondModalOverlay = document.querySelector(".secondModalOverlay")
    let foodImg = document.querySelector(".foodImg")
    
    allMeals.forEach(meal => {
        meal.addEventListener('click', function(e) {
            yourMeal = this.getAttribute('data-mealSelected')
            singleFood.style.display = 'block'
            foodImg.innerHTML =  `<img src="${meals[yourMeal].bigImg}" alt="akara"/>`
        })
    })
    secondModalOverlay.addEventListener('click', (e) => {
        e.stopPropagation()
         singleFood.style.display = 'none'
    })

});
