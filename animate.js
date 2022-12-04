
// const cardsets = document.querySelectorAll('.card_container');

// const setClasses = (cardset) => {
//     const cards = cardset.querySelectorAll('.cards');
//     const classes = ['active', 'right'];
//     cards.forEach((card, index) => card.classList.add(classes[index]))
// }


// const changePositions = (e) => {
//     const clickedCard = e.currentTarget
//     const activeCard = document.querySelector('.cards.active')
//     if(clickedCard.classList.contains('active')) return;
//     const classesFrom = e.currentTarget.className
//     const classesTo = activeCard.className
//     clickedCard.className = classesTo
//     activeCard.className = classesFrom
// }

// cards.forEach((card) => {
//     card
//         .addEventListener('click', changePositions)
// })

// cardsets.forEach((cardset) => {
//     setClasses(cardset);
// })

const cardsets = document.querySelectorAll('.card_container');
// const cards = document.querySelectorAll('.cards');

const changePositions = (e, cardset) => {
    const clickedCard = e.currentTarget
    if(clickedCard.classList.contains('active')) return;
    const activeCard = cardset.querySelector('.cards.active')
    const classesFrom = e.currentTarget.className
    const classesTo = activeCard.className
    clickedCard.className = classesTo
    activeCard.className = classesFrom
}

cardsets.forEach((cardset) => {
    const cards = cardset.querySelectorAll('.cards')
    const classes = ['active', 'right'];
    cards.forEach((card, index) => card.classList.add(classes[index]))

})

cardsets.forEach((cardset) => {
    const cards = cardset.querySelectorAll('.cards')
    cards.forEach((card) => {
        ["click", "keypress"].forEach(ev=>{
            card.addEventListener(ev, function (ev) {
                changePositions(ev, cardset);
            })
        // card.addEventListener(["click", "keypress"].forEach, function (e) {
        //     changePositions(e, cardset);
        })
    })
})

// const setClasses = () => {
//     const classes = ['active', 'right'];
//     cards.forEach((card, index) => card.classList.add(classes[index]))
// }




// cards.forEach((card) => {
//     card
//         .addEventListener('click', changePositions)
// })

// setClasses();