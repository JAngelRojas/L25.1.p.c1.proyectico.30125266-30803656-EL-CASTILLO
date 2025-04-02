import Cl_mDecoracion from "./Cl_mDecoracion.js";
export default class Cl_vDecoracion {
    constructor(app) {
        this.app = app;
        this.vista= document.getElementById("decoracionForm");
        this.vista.hidden = true;
        
        
        this.inCodigo = document.getElementById("decoracionForm_inCodigo");
        this.inProveedor = document.getElementById("decoracionForm_inProveedor");
        this.inCosto = document.getElementById("decoracionForm_inCosto");
        this.inColor = document.getElementById("decoracionForm_inColor");
        this.btAceptar = document.getElementById("decoracionForm_btAceptar");
        this.btAceptar.onclick = () => this.agregarMenor();

    }
    mostrar(){
        this.vista.hidden = false;
    }
    ocultar(){
        this.vista.hidden = true;
    }

    agregarMenor() {
        let decoracion = new Cl_mDecoracion({
            codigo: this.inCodigo.value,
            proveedor: this.inProveedor.value,
            costo: +this.inCosto.value,
            color: this.inColor.value
        });
        this.app.mTienda.procesarProducto(decoracion);
        this.app.vTienda.reportarProducto(decoracion);
        this.ocultar();
        this.app.vTienda.mostrar();

    }
}