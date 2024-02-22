class ArgumentUndefinedError {
    constructor(message){
        this.message=message;
    }
}

class TypeArgumentError {
    constructor(message){
        this.message=message;
    }
}

function suma(s1,s2){
    if (s1===undefined || s2===undefined){
        throw new ArgumentUndefinedError("Los argumentos no pueden ser undefined");
    } 
    if (typeof s2 != 'number'){
        throw new TypeArgumentError("El tipo de los argumentos debe ser number");
    }
    return s1+s2;
}

try {
    //let resultado = suma(1,2);//
    let resultado = suma(5,'3');
    console.log(resultado);
} catch (e) {
    if (e instanceof ArgumentUndefinedError){
        console.log("Error tipo undefined:" + e.message);
    } else if (e instanceof TypeArgumentError){
        console.log("Error tipo type:" + e.message);
    } else {
        console.error("Error desconocido:" + e.message);
    }  
} 

/*
Hacer una función que guarde en un fichero la dirección de email
y la constraseña de un usuario. Si la dirección de email no contiene @ 
lanzamos excepción; si el tamaño de la contraseña es <6, lanzamos error.
El nombre del fichero será el texto anterior a la @ de la dirección email
con la extesión user.
*/