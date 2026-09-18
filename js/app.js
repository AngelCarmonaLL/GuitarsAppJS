//imports
import { db } from "./guitarra.js";
console.log(db)


//variables
const container = document.querySelector('h2 + div')
console.log(container)

//funciones
function createCard(guitar){
    const div = document.createElement('div')
    div.innerText = "aqui va una guitarra" + guitar.nombre
     div.classList = 'col-md-6 col-lg-4 my-4 row align-items-center'
    const html = ` <div class="col-4">
                    <img class="img-fluid" src="./public/img/guitarra_01.jpg" alt="imagen guitarra">
                </div>
                <div class="col-8">
                    <h3 class="text-black fs-4 fw-bold text-uppercase">Lukather</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                    <p class="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        class="btn btn-dark w-100 "
                    >Agregar al Carrito</button>`
                    
    return div
}


db.forEach(guitar =>{
    container.appendChild(createCard(guitar))
})
//listeners


