llamadaDemo();

/*llamada*/
function llamadaDemo() {
    //alert("Hola con JavaScript");
    /*Creating an HTML table dynamically
   https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#creating_an_html_table_dynamically*/
    //uso de Fetch https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
   
        var url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var divPeli = document.getElementById('divPeli');
            divPeli.innerHTML = '';
            
            if (data.length > 0) {
                //alert(data.status );
                for (let index = 0; index < data.length; index++) {

                    const div = document.createElement("div");
                    div.className = "col-md-6";

                    const div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                    /*Info Peli*/
                    const div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";
                    
                    const type = document.createElement("strong");
                    type.className = "d-inline-block mb-2 text-primary";
                    type.innerText = data[index].Type;

                    const title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerText = data[index].Title;

                    const anio = document.createElement("div");
                    anio.className = "mb-1 text-body-secondary";
                    anio.innerText = data[index].Year;
                    
                    const description = document.createElement("p");
                    description.className = "card-text mb-auto";
                    description.innerText = data[index].description.substring(0,150) + " ...";

                    const ubitacion = document.createElement("a");
                    ubitacion.className = "stretched-link";
                    ubitacion.innerText = data[index].Ubication;

                    
                    div3.appendChild(type);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(description);
                    div3.appendChild(ubitacion);

                    const div4 = document.createElement("div");
                    div4.className = "col-auto d-none d-lg-block";
                    div4.innerHTML = "<img alt=\"Tren bala\" src=\"" + data[index].Poster + "\" width=\"200\" height=\"250\">";

                    div2.appendChild(div3);
                    div2.appendChild(div4);
                    div.appendChild(div2);
                    divPeli.appendChild(div);
                }
            }

        });

}

function Llamada1(){
    //alert ("Llamada1");
    var txtPeli = document.getElementById('txtPeli');
    var cmbUbicacion = document.getElementById('cmbUbicacion');
    //alert(txtPeli.value);
    //alert(cmbUbicacion.value);
    var url = "";
    if (txtPeli != null && cmbUbicacion != null){
        var url = "https://movie.azurewebsites.net/api/cartelera?title="+txtPeli.value+"&ubication="+(cmbUbicacion.value == "Mostrar todos" ? "" : cmbUbicacion.value);
    }
    else {
        var url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var divPeli = document.getElementById('divPeli');
            divPeli.innerHTML = '';
            
            if (data.length > 0) {
                //alert(data.status );
                for (let index = 0; index < data.length; index++) {

                    const div = document.createElement("div");
                    div.className = "col-md-6";

                    const div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                    /*Info Peli*/
                    const div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";
                    
                    const type = document.createElement("strong");
                    type.className = "d-inline-block mb-2 text-primary";
                    type.innerText = data[index].Type;

                    const title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerText = data[index].Title;

                    const anio = document.createElement("div");
                    anio.className = "mb-1 text-body-secondary";
                    anio.innerText = data[index].Year;
                    
                    const description = document.createElement("p");
                    description.className = "card-text mb-auto";
                    description.innerText = data[index].description.substring(0,150) + " ...";

                    const ubitacion = document.createElement("a");
                    ubitacion.className = "stretched-link";
                    ubitacion.innerText = data[index].Ubication;

                    
                    div3.appendChild(type);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(description);
                    div3.appendChild(ubitacion);

                    const div4 = document.createElement("div");
                    div4.className = "col-auto d-none d-lg-block";
                    div4.innerHTML = "<img alt=\"Tren bala\" src=\"" + data[index].Poster + "\" width=\"200\" height=\"250\">";

                    div2.appendChild(div3);
                    div2.appendChild(div4);
                    div.appendChild(div2);
                    divPeli.appendChild(div);
                }
            }

        });

}

function Llamada2(){
    var id = document.getElementById("id");
    var titulo = document.getElementById("title");
    var year = document.getElementById("year");
    var types = document.getElementById("type");
    var poster = document.getElementById("poster");
    var description = document.getElementById("description");
    var ubicacion = document.getElementById("ubication");
    var estado = document.getElementById("estado");
    
    const Create = {
        imdbID: id.value,
        Title: titulo.value,
        Year: year.value,
        Type: types.value,
        Poster:poster.value,
        description: description.value,
        Ubication:ubicacion.value,
        Estado:Number(estado.value) ,
        };
        
        const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(Create),
        };

        fetch('https://movie.azurewebsites.net/api/cartelera', options)
        .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(Create => {
      alert(Create);
     
      }).catch(e => {
      console.log(e);
      });
      document.querySelector('#modalArticulo').reset();
}

function Llamada3(e){
    var idpeli = document.getElementById("idPeli");

    idpeli.disabled=true;
    url = "https://movie.azurewebsites.net/api/cartelera?imdbID="+idpeli.value+"";
    var options = {
        method: 'DELETE'
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data=>{

            alert("Codigo http: "+data.codError +" Mensaje: "+ data.msgRespuesta);
            llamadaDemo();
        })
        .catch(error => {
            console.error('Error de red',error);
        });
    
        idpeli.disabled=false;
}
