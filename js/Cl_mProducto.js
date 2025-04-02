export default class Cl_mProducto {
    constructor(codigo,proveedor,costo){
        this.codigo=codigo;
        this.proveedor=proveedor;
        this.costo=costo;

    }

    set codigo(codigo){
        this._codigo= codigo;
    }
    get codigo(){
        return this._codigo;
    }
    set proveedor(proveedor){
        this._proveedor= proveedor;
    }
    get proveedor(){
        return this._proveedor;
    }
    set costo(costo){
        this._costo= +costo;
    }
    get costo(){
        return this._costo;
    }
  

gananciaNac(){
    return 0;
}

    incremento(){
        return 0;
    }

    precioVenta(){
        return this.costo + (this.costo * this.incremento());
    }
}



