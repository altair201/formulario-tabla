
const personas=[]
const tabla=document.querySelector('.cuerpo_tabla')
class persona{
    constructor(nombre,last,cedula,fecha){
        this.nombre=nombre
        this.last=last
        this.cedula=cedula
        this.fecha=fecha
    }
    agregaratabla(){
        tabla.innerHTML+=`
        <tr>
            <td>${this.nombre}</td>
            <td>${this.apellido}</td>
            <td>${this.cedula}</td>
            <td>${this.fecha}</td>
        </tr>`
    }
}
boton.addEventListener('click', (evento)=>{
    evento.preventDefault()
    const datoPersona=new persona(nombre.value, last.value, cedula.value, fecha.value)
    personas.push(datoPersona)
    datoPersona.agregaratabla()
    console.log(personas)
})