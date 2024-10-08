//NAVBAR DATA

const nav_icons = {
    left_icons: {
        'Sign Up': "../components/sign_up/sign_up.html"
        ,'left 2': "#"
        ,'left 3': "#"
        ,'Explore': "../components/explore/explore.html"
    }
    ,right_icons: {
        'Messages': "#"
        ,'Info': "#"
        ,'About': "#"
        ,'Profile': "#"
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
        const targetDiv = icon_side === 'left_icons' ? nav_left_icons : nav_right_icons
        // Iterate through each set of icons
        for (const icon_text in dict[icon_side]) {
            // console.log(`${nav_icons[icon_side][icon_text]}`)
            const icon = document.createElement('a')
            icon.classList.add('icons')
            
            icon.setAttribute('href', nav_icons[icon_side][icon_text])
            console.log(nav_icons[icon_side][icon_text])
            icon.textContent = icon_text
            targetDiv.appendChild(icon)

        }
    }
}


