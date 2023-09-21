const productos = [
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 1,
		marca: "Redragon",
		nombre: "Teclado gamer Shiva K512",
		precio: 6500,
		subcategoria: "Perifericos",
		ubicacion: "GBA",
	},
	{
		categoria: "Computacion",
		condicion: "Usado",
		cuotas: false,
		envioInmediato: false,
		envioGratuito: false,
		id: 2,
		marca: "Asus",
		nombre: "Mother M2n68-am",
		precio: 7000,
		subcategoria: "Componentes",
		ubicacion: "Capital Federal",
	},
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: true,
		envioInmediato: true,
		envioGratuito: true,
		id: 3,
		marca: "Kingston",
		nombre: "Memoria RAM Fury Beast 8GB",
		precio: 8500,
		subcategoria: "Componentes",
		ubicacion: "Cordoba",
	},
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 4,
		marca: "Logitech",
		nombre: "Auriculares gamer inalámbricos G733",
		precio: 29000,
		subcategoria: "Perifericos",
		ubicacion: "GBA",
	},
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: true,
		envioInmediato: false,
		envioGratuito: true,
		id: 5,
		marca: "Redragon",
		nombre: "Auriculares gamer Zeus X",
		precio: 13000,
		subcategoria: "Perifericos",
		ubicacion: "Ushuaia",
	},
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: true,
		envioInmediato: false,
		envioGratuito: true,
		id: 5,
		marca: "Redragon",
		nombre: "Auriculares gamer Zeus X",
		precio: 13000,
		subcategoria: "Perifericos",
		ubicacion: "Ushuaia",
	},
	{
		categoria: "Celulares",
		condicion: "Nuevo",
		cuotas: true,
		envioInmediato: true,
		envioGratuito: true,
		id: 6,
		marca: "Motorola",
		nombre: "Motorola Edge 30 128 GB",
		precio: 90000,
		subcategoria: "Equipos",
		ubicacion: "Capital Federal",
	},
	{
		categoria: "Celulares",
		condicion: "Usado",
		cuotas: false,
		envioInmediato: false,
		envioGratuito: false,
		id: 7,
		marca: "Nokia",
		nombre: "Nokia 1100",
		precio: 1500,
		subcategoria: "Equipos",
		ubicacion: "GBA",
	},
	{
		categoria: "Celulares",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 8,
		marca: "Samsung",
		nombre: "Samsung Galaxy A51 128GB",
		precio: 70000,
		subcategoria: "Equipos",
		ubicacion: "GBA",
	},
	{
		categoria: "Celulares",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 9,
		marca: "Samsung",
		nombre: "Samsung Galaxy A12 64GB",
		precio: 4000,
		subcategoria: "Equipos",
		ubicacion: "Capital Federal",
	},
	{
		categoria: "Celulares",
		condicion: "Usado",
		cuotas: false,
		envioInmediato: false,
		envioGratuito: false,
		id: 10,
		marca: "Motorola",
		nombre: "Cargador Motorola",
		precio: 6000,
		subcategoria: "Cargadores",
		ubicacion: "Bariloche",
	},
];

// 1. Imprimir en consola todos los productos que tengan envío inmediato. 
//El mensaje tiene que ser user Friendly, es decir, que el usuario
//entienda que es lo que se está mostrando en consola.

const productosConEnvioInmediato = productos.filter((productos)=>{
    return productos.envioInmediato
})

productosConEnvioInmediato.forEach((producto)=>{
    console.log(`El producto ${producto.nombre} tiene envio inmediato`);
})

console.log(productosConEnvioInmediato);

//2.Crear un nuevo array con los mismos productos pero con su precio
//duplicado. Imprimir en consola el nombre y precio de cada producto.

const productosConPrecioDuplicado = productos.map((producto)=>{
    return {...producto, precio: producto.precio*2}
})

productosConPrecioDuplicado.forEach((producto)=>{
    console.log(`El nuevo precio de ${producto.nombre} es ${producto.precio}`);
})

// 3.imprimir en consola si existe algun producto cuyo precio sea mayor a 
//un precio dado. El mensaje tiene que ser user Friendly, es decir, que 
//el usuario entienda que es lo que se está mostrando en consola.

const hayProductosConPrecioMayorA = ()=>{
    return productos.some((producto)=>{
        return producto.precio > precio;
    })? console.log(`Hay productos con precio mayor a $${precio}`) : console.log(`No hay productos mayores a $${precio}`);;
}

hayProductosConPrecioMayorA(2000);

//4. Filtar productos por precio

const filtrarPorPrecioMenorA = (precio) =>{
    const productosFiltrados = producto.filter(()=>{
        return productos.precio < precio
    })
    return productosFiltrados
}

console.log(filtrarPorPrecioMenorA(6000));

const filtrarPorPrecioMayorA= (precio) =>{
    const productosFiltrados = producto.filter(()=>{
        return productos.precio > precio
    })
    return productosFiltrados
}

console.log(filtrarPorPrecioMayorA(20000));

//6. Filtrar entre precios

const filtrarPorPrecioEntre = (precioMin, precioMax)=>{
    const productosFiltrados = productos.filter((productos)=>{
        return productos.precio > precioMin && productos.precio < precioMax;
    })
}

console.log(filtrarPorPrecioEntre(2000, 9000));


// 7. Cambiar la condición de todos los productos a "usado".

// 8. Imprimir en consola el nombre y precio de todos los productos que 
//tengan envío inmediato y envío gratuito. El mensaje tiene que ser user 
//Friendly, es decir, que el usuario entienda que es lo que se está 
//mostrando en consola.

//9. Filtrar productos por categoria y subcategoria . Traer solo los 
//productos de la categoria Celulares y de la subcategoria Equipos.

// 10. Ordenar productos por precio de mayor a menor.

//11. Ordenar productos por nombre de la A a la Z.