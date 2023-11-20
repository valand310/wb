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

const resultItogForDelete = document.querySelector('.result__itog-sum-value')

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

        if (basketItem.closest('.item1')) {
            if (deleteCounter == 2) {
                tovarDelivery1.closest('.delivery__date').style.display = 'none'
            }
            tovarDelivery1.style.display = 'none'
            deleteCounter++
            resultItogForDelete.innerHTML = parseInt(resultItogForDelete.innerHTML) - (counter * 522)
        }
        if (basketItem.closest('.item2')) {
            if (deleteCounter == 2) {
                tovarDelivery1.closest('.delivery__date').style.display = 'none'
            }
            tovarDelivery2.style.display = 'none'
            tovarDelivery4.style.display = 'none'
            tovarDelivery4.closest('.delivery__date').style.display = 'none'
            deleteCounter++
            resultItogForDelete.innerHTML = parseInt(resultItogForDelete.innerHTML) - (Math.round(counter2 * 10500.235))
        }
        if (basketItem.closest('.item3')) {
            if (deleteCounter == 2) {
                tovarDelivery1.closest('.delivery__date').style.display = 'none'
            }
            tovarDelivery3.style.display = 'none'
            deleteCounter++
            resultItogForDelete.innerHTML = parseInt(resultItogForDelete.innerHTML) - (counter3 * 247)

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

        if (basketItemMobile.closest('.item1')) {
            if (deleteCounter == 2) {
                tovarDelivery1.closest('.delivery__date').style.display = 'none'
            }
            tovarDelivery1.style.display = 'none'
            deleteCounter++
        }
        if (basketItemMobile.closest('.item2')) {
            if (deleteCounter == 2) {
                tovarDelivery1.closest('.delivery__date').style.display = 'none'
            }
            tovarDelivery2.style.display = 'none'
            tovarDelivery4.style.display = 'none'
            tovarDelivery4.closest('.delivery__date').style.display = 'none'
            deleteCounter++
        }
        if (basketItemMobile.closest('.item3')) {
            if (deleteCounter == 2) {
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

    const resultItogSum = document.querySelector('.result__itog-sum-value')




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

        resultItogSum.innerHTML = (counter * 522) + (Math.round(counter2 * 10500.235)) + (counter3 * 247)

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

        resultItogSum.innerHTML = (counter * 522) + (Math.round(counter2 * 10500.235)) + (counter3 * 247)

    }

}

// ----------------basket accord-------------------



basketAcc = document.querySelector('.basket__accord')
basketUl = document.querySelector('.basket__hero')
products = document.querySelector('.products__basket')
icon = document.querySelector('.basket__accord-icon')

const basketAccordWrapper = document.querySelector('.basket__accord-wrapper')
const basketAccordHidden = document.querySelector('.basket__accord-hidden')
const basketKolvo = document.querySelector('.basket__accord-kolvo')
const basketAccordSum = document.querySelector('.basket__accord-sum')

const basketCostValue1 = document.querySelector('.basket__cost-total-value1')
const basketCostValue2 = document.querySelector('.basket__cost-total-value2')
const basketCostValue3 = document.querySelector('.basket__cost-total-value3')

basketAcc.addEventListener('click', accClose)

function accClose(e) {

    let accordTarget = e.target

    if (accordTarget.closest('.basket__accord-wrapper')) {
        return
    }



    if (basketUl.closest('.basket__hero--close')) {
        basketUl.style.maxHeight = basketUl.scrollHeight + 'px'
        products.classList.remove('basket__hero--close')
        icon.classList.remove('basket__accord-icon--rotate')
        basketAccordWrapper.style.display = 'flex'
        basketAccordHidden.style.display = 'none'
    }

    else {
        basketUl.style.maxHeight = 0
        products.classList.add('basket__hero--close')
        icon.classList.add('basket__accord-icon--rotate')
        basketAccordWrapper.style.display = 'none'
        basketAccordHidden.style.display = 'block'
        basketKolvo.innerHTML = counter + counter2 + counter3
        basketAccordSum.innerHTML = document.querySelector('.result__itog-sum-value').innerHTML




    }


}


// ==========basket accord mobile===========================

basketAcc2 = document.querySelector('.basket__accord-mobile')
basketUl2 = basketAcc2.nextElementSibling
products2 = document.querySelector('.basket-mobile')
icon2 = basketAcc2.querySelector('.basket__accord-icon')

basketAcc2.addEventListener('click', accClose2)

function accClose2(e) {

    let accordMobileTarget = e.target

    if (accordMobileTarget.closest('.basket__accord-wrapper')) {
        return
    }


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

    if (missList.closest('.miss__accord--close')) {
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

    if (missList2.closest('.miss__accord--close')) {
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

// const inputTel = document.querySelectorAll('input[type="tel"]')

// let im = new Inputmask('+7 (999) 999-99-99')
// im.mask(inputTel)


// ================modal pays======================

const body = document.querySelector('.body')
const buttonChange = document.querySelector('.pay__method-change')
const buttonResultChange = document.querySelector('.result__pay-change')
const buttonChangeMobile = document.querySelector('.result__pay-changeMobile')
const modal = document.querySelector('.modal')
const modalCancel = document.querySelector('.modal__cancel')
const modalList = document.querySelector('.modal__list')
const modalButton = document.querySelector('.modal__button')

buttonChange.addEventListener('click', openModal)
buttonResultChange.addEventListener('click', openModal)
// buttonChangeMobile.addEventListener('click', openModal)

function openModal() {
    body.classList.add('body--opened-modal')
}


modal.addEventListener('click', (e) => {
    // e.preventDefault()
    const target = e.target



    if (target && target.classList.contains('modal') || target.closest('.modal__cancel')) {
        closeModal()
    }
}
)

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && body.classList.contains('body--opened-modal')) {
        closeModal()
    }
})

const closeModal = () => {

    body.classList.remove('body--opened-modal')
}






const payCard1 = document.querySelector('.pay__card-img1')
const payCard2 = document.querySelector('.pay__card-img2')
const payCard3 = document.querySelector('.pay__card-img3')
const payCard4 = document.querySelector('.pay__card-img4')
let itemModal = document.querySelector('.pay__card-img1')

const resultPayCard1 = document.querySelector('.result__pay-img1')
const resultPayCard2 = document.querySelector('.result__pay-img2')
const resultPayCard3 = document.querySelector('.result__pay-img3')
const resultPayCard4 = document.querySelector('.result__pay-img4')
let itemModalResult = document.querySelector('.result__pay-img1')

modalList.addEventListener('click', (e) => {
    let listTarget = e.target

    if (listTarget.closest('.modal__item1')) {
        itemModal = payCard1
        itemModalResult = resultPayCard1
    }
    if (listTarget.closest('.modal__item2')) {
        itemModal = payCard2
        itemModalResult = resultPayCard2
    }
    if (listTarget.closest('.modal__item3')) {
        itemModal = payCard3
        itemModalResult = resultPayCard3
    }
    if (listTarget.closest('.modal__item4')) {
        itemModal = payCard4
        itemModalResult = resultPayCard4
    }







    modalButton.addEventListener('click', () => {
        payCard1.style.display = 'none'
        payCard2.style.display = 'none'
        payCard3.style.display = 'none'
        payCard4.style.display = 'none'
        resultPayCard1.style.display = 'none'
        resultPayCard2.style.display = 'none'
        resultPayCard3.style.display = 'none'
        resultPayCard4.style.display = 'none'

        itemModal.style.display = 'block'
        itemModalResult.style.display = 'block'

        body.classList.remove('body--opened-modal')
    })

})



// ===================popup-tabs================================

const tabPoint = document.querySelector('.popup__tab-point')
const tabCourier = document.querySelector('.popup__tab-courier')

const addressesPoint = document.querySelector('.popup__addresses-point')
const addressesCourier = document.querySelector('.popup__addresses-courier')

tabPoint.addEventListener('click', () => {
    if (addressesPoint.classList.contains('popup__addresses--close')) {
        addressesPoint.classList.remove('popup__addresses--close')
        addressesCourier.classList.add('popup__addresses--close')
        tabPoint.classList.add('popup__addresses--open')
        tabCourier.classList.remove('popup__addresses--open')
    }

})
tabCourier.addEventListener('click', () => {
    if (addressesCourier.classList.contains('popup__addresses--close')) {
        addressesCourier.classList.remove('popup__addresses--close')
        addressesPoint.classList.add('popup__addresses--close')
        tabCourier.classList.add('popup__addresses--open')
        tabPoint.classList.remove('popup__addresses--open')
    }

})


// ================popup-open=========================================


const deliveryChange = document.querySelector('.delivery__method-change')
const deliveryResultChange = document.querySelector('.result__delivery-icon')
const popup = document.querySelector('.popup')
const popupCancel = document.querySelector('.popup__cancel')

deliveryChange.addEventListener('click', openPopup)
deliveryResultChange.addEventListener('click', openPopup)

function openPopup() {
    body.classList.add('body--opened-popup')
}

popup.addEventListener('click', (e) => {
    // e.preventDefault()
    const target = e.target



    if (target && target.classList.contains('popup') || target.closest('.popup__cancel')) {
        closePopup()
    }

    if (target.closest('.popup__addreses-delete')) {
        let popapItem = target.closest('.popup__addreses-item')
        popapItem.style.display = 'none'
    }
}
)

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && body.classList.contains('body--opened-popup')) {
        closePopup()
    }
})

