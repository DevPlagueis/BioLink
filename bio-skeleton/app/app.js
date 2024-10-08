// function createAllCards(dataMatrix) {
//     for (const { id, title, img, desc} of dataMatrix) {
//         // Pass unique text content, ID, and onclick handler for each card
//         const clickHandler = () => //
//         Swal.fire({
//             imageUrl: img,
//             text: desc,
//             showClass: {
//                 popup: 'animate__animated animate__fadeInDown'
//             },
//             hideClass: {
//                 popup: 'animate__animated animate__fadeOutUp'
//             }
//         });
//         makeCard(title, id, clickHandler);
//     }
// }

// function makeCard(textContent, cardId, clickHandler) {
//     const card = document.createElement('button');
//     const page = document.querySelector('#pageContent');
//     card.textContent = textContent;
//     card.id = cardId;
//     // Set onclick handler based on the provided function
//     card.onclick = clickHandler;
//     card.classList.add('Card');

//     //clickFlag handler
//     card.clickFlag  = false
//     card.addEventListener('click', function cardClicked(cardId) {
//         if (!this.clickFlag) {//if false
//             console.log(`Current clickFlag for ${this.d} before click: ${this.clickFlag}`);
//             this.clickFlag = true; // Set clickFlag to true
//             console.log(`cickFlag after click: ${this.clickFlag}`)
//             console.log(`Number of total clicks so far: ${numClicks}`);
//             numClicks++; // Increment the number of total clicks
//             console.log(`NUMBER OF CLICKS NOW THAT ${this.id} was clicked: ${numClicks}`);
//         } else {
//             if (numClicks === 4) {
//                 const component = document.querySelector('.hidden');
//                 component.style.visibility = 'visible';
//             }
//             console.log(`Card ${this.id} already clicked.`);
//         }

//     });
//     //function to...
//     page.appendChild(card);
// }

////////////////
///FORMATTED DATE FUNCTION

function formatDate() {
    //TODAYS DATE ONLY
    const today = new Date();

    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    const year = today.getFullYear();

    const formattedDate = `${month}/${day}/${year}`
    return formattedDate
}


function makeCards(dict) {

    for (const { first_name, last_name, } of dict) {
        console.log(first_name + ' ' + last_name)
        
        const feed = document.getElementById('feed-cards')
        const card = document.createElement('div')
            card.classList.add('cards')
        //sections of card
        const header = document.createElement('div')
        const header_left = document.createElement('div')
            header_left.classList.add('header_left', 'header_section')
        const header_right = document.createElement('div')
            header_right.classList.add('header_right', 'header_section')
        header.classList.add('card_header')
            const user_full_name = document.createElement('div')
                user_full_name.textContent = first_name + ' ' + last_name
            const post_date = document.createElement('div')
                post_date.textContent = formatDate()
            const indicator = document.createElement('div')
                indicator.textContent = 'false'
            
            header_left.appendChild(user_full_name)
            header_right.appendChild(post_date)
            header_right.appendChild(indicator)

            header.appendChild(header_left)
            header.appendChild(header_right)


        card.appendChild(header)
        feed.appendChild(card)

    }
}

makeCards(contact_matrix)
 