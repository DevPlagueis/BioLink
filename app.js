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



/////////////////////////
createNavIcons(nav_icons)

makeCards(contact_matrix)
 