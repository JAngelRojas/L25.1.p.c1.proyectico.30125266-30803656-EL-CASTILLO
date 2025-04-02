import Cl_mProducto from "./Cl_mProducto.js";
export default class Cl_mJuguete extends Cl_mProducto {
    constructor({ codigo, proveedor, costo, bateria }) {
        super(codigo, proveedor, costo);
        this.bateria = bateria;
    }
    set bateria(bateria) {
        this._bateria = bateria.toUpperCase() === "SI";

    }

    get bateria() {
        return this._bateria;
    }

    incremento() {
        if (this.bateria) {
            return 0.5;
        } else {
            return 0.3;
        }
    }

    gananciaNac() {
        if (this.proveedor == 1) 
            return this.costo * this.incremento();
        else
            return super.gananciaNac();
    }
}
