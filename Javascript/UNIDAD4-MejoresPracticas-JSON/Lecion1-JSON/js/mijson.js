
var miJSON=[
{
	"codigo":"001",
	"nombre":"calculo"
},{
	"codigo":"002",
	"nombre":"fisica"
},{
	"codigo":"001",
	"nombre":"algoritmo"
}
];





function leerjson(json){
	var out="";
	var i;
	for (i = 0; i < json.length; i++) {
		alert("codigo:" +json[i].codigo+"-"+"nombre:"+json[i].nombre);
	}
}





