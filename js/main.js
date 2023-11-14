// value = document.querySelector('.basket__counter-value')
// minus = document.querySelector('.basket__counter-minus')
// plus = document.querySelector('.basket__counter-plus')
// totalPrice = document.querySelector('.basket__cost-total-value')
// salePrice = document.querySelector('.basket__cost-sale-value')
// let counter = 1;



// plus.addEventListener('click', plusNow)

// function plusNow() {


//     if(counter == 1) {
//         counter++
//         value.innerHTML = counter
//         totalPrice.innerHTML = ( counter * 522)
//         salePrice.innerHTML = ( counter * 1051)
//         plus.classList.add('dis')
//         minus.classList.remove('dis')
//     }

// }


// minus.addEventListener('click', minusNow)

// function minusNow() {

//     if(counter == 2) {
//         counter--
//         value.innerHTML = counter
//         totalPrice.innerHTML = ( counter * 522)
//         salePrice.innerHTML = ( counter * 1051)
//         plus.classList.remove('dis')
//         minus.classList.add('dis')
//     }

// }

// bot

// -----top

// value2 = document.querySelector('.basket__counter-value2')
// minus2 = document.querySelector('.basket__counter-minus2')
// plus2 = document.querySelector('.basket__counter-plus2')
// totalPrice2 = document.querySelector('.basket__cost-total-value2')
// salePrice2 = document.querySelector('.basket__cost-sale-value2')
// let counter2 = 200;



// plus2.addEventListener('click', plusNow2)

// function plusNow2() {


//     if(counter == 1) {
//         counter++
//         value.innerHTML = counter
//         totalPrice.innerHTML = ( counter * 522)
//         salePrice.innerHTML = ( counter * 1051)
//         plus.classList.add('dis')
//         minus.classList.remove('dis')
//     }



// }


// minus2.addEventListener('click', minusNow2)

// function minusNow2() {

//     if(counter == 2) {
//         counter--
//         value.innerHTML = counter
//         totalPrice.innerHTML = ( counter * 522)
//         salePrice.innerHTML = ( counter * 1051)
//         plus.classList.remove('dis')
//         minus.classList.add('dis')
//     }

// }

// -----bot








// -------------------delete cart----------------------------

let deleteCounter = 0

tovarDelivery1 = document.querySelector('.tovar1')
tovarDelivery2 = document.querySelector('.tovar2')
tovarDelivery3 = document.querySelector('.tovar3')
tovarDelivery4 = document.querySelector('.tovar4')

basketList = document.querySelector('.basket__hero')

basketList.addEventListener('click', closeCart)

function closeCart(event) {

    let basketDelete = event.target

    if (basketDelete.closest('.basket__attributes-delete')) {
        basketItem = basketDelete.closest('.basket__item')
        basketItem.style.display = 'none'

        if(basketItem.closest('.item1')){
            if(deleteCounter == 2){
                tovarDelivery1.closest('.delivery__date').style.display = 'none'
            }
            tovarDelivery1.style.display = 'none'
            deleteCounter++
        }
        if(basketItem.closest('.item2')){
            if(deleteCounter == 2){
                tovarDelivery1.closest('.delivery__date').style.display = 'none'
            }
            tovarDelivery2.style.display = 'none'
            tovarDelivery4.style.display = 'none'
            tovarDelivery4.closest('.delivery__date').style.display = 'none'
            deleteCounter++
        }
        if(basketItem.closest('.item3')){
            if(deleteCounter == 2){
                tovarDelivery1.closest('.delivery__date').style.display = 'none'
            }
            tovarDelivery3.style.display = 'none'
            deleteCounter++
            
        }

    }




}


// ============delete-card mobile===================================

basketMobile = document.querySelector('.basket-mobile')

basketMobile.addEventListener('click', closeCartMobile)

