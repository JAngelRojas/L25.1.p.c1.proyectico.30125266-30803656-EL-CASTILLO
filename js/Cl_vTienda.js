import Cl_mDecoracion from "./Cl_mDecoracion.js";
import Cl_mJuguete from "./Cl_mJuguete.js";
import Cl_vJuguete from "./Cl_vJuguete.js";
import Cl_vDecoracion from "./Cl_vDecoracion.js";

export default class Cl_vTienda {
    constructor(app) {
        this.app = app;
        this.vista = document.getElementById("formTienda");
        this.tabla = document.getElementById("formTienda_tabla");
        this.btAgregarJuguete = document.getElementById(
            "FormTienda_btAgregarJuguete");
        this.btAgregarDecoracion = document.getElementById(
            "FormTienda_btAgregarDecoracion");

        this.lblganaciaDecoraciones = document.getElementById("formTienda_lblgananciaDecoraciones");
        this.lblgananciaJuguetes = document.getElementById("formTienda_lblgananciaJuguetes");
        this.lblincremento = document.getElementById("formTienda_lblIncremento");
        this.lblcantImportados = document.getElementById("formTienda_lblcantImportados");
        this.lblcantProductos = document.getElementById("formTienda_lblcantProductos");
        this.lblporcentajeImportados = document.getElementById("formTienda_lblporcentajeImportados");
        this.lblgananciaNac = document.getElementById("formTienda_lblgananciaNac");
        this.lbltotalVendido = document.getElementById("formTienda_lbltotalVendido");
        this.lblporcGananciaNac = document.getElementById("formTienda_lblporcGananciaNac");

        this.btAgregarJuguete.onclick = () => {
            this.ocultar();
            this.app.vJuguete.mostrar();
        };


        this.btAgregarDecoracion.onclick = () => {
            this.ocultar();
            this.app.vDecoracion.mostrar();
        };
    }

    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }

    reportarProducto(producto) {
        this.tabla.innerHTML +=
            `<tr>
                <td>${producto.codigo}</td>
                <td>${producto instanceof Cl_mJuguete ? "Juguete" : "Decoracion"}</td>
                <td>${producto.proveedor}</td>
                <td>$${producto.costo}</td>
                <td>${producto.bateria ?? "--"}</td>
                <td>${producto.color ?? "--"}</td>
                <td>$${producto.incremento() * producto.costo}</td>
                <td>$${producto.gananciaNac()}</td>
                <td>$${producto.precioVenta()}</td>
            </tr>`

        this.lblgananciaJuguetes.innerHTML = this.app.mTienda.gananciaJuguetes();
        this.lblganaciaDecoraciones.innerHTML = this.app.mTienda.gananciaDecoraciones();
        this.lblincremento.innerHTML = this.app.mTienda.incrementoObtenido();
        this.lblcantImportados.innerHTML = this.app.mTienda.cantImportados();
        this.lblcantProductos.innerHTML = this.app.mTienda.cantProductos();
        this.lblporcentajeImportados.innerHTML = this.app.mTienda.porcentajeImportados();
        this.lblgananciaNac.innerHTML = this.app.mTienda.gananciaNac();
        this.lbltotalVendido.innerHTML = this.app.mTienda.totalVendido();
        this.lblporcGananciaNac.innerHTML = this.app.mTienda.porcGananciaNac().toFixed(2);
    }
}
