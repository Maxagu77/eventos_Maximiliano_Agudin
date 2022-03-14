console.log("Aplicando DOM");



class articulo {
    constructor (producto, ventas, compras, stock){
       this.producto = producto
       this.ventas = parseInt(ventas)
       this.compras = parseInt(compras)
       this.stock = parseInt(stock) + compras - ventas
      
    }
  }
 const productos = ["lapices ",  "marcadores ", "carpetas ",  "cuadernos "]
 const detalle = []

let stock = 0


   for (const producto of productos) {
     let ventas = prompt(`cuantos ${producto} se vendieron? `);
     let compras = prompt(`cuantos ${producto} se compraron? `);

     if (ventas <= compras) {

     detalle.push(new articulo(producto, ventas, compras, stock)) 
     }

     else{ 
       alert("Las ventas no pueden superar la cantidad de mercaderia comprada")
     }
  }  
  
   console.log(detalle);
   
   const elementos = [{id: 1, prod: "lapices" , precioCompra: 25, precioVenta: 50, },
                     {id: 2, prod: "marcadores" , precioCompra: 38, precioVenta: 76},
                     {id: 3, prod: "carpetas" , precioCompra: 130, precioVenta: 260},
                     {id: 4, prod: "cuadernos" , precioCompra: 250, precioVenta: 500,}]

    
       const listaProd = document.getElementById("listaProd") 

       elementos.forEach(e => { 
          
          console.log(e.prod); 
          console.log("ganancia por unidad vendida: " + diferenciaPrecio(e.precioCompra, e.precioVenta));

          
          // Creo Lista de productos a partir del DOM
          
          const listaElementos = document.createElement("li")
          listaElementos.innerText = e.prod
          listaProd.append(listaElementos)
       });              
   
       function diferenciaPrecio (precioCompra, precioVenta){
        return precioVenta - precioCompra
       }
    
       const llamarProducto = elementos.find ( e => e.id == 2 )
             console.log("busqueda de producto", llamarProducto);

       const buscarProductos = elementos.filter (e => e.precioVenta > 100)
            console.log('busqueda de los articulos cuyo valor de venta sea mayor a $100: ', buscarProductos);


          // Codigo HTML cambio de Titulo por DOM

      const titulo = document.getElementById('titulo')
       console.log(titulo.innerText); 
       titulo.innerText = 'Base de datos de una Libreria'

       // Evetos, se agregan elementos en la lista de productos

        const boton = document.getElementById("boton")

        boton.onclick = () => {
        const entrada = document.getElementById("entrada")
        const ingreseProducto = entrada.value

        const listaElementos = document.createElement("li")
        listaElementos.innerText = ingreseProducto
        listaProd.append(listaElementos)
       }           


       

      

       

       


      

      


