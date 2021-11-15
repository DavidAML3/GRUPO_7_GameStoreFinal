//REGISTER
let formRegister = document.querySelector("#formRegister")

formRegister.addEventListener("submit", (e)=>{
    const name = document.querySelector("#name")
    const username = document.querySelector("#username")
    const profileImg = document.querySelector("#profileImg")
    const password = document.querySelector("#password")
    const confirmPassword = document.querySelector("#confirmPassword")

    const errors = []

    if(name.value == "" || username.value == ""){
        errors.push("El campo no puede estar vacío")
        alert("El campo no puede estar vacío");
    }
    if(name.value.length <= 2 || username.value.length <=2){
        errors.push("El campo debe estar compuesto por mas de 2 caracteres")
        alert("El campo debe estar compuesto por mas de 2 caracteres");
    }
    if(password.value.length < 8){
        errors.push("La contraseña debe estar compuesta por al menos 8 caracteres")
        alert("La contraseña debe estar compuesta por al menos 8 caracteres")
        password.value = "";
        if(confirmPassword != password){
            errors.push("Las contraseñas no coinciden");
            alert("Las contraseñas no coinciden");
        }
    }
    let extensiones = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!extensiones.exec(profileImg.value)){
        errors.push("Inserte un archivo valido con las extensiones .jpg/.jpeg/.png/.gif solamente.")
        alert("Inserte un archivo valido con las extensiones .jpg/.jpeg/.png/.gif solamente.");
        profileImg.value = "";
        alert()
    }

    if(errors.length > 0){
        e.preventDefault()
    }
    
})

//LOGIN
let formLogin = document.querySelector("#formLogin")
formRegister.addEventListener("submit", (e)=>{
    const username = document.querySelector("#username")
    const password = document.querySelector("#password")

    const errors =[]

    if(username.value == ""){
        errors.push("El campo no puede estar vacío")
        alert("El campo no puede estar vacío");
        username.value = "";
    }
    if(username.value.length <=2){
        errors.push("El campo debe estar compuesto por mas de 2 caracteres")
        alert("El campo debe estar compuesto por mas de 2 caracteres")
        username.value = "";
    }
    if(password.value.length < 8){
        errors.push("La contraseña debe estar compuesta por al menos 8 caracteres")
        alert("La contraseña debe estar compuesta por al menos 8 caracteres");
        password.value = "";
    }

    if(errors.length > 0){
        e.preventDefault()
    }
})

//CREAR PRODUCTOS
let createProducts = document.querySelector("#formNewProducts")
createProducts.addEventListener("submit", (e)=>{
    const name = document.querySelector("#name");
    const console = document.querySelector("#console");
    const img = document.querySelector("#img");
    const price = document.querySelector("#price");
    const stock = document.querySelector("#stock");
    const description = document.querySelector("#description");
    const generos = document.querySelector("#generos");

    const errors = []
    
    if(name.value.length < 2){
        errors.push("El nombre debe contener al menos 2 caracteres");
        alert("El nombre debe contener al menos 2 caracteres");
    }
    let extensiones = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!extensiones.exec(img.value)){
        errors.push("Inserte un archivo valido con las extensiones .jpg/.jpeg/.png/.gif solamente.")
        img.value = "";
        alert("Inserte un archivo valido con las extensiones .jpg/.jpeg/.png/.gif solamente.")
    }
    if(description.value.length < 20){
        errors.push("La descripción debe contener al menos 20 caracteres")
        alert("La descripción debe contener al menos 20 caracteres");
    }
    
    
    if(errors.length > 0){
        e.preventDefault()
    }

})

//EDITAR PRODUCTOS
let editProducts = document.querySelector("#formEditProducts")
editProducts.addEventListener("submit", (e)=>{
    const name = document.querySelector("#name");
    const console = document.querySelector("#console");
    // const img = document.querySelector("#img");
    const price = document.querySelector("#price");
    const stock = document.querySelector("#stock");
    const description = document.querySelector("#description");
    const generos = document.querySelector("#generos");

    const errors = []
    
    if(name.value.length < 2){
        errors.push("El nombre debe contener al menos 2 caracteres");
        alert("El nombre debe contener al menos 2 caracteres");
    }
    // let extensiones = /(.jpg|.jpeg|.png|.gif)$/i;
    // if(!extensiones.exec(img.value)){
    //     errors.push("Inserte un archivo valido con las extensiones .jpg/.jpeg/.png/.gif solamente.")
    //     img.value = "";
    //     alert("Inserte un archivo valido con las extensiones .jpg/.jpeg/.png/.gif solamente.")
    // }
    if(description.value.length < 20){
        errors.push("La descripción debe contener al menos 20 caracteres")
        alert("La descripción debe contener al menos 20 caracteres");
    }
    
    
    if(errors.length > 0){
        e.preventDefault()
    }

})