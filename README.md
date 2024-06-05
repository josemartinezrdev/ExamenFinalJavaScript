# Descripción

## Ejercicio 1

`const [imgUrl, setImgUrl] = useState("");`
`const [IMC, setIMC] = useState("Ingresa datos primero 😢");`
`const [valor, setValor] = useState(null);`

Usando useState cambio los estados, para ver la url, el imc y el valor del imc.

Luego tengo una funcion calcular, a la cual le paso los valores de los inputs con id peso y altura.

Luego se hace una serie de condiciones para definir en que estado se encuentra la persona y por ultimo se actualizan imgUrl, valor y IMC para que se puedan ver