const closePopup = () => {

    body.classList.remove('body--opened-popup')
}


// ===================popup-change======================

const deliveryStreet = document.querySelector('.delivery__place-street')
const popupButtonPoint = document.querySelector('.popup__button-point')
const popupButtonCourier = document.querySelector('.popup__button-courier')
const deliveryMethod = document.querySelector('.delivery__place-method')
const deliveryPlace = document.querySelector('.delivery__place')

const resultMethod = document.querySelector('.result__delivery-method')
const resultDeliveryAddress = document.querySelector('.result__delivery-adress')
const deliveryPlaceIcon = document.querySelector('.delivery__place-icon')

addressesPoint.addEventListener('click', changeAddress)
addressesCourier.addEventListener('click', changeAddress)


function changeAddress(e) {
    let target = e.target
    let addressItem = target.closest('.popup__addreses-item')

    let addressesValue = addressItem.querySelector('.popup__addresses-value').innerHTML

    popupButtonPoint.addEventListener('click', () => {
        body.classList.remove('body--opened-popup')
        deliveryStreet.innerHTML = addressesValue
        deliveryMethod.innerHTML = 'Пункт выдачи'
        deliveryPlace.style.gap = '78px'
        deliveryPlaceIcon.style.display = 'block'

        if (document.documentElement.clientWidth <= 700) {
            deliveryPlace.style.gap = '0px'
        }

        resultMethod.innerHTML = 'Доставка в пункт выдачи'
        resultDeliveryAddress.innerHTML = addressesValue
    })
    popupButtonCourier.addEventListener('click', () => {
        body.classList.remove('body--opened-popup')
        deliveryStreet.innerHTML = addressesValue
        deliveryMethod.innerHTML = 'Курьером'
        deliveryPlace.style.gap = '110px'
        deliveryPlaceIcon.style.display = 'none'

        if (document.documentElement.clientWidth <= 700) {
            deliveryPlace.style.gap = '0px'
        }

        resultMethod.innerHTML = 'Доставка курьером'
        resultDeliveryAddress.innerHTML = addressesValue
    })


}