function closeCartMobile(event) {

    let basketDeleteMobile = event.target

    if (basketDeleteMobile.closest('.basket__attributes-delete')) {
        basketItemMobile = basketDeleteMobile.closest('.basket__item')
        basketItemMobile.style.display = 'none'

        if(basketItemMobile.closest('.item1')){
            if(deleteCounter == 2){
                tovarDelivery1.closest('.delivery__date').style.display = 'none'
            }
            tovarDelivery1.style.display = 'none'
            deleteCounter++
        }
        if(basketItemMobile.closest('.item2')){
            if(deleteCounter == 2){
                tovarDelivery1.closest('.delivery__date').style.display = 'none'
            }
            tovarDelivery2.style.display = 'none'
            tovarDelivery4.style.display = 'none'
            tovarDelivery4.closest('.delivery__date').style.display = 'none'
            deleteCounter++
        }
        if(basketItemMobile.closest('.item3')){
            if(deleteCounter == 2){
                tovarDelivery1.closest('.delivery__date').style.display = 'none'
            }
            tovarDelivery3.style.display = 'none'
            deleteCounter++
            
        }

    }




}



// ---------------counter----------------------------------

let counter = 1
let counter2 = 200
let counter3 = 2

deliveryImg1 = document.querySelector('.img1')
deliveryImg2 = document.querySelector('.img2')
deliveryImg3 = document.querySelector('.img3')


ulBasket = document.querySelector('.basket__hero')

ulBasket.addEventListener('mousemove', count)



function count(event) {



    item = event.target.closest('.basket__item')



    minus = item.querySelector('.basket__counter-minus')
    value = item.querySelector('.basket__counter-value')
    plus = item.querySelector('.basket__counter-plus')

    totalPrice = item.querySelector('.basket__cost-total-value')
    salePrice = item.querySelector('.basket__cost-sale-value')


    minus.addEventListener('click', minusNow)
    plus.addEventListener('click', plusNow)




    // console.log(minus)
    // console.log(value)
    // console.log(plus)
    // console.log(totalPrice)
    // console.log(salePrice)

    function minusNow(e) {
        e.stopImmediatePropagation()
        if (item.closest('.item1')) {
            if (counter == 2) {
                counter--
                value.innerHTML = counter
                totalPrice.innerHTML = (counter * 522)
                salePrice.innerHTML = (counter * 1051)
                plus.classList.remove('dis')
                minus.classList.add('dis')
                deliveryImg1.innerHTML = counter
            }
        }

        if (item.closest('.item2')) {
            counter2--
            value.innerHTML = counter2
            totalPrice.innerHTML = (Math.round(counter2 * 10500.235))
            salePrice.innerHTML = (counter2 * 11500)
            deliveryImg2.innerHTML = (counter2 - 16)
        }

        if (item.closest('.item3')) {
            if (counter3 == 2)
                counter3--
            value.innerHTML = counter3
            totalPrice.innerHTML = (counter3 * 247)
            salePrice.innerHTML = (counter3 * 475)
            plus.classList.remove('dis')
            minus.classList.add('dis')
            deliveryImg3.innerHTML = counter3
        }
    }

    function plusNow(e) {
        e.stopImmediatePropagation()
        if (item.closest('.item1')) {
            if (counter == 1) {
                counter++
                value.innerHTML = counter
                totalPrice.innerHTML = (counter * 522)
                salePrice.innerHTML = (counter * 1051)
                plus.classList.add('dis')
                minus.classList.remove('dis')
                deliveryImg1.innerHTML = counter
            }
        }

        if (item.closest('.item2')) {
            counter2++
            value.innerHTML = counter2
            totalPrice.innerHTML = (Math.round(counter2 * 10500.235))
            salePrice.innerHTML = (counter2 * 11500)
            deliveryImg2.innerHTML = (counter2 - 16)
        }
        if (item.closest('.item3')) {
            if (counter3 == 1) {
                counter3++
                value.innerHTML = counter3
                totalPrice.innerHTML = (counter3 * 247)
                salePrice.innerHTML = (counter3 * 475)
                plus.classList.add('dis')
                minus.classList.remove('dis')
                deliveryImg3.innerHTML = counter3
            }
        }

    }

}

// ----------------basket accord-------------------



basketAcc = document.querySelector('.basket__accord')
basketUl = document.querySelector('.basket__hero')
products = document.querySelector('.products__basket')
icon = document.querySelector('.basket__accord-icon')

basketAcc.addEventListener('click', accClose)

