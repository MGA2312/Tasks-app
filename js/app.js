var nombre=prompt("Ingrese su nombre");
obtenerTarea();
document.getElementById("formTareas").addEventListener('submit' , guardarTarea);
function guardarTarea(e){
    let titulo=(document.getElementById("tituloTarea").value);
    let descripcion=(document.getElementById("descripcion").value);
    const tarea={
        titulo,
        descripcion
    };
    if(localStorage.getItem('tareas') === null){
        let tasks= [];
        tasks.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tasks));
    } else{
        let tasks= JSON.parse(localStorage.getItem('tareas'));
        tasks.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tasks));
    }
    document.getElementById("formTareas").reset();
    obtenerTarea();
    e.preventDefault();

}
function obtenerTarea(){
    
    let tasks = JSON.parse(localStorage.getItem('tareas'));
    let tareasHtml = document.getElementById('tareas');
    tareasHtml.innerHTML='';
    for(let i=0;i<tasks.length;i++){
        let titulo=tasks[i].titulo;
        let descripcion=tasks[i].descripcion;
    
        tareasHtml.innerHTML += `
        <div class="card p mb-3">
            <div class="card-body">
            <h5>Tarea:</h5>
            <p>${titulo}</p>
            <h5>Descripcion:</h5>
            <p>${descripcion}</p>
        <a class="btn btn-danger" onclick="eliminarTarea('${titulo}')">
            Eliminar
        </a>
        </div>
        </div>
        `;
    }
}
function eliminarTarea(tit){
    let tasks=JSON.parse(localStorage.getItem('tareas'));
    for(let i=0; i< tasks.length; i++){
        if(tasks[i].titulo==tit){
            tasks.splice(i,1); 
        }
    }
    localStorage.setItem('tareas',JSON.stringify(tasks));
    obtenerTarea();
} 