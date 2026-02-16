import { useEffect, useState } from "react";
import EventItem from "./EventItem";

function EventList() {
    const [eventos, setEventos] = useState([]);
    const [pagina, setPagina] = useState(1);
    const eventosPorPagina = 100;

    useEffect(() => {
        fetch("http://localhost:3000/eventos")
        .then(res => res.json())
        .then(data => setEventos(data))
        .catch(err => console.error("error cargando eventos:", err))
    }, []);

   /*  const totalPaginas = Math.ceil(eventos.length / eventosPorPagina);
    const inicio = (pagina -1) * eventosPorPagina;
    const eventosPagina = eventos.slice(inicio, inicio + eventosPorPagina);
 */
    return (
        <div>
            <h2>Listado de eventos</h2>
            <div style={{ marginBottom: "20px" }}>
          {/*   {Array.from({ length: totalPaginas }, (_, i) => (
            <button key={i} onClick={() => setPagina(i + 1)}
                style={{
                margin: "5px",
                background: pagina === i + 1 ? "lightblue" : "white"
                }}
            >
                {i + 1}
            </button>
            ))} */}
            </div>

            {eventos.map(event => (
                <EventItem key={event.id} event={event}></EventItem>
            ))}
        </div>
    )
}

export default EventList;