import Cl_mJuguete from "./Cl_mJuguete.js";
export default class Cl_mTienda {
    constructor() {
        this.cntNacionales = 0;
        this.cntImportados = 0;
        this.cntProductos = 0;
        this.acGanancia = 0;
        this.acGananciaNac = 0;
        this.acIncremento = 0;
        this.acGananciaJuguetes = 0;
        this.acGananciaDecoraciones = 0;

    }
    procesarProducto(producto) {
        this.cntProductos++;
        this.acGanancia += producto.precioVenta();
        this.acIncremento += producto.incremento();
        
        if (producto instanceof Cl_mJuguete) {
            this.acGananciaJuguetes += producto.precioVenta();
        } else {
            this.acGananciaDecoraciones += producto.precioVenta();
        }
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

    gananciaJuguetes(){
        return this.acGananciaJuguetes;
    }
    gananciaDecoraciones(){
        return this.acGananciaDecoraciones;
    }

    incrementoObtenido(){
        return this.acIncremento;
    }
}