// ==========result checkbox change itog sum====================

const resultCheckbox = document.querySelector('.result__payment-checkbox')
const resultButton = document.querySelector('.result__button')
const resultItog = document.querySelector('.result__itog-sum')

resultCheckbox.addEventListener('click', () => {
    if (resultCheckbox.classList.contains('result__topay')) {
        resultButton.innerHTML = 'Заказать'
    } else {
        resultButton.innerHTML = 'Оплатить' + resultItog.innerHTML
    }
    resultCheckbox.classList.toggle('result__topay')
})


// =============checkbox-togather====================

document.getElementById("first-checkbox").addEventListener("change", function () {
    document.getElementById("second-checkbox").checked = this.checked;
    document.getElementById("third-checkbox").checked = this.checked;
    document.getElementById("fourth-checkbox").checked = this.checked;
});
// =============checkbox-togather mobile====================

document.getElementById("first-checkbox-mobile").addEventListener("change", function () {
    document.getElementById("second-checkbox-mobile").checked = this.checked;
    document.getElementById("third-checkbox-mobile").checked = this.checked;
    document.getElementById("fourth-checkbox-mobile").checked = this.checked;
});

// ===============checkbox влияет на итог сумму============================

const resultItogSumValue = document.querySelector('.result__itog-sum-value')



document.addEventListener('click', (e) => {

    let checkBoxTarget = e.target

    if (checkBoxTarget.closest('.basket__checkbox-first')) {

        const checkboxHere = checkBoxTarget.closest('.basket__checkbox-first')

        if (checkboxHere.checked) {

            let abc = parseInt(resultItogSumValue.innerHTML)

            resultItogSumValue.innerHTML = abc + (counter * 522)

        } else {

            let abc = parseInt(resultItogSumValue.innerHTML)

            resultItogSumValue.innerHTML = abc - (counter * 522)
        }
    }



    if (checkBoxTarget.closest('.basket__checkbox-sec')) {

        const checkboxHere2 = checkBoxTarget.closest('.basket__checkbox-sec')

        if (checkboxHere2.checked) {

            let abc = parseInt(resultItogSumValue.innerHTML)

            resultItogSumValue.innerHTML = abc + (Math.round(counter2 * 10500.235))

        } else {

            let abc = parseInt(resultItogSumValue.innerHTML)

            resultItogSumValue.innerHTML = abc - (Math.round(counter2 * 10500.235))
        }
    }

    if (checkBoxTarget.closest('.basket__checkbox-thr')) {

        const checkboxHere3 = checkBoxTarget.closest('.basket__checkbox-thr')

        if (checkboxHere3.checked) {

            let abc = parseInt(resultItogSumValue.innerHTML)

            resultItogSumValue.innerHTML = abc + (counter3 * 247)

        } else {

            let abc = parseInt(resultItogSumValue.innerHTML)

            resultItogSumValue.innerHTML = abc - (counter3 * 247)
        }
    }

})


