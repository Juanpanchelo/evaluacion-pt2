let escuela ={
    estudiantes:[

    ]
}


function agregarEstudiante(nombre, notas){
    let persona = new Object()
    persona.nombre = nombre
    persona.notas = notas
    escuela.estudiantes.push(persona)
}

agregarEstudiante("Juanjo", [5,4.5,4,5,4.5])
agregarEstudiante("Alison", [4,4.5,4,3,4.5])
agregarEstudiante("Leidy", [4,4.5,4,5,4.5])


function listarEstudiantes(){
    for(let i = 0; i < escuela.estudiantes.length; i++){
        console.log(escuela.estudiantes[i]);
    }
}

function promedioEstudiante(nombre) {
    const estudiante = escuela.estudiantes.find(estudiante => estudiante.nombre === nombre);
    if (estudiante) {
      const sumaNotas = estudiante.notas.reduce((total, notas) => total + notas, 0);
      return sumaNotas  / estudiante.notas.length;
    }
}


console.log(listarEstudiantes());
console.log(promedioEstudiante("Leidy"));