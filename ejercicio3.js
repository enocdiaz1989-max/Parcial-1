const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nombre completo del estudiante: ', (nombre) => {

    rl.question('Código de inscripción: ', (codigo) => {

        let nombreMayusculas = nombre.toUpperCase();
        let codigoMayusculas = codigo.toUpperCase();

        let carrera = codigoMayusculas.slice(0, 3);

        let anioTexto = codigoMayusculas.slice(4, 8);

        let registro = codigoMayusculas.slice(9, 13);

        let anio = parseInt(anioTexto);

        let estado;

        if (anio === 2026) {
            estado = 'INSCRIPCIÓN VÁLIDA';
        } else {
            estado = 'VERIFICAR AÑO DE INSCRIPCIÓN';
        }

        console.log('\n====================================');
        console.log('TICKET DE INSCRIPCIÓN');
        console.log('====================================');
        console.log(`Estudiante: ${nombreMayusculas}`);
        console.log(`Código: ${codigoMayusculas}`);
        console.log('------------------------------------');
        console.log(`Carrera: ${carrera}`);
        console.log(`Año: ${anio}`);
        console.log(`Registro: ${registro}`);
        console.log('------------------------------------');
        console.log(`Estado: ${estado}`);
        console.log('====================================');

        rl.close();
    });
});