// =================inputs===========================

const inputName = document.querySelector('.client__input-name')
const inputFam = document.querySelector('.client__input-fam')
const inputMail = document.querySelector('.client__input-mail')
const inputInn = document.querySelector('.client__input-inn')
const inputTelephone = document.querySelector('.client__input-tel')
const clientSection = document.querySelector('.main__client')

let regNumbers = /[0-9]/g;
let inputLatters = /[A-Za-zА-Яа-яЁё]/g;
let onlyLatters = /^[а-яА-Яa-zA-Z]+$/
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let innPattern12 = /^\d{12}$/;
let innPattern10 = /^\d{10}$/;
let phoneNumberRegex = /^\+\d{11}$/;



inputName.oninput = function () {

    // console.log('dasdasd')
    if (inputName.value.match(onlyLatters)) {
        inputName.closest('.client__label').classList.remove('client__input--wrong')
    } else {

        inputName.closest('.client__label').classList.add('client__input--wrong')
    }


}

inputFam.oninput = function () {

    // console.log('dasdasd')
    if (inputFam.value.match(onlyLatters)) {
        inputFam.closest('.client__label').classList.remove('client__input--wrong')
    } else {

        inputFam.closest('.client__label').classList.add('client__input--wrong')
    }


}


inputMail.oninput = function () {

    // console.log('dasdasd')
    if (inputMail.value.match(emailRegex)) {
        inputMail.closest('.client__label').classList.remove('client__input--wrong')
    } else {

        inputMail.closest('.client__label').classList.add('client__input--wrong')
    }


}

inputInn.oninput = function () {

    // console.log('dasdasd')
    if (inputInn.value.match(innPattern12) || inputInn.value.match(innPattern10)) {
        inputInn.closest('.client__label').classList.remove('client__input--wrong')
    } else {

        inputInn.closest('.client__label').classList.add('client__input--wrong')
    }


}

inputTelephone.oninput = function () {

    // console.log('dasdasd')
    if (inputTelephone.value.match(phoneNumberRegex)) {
        inputTelephone.closest('.client__label').classList.remove('client__input--wrong')
    } else {

        inputTelephone.closest('.client__label').classList.add('client__input--wrong')
    }


}



// ==============button scroll to form if wrong=========================

const buttonFromInput = document.querySelector('.result__button')

buttonFromInput.addEventListener('click', () => {


    if (inputName.closest('.client__input--wrong') || inputFam.closest('.client__input--wrong') || inputMail.closest('.client__input--wrong') || inputInn.closest('.client__input--wrong') || inputTelephone.closest('.client__input--wrong')) {

        clientSection.scrollIntoView({ behavior: 'smooth' });


    }
    // console.log('dasda')
    // console.log(inputTelephone)

    if (inputName.value.length < 1) {
        clientSection.scrollIntoView({ behavior: 'smooth' });
        inputName.closest('.client__label').classList.add('client__input--wrong')
    }
    if (inputFam.value.length < 1) {
        clientSection.scrollIntoView({ behavior: 'smooth' });
        inputFam.closest('.client__label').classList.add('client__input--wrong')
    }
    if (inputMail.value.length < 1) {
        clientSection.scrollIntoView({ behavior: 'smooth' });
        inputMail.closest('.client__label').classList.add('client__input--wrong')
    }
    if (inputInn.value.length < 1) {
        clientSection.scrollIntoView({ behavior: 'smooth' });
        inputInn.closest('.client__label').classList.add('client__input--wrong')
    }
    if (inputTelephone.value.length < 1) {
        clientSection.scrollIntoView({ behavior: 'smooth' });
        inputTelephone.closest('.client__label').classList.add('client__input--wrong')
    }

})

// ================change like for pink===================


document.addEventListener('click', (e) => {
    likeTarget = e.target

    if (likeTarget.closest('.basket__attributes-like')) {

        let svgLike = likeTarget.closest('.basket__attributes-like')

        if (svgLike.closest('.icon--pink')) {

            svgLike.querySelector("path").setAttribute("fill", "black");
            svgLike.classList.remove('icon--pink')
        } else {

            svgLike.querySelector("path").setAttribute("fill", "#CB11AB");
            svgLike.classList.add('icon--pink')
        }
    }

    if (likeTarget.closest('.miss__like')) { 
        let svgLike = likeTarget.closest('.miss__like')

        if (svgLike.closest('.icon--pink')) {

            svgLike.querySelector("path").setAttribute("fill", "black");
            svgLike.classList.remove('icon--pink')
        } else {

            svgLike.querySelector("path").setAttribute("fill", "#CB11AB");
            svgLike.classList.add('icon--pink')
        }
    }


})






















