fetch('http://localhost:3001/ciudades')
    .then(res => res.json())
    .then(data=>{
        let _ciudades='';
        for (const itm in data.cidades) {
            var ciudad=data.cidades[itm];
            _ciudades+=`<li>${ciudad}</li>`;
        }
        document.getElementById('lista').innerHTML=_ciudades;
    })