function accClose() {


    if (basketUl.closest('.basket__hero--close')) {
        basketUl.style.maxHeight = basketUl.scrollHeight + 'px'
        products.classList.remove('basket__hero--close')
        icon.classList.remove('basket__accord-icon--rotate')
    }

    else {
        basketUl.style.maxHeight = 0
        products.classList.add('basket__hero--close')
        icon.classList.add('basket__accord-icon--rotate')
    }


}


// ==========basket accord mobile===========================

basketAcc2 = document.querySelector('.basket__accord-mobile')
basketUl2 = basketAcc2.nextElementSibling
products2 = document.querySelector('.basket-mobile')
icon2 = basketAcc2.querySelector('.basket__accord-icon')

basketAcc2.addEventListener('click', accClose2)

function accClose2() {


    if (basketUl2.closest('.basket__hero--close')) {
        basketUl2.style.maxHeight = basketUl2.scrollHeight + 'px'
        products2.classList.remove('basket__hero--close')
        icon2.classList.remove('basket__accord-icon--rotate')
    }

    else {
        basketUl2.style.maxHeight = 0
        products2.classList.add('basket__hero--close')
        icon2.classList.add('basket__accord-icon--rotate')
    }


}


// ================miss accord===============================

const missAccord = document.querySelector('.miss__accord')
const missList = document.querySelector('.miss__list')
const missIcon = document.querySelector('.miss__accord-icon')
const missInner = document.querySelector('.miss__inner')

missAccord.addEventListener('click', accordMiss)

function accordMiss() {
    
    if(missList.closest('.miss__accord--close')) {
        missList.style.maxHeight = missList.scrollHeight + 'px'
        missInner.classList.remove('miss__accord--close')
        missIcon.classList.remove('miss__accord-icon--rotate')
    }
    else {
        missList.style.maxHeight = 0
        missInner.classList.add('miss__accord--close')
        missIcon.classList.add('miss__accord-icon--rotate')
    }
}


// ================miss accord-mobile===============================

const missAccord2 = document.querySelector('.miss__accord-mobile')
const missList2 = missAccord2.nextElementSibling
const missIcon2 = missAccord2.querySelector('.miss__accord-icon')
const missInner2 = missAccord2.closest('.miss__inner')

missAccord2.addEventListener('click', accordMiss2)

function accordMiss2() {
    
    if(missList2.closest('.miss__accord--close')) {
        missList2.style.maxHeight = missList2.scrollHeight + 'px'
        missInner2.classList.remove('miss__accord--close')
        missIcon2.classList.remove('miss__accord-icon--rotate')
    }
    else {
        missList2.style.maxHeight = 0
        missInner2.classList.add('miss__accord--close')
        missIcon2.classList.add('miss__accord-icon--rotate')
    }
}


// ===========delete card miss========================================

const missUl = document.querySelector('.miss__list')
const missCountEl = document.querySelector('.miss__accord-count')

let missCounter = 3

missUl.addEventListener('click', closeCartMiss)

function closeCartMiss(event) {
    let missDelete = event.target

    if (missDelete.closest('.miss__delete')) {
        missItem = missDelete.closest('.miss__item')
        missItem.style.display = 'none'

        missCounter--
        missCountEl.innerHTML = missCounter

    }

    


}


// ===========delete card miss mobile========================================


const productsWrapperMob = document.querySelector('.products__inner-wrapper-mobile')
const missUlMob = productsWrapperMob.querySelector('.miss__list')
const missCountElMob = productsWrapperMob.querySelector('.miss__accord-count')

let missCounterMob = 3

missUlMob.addEventListener('click', closeCartMissMob)

function closeCartMissMob(event) {
    let missDeleteMob = event.target

    if (missDeleteMob.closest('.miss__delete')) {
        missItemMob = missDeleteMob.closest('.miss__item')
        missItemMob.style.display = 'none'

        missCounterMob--
        missCountElMob.innerHTML = missCounterMob
    }
}


// ----mask----

const inputTel = document.querySelectorAll('input[type="tel"]')

let im = new Inputmask('+7 (999) 999-99-99')
im.mask(inputTel)








