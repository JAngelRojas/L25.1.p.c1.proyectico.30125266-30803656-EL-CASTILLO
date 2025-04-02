import Cl_mJuguete from "./Cl_mJuguete.js";
export default class Cl_vJuguete {
    constructor(app){
        this.app = app;
        this.vista = document.getElementById("jugueteForm");
        this.vista.hidden = true;

        //entradas de la clase derivadas//
        this.inCodigo = document.getElementById("jugueteForm_inCodigo");
        this.inProveedor = document.getElementById("jugueteForm_inProveedor");
        this.inCosto = document.getElementById("jugueteForm_inCosto");
        this.inBateria = document.getElementById("jugueteForm_inBateria");
        this.btAceptar = document.getElementById("jugueteForm_btAceptar");
        this.btAceptar.onclick = () => this.agregarMenor();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }

    agregarMenor() {
        let juguete = new Cl_mJuguete({
            codigo: this.inCodigo.value,
            proveedor: this.inProveedor.value,
            costo: +this.inCosto.value,
            bateria: this.inBateria.value
        });
        this.app.mTienda.procesarProducto(juguete);
        this.app.vTienda.reportarProducto(juguete);
        this.ocultar();
        this.app.vTienda.mostrar();
    }
}