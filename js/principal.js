/*EL CASTILLO 
Castillo Real C.A. es una tienda que maneja para todos sus productos un código, el proveedor 
(1=nacional, 2=importado) y un costo base. Básicamente dispone de 2 líneas: 1=juguetes y 
2=decoración. Para efectos de cálculo del precio de venta, en el caso de los juguetes se 
considera si es a batería y se le incrementa un 50% al costo base, y un 30% en otro caso; para 
la decoración, cuando se trata de productos importados de color rojo el incremento es de un 
60% (sólo venden 3 colores: 1=verde, 2=rojo, 3=azul), siendo un 40% de incremento para el 
resto de los casos. Por cada producto que se registre en la tienda se desea determinar su PVP, y 
para la tienda se requiere calcular el porcentaje de productos importados que dispone y la 
ganancia que representa la venta de productos nacionales del total vendido. 
DATOS DE PRUEBA 
EL CASTILLO
 Juguete
 codigo proveedor costo bateria incremento() gananciaNac() precioVenta()
 11
 77
 55
 1
 1
 $10,00
 $20,00
 NO
 $3,00
 $3,00
 SI
 1
 66
 Total
 2
 Decoracion
 $25,00
 $15,00
 SI
 NO
 $10,00
 $12,50
 $4,50
 $30,00
 $10,00
 $12,50
 $0,00
 $25,50
 $13,00
 $30,00
 $37,50
 $19,50
 $100,00
 suma naciona
 codigo proveedor costo color incremento() gananciaNac() precioVenta()
 22
 44
 33
 2
 1
 $30,00
 $20,00
 3
 $12,00
 $0,00
 2
 1
 88
 Total
 2
 $15,00
 $25,00
 2
 1
 $8,00
 $6,00
 $10,00
 Cantidad importados (proveedor=2):
 Cantidad productos:
 Porcentaje de importados:
 Ganancia nacional (proveedor=1):
 Total vendido:
 Porcentaje de ganancia nacional del total vendido:
 $8,00
 $6,00
 $0,00
 $14,00
 3
 8
 38%
 $39,50
 $226,00
 17,48%
 $42,00
 $28,00
 $21,00
 $35,00
 $126,00*/
import Cl_vTienda from "./Cl_vTienda.js";
import Cl_vDecoracion from "./Cl_vDecoracion.js";
import Cl_vJuguete from "./Cl_vJuguete.js";
import Cl_mTienda from "./Cl_mTienda.js";

export default class Cl_principal {
    constructor() {
        this.app = {}
        this.app.mTienda = new Cl_mTienda();
        this.app.vTienda = new Cl_vTienda(this.app);
        this.app.vDecoracion = new Cl_vDecoracion(this.app);
        this.app.vJuguete = new Cl_vJuguete(this.app);
    }
}
