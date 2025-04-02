import Cl_mProducto from "./Cl_mProducto.js";

export default class Cl_mDecoracion extends Cl_mProducto{
    constructor({codigo,proveedor,costo,color}){
        super(codigo,proveedor,costo,2);
        this.color=color;
    }

    set color(color){
        this._color=color;
    }

    get color(){
        return this._color;
    }

    incremento(){
        if(this.proveedor==2 && this.color==2){
            return 0.6;
        }else{
            return 0.4;
        }
    }

    gananciaNac(){
        if (this.proveedor == 1)
        return this.costo * this.incremento();
        else
        return super.gananciaNac();
    }
}