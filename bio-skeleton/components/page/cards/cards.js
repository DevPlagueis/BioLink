/*
CARD
    HEADER
        name
        date
        indocator?
    HEADER
    BODY
        <TITLE>
            <container>
                <1>
                    actual title of content BOLD?
                <1>
                <2>
                    content type
                    date of content publish?
                    reads
                <2>
                <3>
                    Category / sector
                <3>

            <container>
            <img>
                image?
            <img>
        <TITLE>
        <COLLABORATORS>
            <1>
                img 
                user name
            <1>
        <COLLABORATORS
        <MEDIA>
            <L>
                download
                save
            <L>
            <R>
                follow
                *link*
                share
            <R>
        <MEDIA>
    BODY
CARD
*/


function formatDate() {
    //TODAYS DATE ONLY
    const today = new Date();

    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    const year = today.getFullYear();

    const formattedDate = `${month}/${day}/${year}`
    return formattedDate
}

/////////////////DATA for sample card//
//below is matrix of users
//find way to create this from flat / json file

const contact_matrix = [
    {
        contact_id: '000',
        first_name: 'Michael',
        last_name: 'Cuesta',
        contact_affil: 'ABC UNIVERSITY',
        contact_email: 'mikesFake@email.com',

    }
    // ,{
    //     contact_id: '001',
    //     first_name: 'Christian',
    //     last_name: 'Vega',
    //     contact_affil: 'XYZ UNIVERSITY',
    //     contact_email: 'vegaFake@email.com',

    // }
    // ,{
    //     contact_id: '002',
    //     first_name: 'Vic',
    //     last_name: 'Lapost',
    //     contact_affil: 'QRS UNIVERSITY',
    //     contact_email: 'vicFake@email.com',

    // }
]

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



