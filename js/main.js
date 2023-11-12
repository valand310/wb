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

basketList = document.querySelector('.basket__hero')

basketList.addEventListener('click', closeCart)

function closeCart(event) {

    let basketDelete = event.target

    if (basketDelete.closest('.basket__attributes-delete')) {
        basketItem = basketDelete.closest('.basket__item')
        basketItem.style.display = 'none'

    }




}

// ---------------counter----------------------------------

let counter = 1
let counter2 = 200
let counter3 = 2

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
            }
        }

        if (item.closest('.item2')) {
            counter2--
            value.innerHTML = counter2
            totalPrice.innerHTML = (Math.round(counter2 * 10500.235))
            salePrice.innerHTML = (counter2 * 11500)
        }

        if (item.closest('.item3')) {
            if (counter3 == 2)
                counter3--
            value.innerHTML = counter3
            totalPrice.innerHTML = (counter3 * 247)
            salePrice.innerHTML = (counter3 * 475)
            plus.classList.remove('dis')
            minus.classList.add('dis')
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
            }
        }

        if (item.closest('.item2')) {
            counter2++
            value.innerHTML = counter2
            totalPrice.innerHTML = (Math.round(counter2 * 10500.235))
            salePrice.innerHTML = (counter2 * 11500)

        }
        if (item.closest('.item3')) {
            if (counter3 == 1) {
                counter3++
                value.innerHTML = counter3
                totalPrice.innerHTML = (counter3 * 247)
                salePrice.innerHTML = (counter3 * 475)
                plus.classList.add('dis')
                minus.classList.remove('dis')
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








