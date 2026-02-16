import { useState } from "react";

function EventForm() {
    const [form, setForm] = useState({
        titulo: "",
        descripcion: "",
        location: "",
        cost: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.titulo || !form.location || !form.cost) {
            setError("los campos tittle, location y cost son obligaorios");
            return;
        }

        setError("");

        fetch("http://localhost:3000/eventos", {
            method: "POST",
            headers: { "content-type" : "application/json"},
            body: JSON.stringify(form)
        })
        .then(() => {
            alert("Evento añadido correctamente");
            setForm({
                titulo: "",
                descripcion: "",
                location: "",
                cost: ""
            });
        })
        .catch(() => {
            setError("error al guardar el evento");
        })
    }

    return(
        <div>
            <h2>Añadir evento</h2>
            {error && <p style={{color: "red"}}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input type="text" name="titulo" placeholder="titulo" value={form.titulo} onChange={handleChange}/>
                <textarea name="descripcion" placeholder="descipcion" value={form.descripcion} onChange={handleChange}></textarea>
                <input type="text" name="location" value={form.location} placeholder="location" onChange={handleChange}/>
                <input type="text" name="cost" placeholder="coste" value={form.cost} onChange={handleChange}/>

                <button type="submit">añadir evento</button>
            </form>
        </div>
    )
}

export default EventForm;