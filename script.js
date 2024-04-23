const fragCardTemplate = document.querySelector("[data-frag-template]")
const fragCardContainer = document.querySelector("[data-frag-cards-container]")
const searchInput = document.querySelector("[data-search]")

let frags = []

searchInput.addEventListener("input", (e) =>{
    const value = e.target.value.toLowerCase()
    frags.forEach(frag => {
       const isVisible = 
       frag.name.toLowerCase().includes(value) || 
       frag.email.toLowerCase().includes(value)
   frag.element.classList.toggle("hide", !isVisible)
    })
})

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        frags = data.map(frag => {
            const card = fragCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = frag.name
            body.textContent = frag.email
            fragCardContainer.append(card)
            return { name: frag.name, email: frag.email, element: card}

        })
    })


// const perfumesData = [
//     {
//         name: 'Kayali Lovefest',
//         image: 'NotPerfume.jpg',
//         info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//         name: 'Kilian Angel Share',
//         image: 'NotPerfume',
//         info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//         name: 'Narciso Pure Musk',
//         image: 'NotPerfume',
//         info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//         name: 'Kayali Vanilla 28',
//         image: 'NotPerfume',
//         info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//         name: 'Narciso Poudree',
//         image: 'NotPerfume',
//         info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//         name: 'Replica Coffee Break',
//         image: 'NotPerfume',
//         info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//         name: 'Juliette Has A Gun Not A Perfume',
//         image: 'NotPerfume',
//         info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//         name: 'Narciso Musc Noir for her',
//         image: 'NotPerfume',
//         info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },

// ];


