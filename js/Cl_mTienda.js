export default class Cl_mTienda {
    constructor() {
        this.cntNacionales = 0;
        this.cntImportados = 0;
        this.cntProductos = 0;
        this.acGanancia = 0;
        this.acGananciaNac = 0;

    }
    procesarProducto(producto) {
        this.cntProductos++;
        this.acGanancia += producto.precioVenta();

        if (producto.proveedor == 1) {
            this.cntNacionales++;
            this.acGananciaNac += producto.incremento() * producto.costo;
        } else if (producto.proveedor == 2) {
            this.cntImportados++;

        }

    }
    cantImportados() {
        return this.cntImportados;
    }
    cantProductos() {
        return this.cntProductos;

    }

    porcentajeImportados() {
        return (this.cntImportados / this.cntProductos) * 100;
    }

    gananciaNac() {
        return this.acGananciaNac;
    }
    totalVendido() {
        return this.acGanancia;
    }
    porcGananciaNac() {
        return (this.acGananciaNac / this.acGanancia) * 100;
    }
}