const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const COSTO_HORA = 2.25;

rl.question('Nombre del estudiante: ', (nombreEstudiante) => {

    rl.question('Nombre del equipo: ', (nombreEquipo) => {

        rl.question('Cantidad de horas solicitadas: ', (entradaHoras) => {

            let horasSolicitadas = parseFloat(entradaHoras);

            if (isNaN(horasSolicitadas) || horasSolicitadas <= 0) {

                console.log('Error: Debe ingresar una cantidad válida de horas.');

            } else {

                let costoTotal = horasSolicitadas * COSTO_HORA;

                let fechaHoraActual = new Date();

                let fechaActual =
                    fechaHoraActual.toLocaleDateString('es-SV');

                let horaActual =
                    fechaHoraActual.toLocaleTimeString('es-SV');

                let hora = fechaHoraActual.getHours();

                console.log('\n====================================');
                console.log('REGISTRO DE PRÉSTAMO');
                console.log('====================================');
                console.log(`Estudiante: ${nombreEstudiante}`);
                console.log(`Equipo: ${nombreEquipo.toUpperCase()}`);
                console.log(`Horas solicitadas: ${horasSolicitadas}`);
                console.log(`Fecha actual: ${fechaActual}`);
                console.log(`Hora actual: ${horaActual}`);

                if (hora < 12) {
                    console.log('Préstamo registrado en jornada de mañana');
                } else {
                    console.log('Préstamo registrado en jornada de tarde');
                }

                console.log(`Costo total: $${costoTotal.toFixed(2)}`);
                console.log('====================================');
            }

            rl.close();
        });
    });
});