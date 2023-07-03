const indexHTML = document.querySelector(".form")

indexHTML.addEventListener("submit", function(event){
event.preventDefault()
const namefound = document.querySelector("#name").value.trim()
const emailfound = document.querySelector("#mail").value.trim()
const passwordfound = document.querySelector("#password").value.trim()
const passwordconffound = document.querySelector("#password-confirm").value.trim()
const usersfound = document.querySelector(".users")

if(!usersfound || !emailfound || !passwordfound || !passwordconffound){
   return Swal.fire('Please fill all the fields')
}

if (passwordfound !== passwordconffound) {
    return Swal.fire('Rlly? You Cant do it?')
}
let usersHTML = ""
usersHTML += `<div> <h2> ${namefound} </h2> 
<p> ${emailfound} </p>
<p> ${passwordfound} </p>
</div>`
usersfound.innerHTML += usersHTML
indexHTML.reset()
})

