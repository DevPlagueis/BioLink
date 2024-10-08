//NAVBAR DATA

const nav_icons = {
    left_icons: {
        'Sign Up': "Left Icon 1"
        ,2: "Left Icon 2"
        ,3: "Left Icon 3"
        ,'Explore': "Left Icon 4"
    }
    ,right_icons: {
        'Dark Mode': "right Icon 1"
        ,'Info': "right Icon 2"
        ,'About': "right Icon 3"
        ,'Profile': "right Icon 4"
    }
}

const nav_bar = document.getElementById('nav-bar')
const nav_left_icons = document.createElement('div')
const nav_right_icons = document.createElement('div')
const search_bar = document.createElement('form')
const search_input = document.createElement('input')
nav_left_icons.id = "nav-left-icons"
nav_right_icons.id = "nav-right-icons"
nav_left_icons.classList.add('icons')
nav_right_icons.classList.add('icons')
nav_bar.appendChild(nav_left_icons)
nav_bar.appendChild(search_bar)
nav_bar.appendChild(nav_right_icons)
search_bar.appendChild(search_input)



function createNavIcons(dict) {
    // Iterate through the nav icons object
    for (const icon_side in dict) {
        //sets the 'side' loop is working on for our append
        const targetDiv = icon_side === 'left_icons' ? nav_left_icons : nav_right_icons;
        // Iterate through each set of icons
        for (const icon_text in dict[icon_side]) {
            // console.log(`${iconKey}: ${nav_icons[side][iconKey]}`)
            const icon = document.createElement('div')
            icon.classList.add('icons')
            icon.textContent = icon_text
            targetDiv.appendChild(icon)
        }
    }
}


