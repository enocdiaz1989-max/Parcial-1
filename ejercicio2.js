const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nombre del empleado: ', (nombreEmpleado) => {

    rl.question('Cantidad de productos elaborados: ', (entradaTotal) => {

        let totalProductos = parseInt(entradaTotal);

        rl.question('Cantidad de productos defectuosos: ', (entradaDefectuosos) => {

            let productosDefectuosos = parseInt(entradaDefectuosos);

            if (
                isNaN(totalProductos) ||
                isNaN(productosDefectuosos) ||
                totalProductos <= 0 ||
                productosDefectuosos < 0 ||
                productosDefectuosos > totalProductos
            ) {

                console.log('Error: Los datos ingresados no son válidos.');

            } else {

                let productosCorrectos =
                    totalProductos - productosDefectuosos;

                let porcentajeCorrectos =
                    (productosCorrectos / totalProductos) * 100;

                console.log('\n====================================');
                console.log('REPORTE DE PRODUCCIÓN');
                console.log('====================================');
                console.log(`Empleado: ${nombreEmpleado.toUpperCase()}`);
                console.log(`Productos elaborados: ${totalProductos}`);
                console.log(`Productos defectuosos: ${productosDefectuosos}`);
                console.log(`Productos correctos: ${productosCorrectos}`);
                console.log(
                    `Porcentaje correcto: ${porcentajeCorrectos.toFixed(2)}%`
                );

                if (porcentajeCorrectos >= 95) {
                    console.log('Estado: Producción aceptada');
                } else {
                    console.log('Estado: Producción requiere revisión');
                }

                console.log('====================================');
            }

            rl.close();
        });
    });
});