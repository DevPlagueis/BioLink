//NAVBAR DATA

const nav_icons = {
    left_icons: {
        1: "Left Icon 1"
        ,2: "Left Icon 2"
        ,3: "Left Icon 3"
        ,4: "Left Icon 4"
    }
    ,right_icons: {
        1: "right Icon 1"
        ,2: "right Icon 2"
        ,3: "right Icon 3"
        ,4: "right Icon 4"
    }
}

const nav_bar = document.getElementById('nav-bar')
const nav_left_icons = document.createElement('div')
const nav_right_icons = document.createElement('div')
const search_bar = document.createElement('form')
const search_input = document.createElement('input')

search_bar.appendChild(search_input)
nav_left_icons.id = "nav-left-icons"
nav_left_icons.id = "nav-right-icons"

nav_bar.appendChild(nav_left_icons)
nav_bar.appendChild(search_bar)
nav_bar.appendChild(nav_right_icons)

function createNavIcons(dict) {
    // Iterate through the nav icons object
    for (const side in nav_icons) {
        // Iterate through each set of icons
        for (const iconKey in nav_icons[side]) {
            // console.log(`${iconKey}: ${nav_icons[side][iconKey]}`);
            const icon = document.createElement('div')
            icon.classList.add('icons')
            icon.textContent = nav_icons[side][iconKey]
            if (nav_icons[side] =='left_icons') {
                nav_left_icons.appendChild(icon)
            } else {
                nav_right_icons.appendChild(icon)
            }
        }
    }
}


