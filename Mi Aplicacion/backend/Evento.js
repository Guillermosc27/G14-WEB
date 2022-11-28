class Evento{

    constructor(artista, aforo, costo){
        this.artista = artista;
        this.aforo = aforo;
        this.costo = costo;
        this.ciudad = "Bogotá";
    }

    iniciarEvento(asistentes){
        if(asistentes > this.aforo){
            console.log("El evento está saturado.");
        } else{
            const ganancia = this.costo * asistentes;
            console.log("La ganancia total fue de: "+ganancia)
        }
    }
}

export default Evento;