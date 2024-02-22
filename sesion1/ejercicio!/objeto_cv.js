let miCv = {
    nombre: 'jonatan',
    direccionPostal: 'Calle Princesa',
    email: 'Jonatan@gmail.com',
    titulosAcademicos: 'Grado en Hosteleria',
    idiomas: [
        {
            idioma: 'Ingles',
            nivel: 'Nativo'
        },
        {
            idioma: 'Castellano',
            nivel: 'Basico'
        }
    ],
}

console.log(miCv.idiomas[0].nivel)
