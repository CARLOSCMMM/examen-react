function EventItem({event}) {
    const imagen = "https://www.juntadeandalucia.es" + 
    (event.image?.[0]?.thumbnail?.[0]?.image_url || "");

    return (
        <div className="evento">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.address}</p>
            <p>{event.localidad}</p>
            <p>{event.provincia}</p>
            <p>{event.coste}</p>

            {imagen && <img src={imagen} alt={event.titulo} width="200"></img>}
        </div>
    )
}

export default EventItem;
