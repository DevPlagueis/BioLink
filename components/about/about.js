function construction() {
   Swal.fire ({
      title: 'Currently under construction, Sorry.',
      icon: 'info',
      color: 'grey'
   })
}
   function alert() {
   construction()
}
let darkmode = TRUE
function darkMode() {
   // Swal.fire ({
   //    title: 'Its dark in here...',
   //    icon: 'info',
   //    color: 'grey'
   // })
   const headerText = document.getElementById('pageLogo')
   const navbar = document.getElementById('ContentnavBar')
   const background = document.getElementById('ContentCards')
   const darkbutton = document.getElementById('dark')
   if (darkmode == FALSE) {
      headerText.style.color = 'bisque'
      navbar.style.backgroundColor = 'rgb(72, 35, 108)'
      background.style.backgroundColor = 'aliceblue'
      darkbutton.style.backgroundColor = 'aliceblue'
      darkbutton.style.color = 'aliceblue'
      darkmode = TRUE
   } else {
      headerText.style.color = 'rgb(72, 35, 108)'
      navbar.style.backgroundColor = 'bisque'
      background.style.backgroundColor = 'rgb(72, 35, 108)'
      darkbutton.style.backgroundColor = 'rgb(72, 35, 108)'
      darkbutton.style.color = 'rgb(72, 35, 108)'
      darkmode = FALSE
   }
}