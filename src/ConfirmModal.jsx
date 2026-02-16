function ConfirmModal({message, onConfirm, onCancel}) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{message}</p>
                <button className="confirm-button" onClick={onConfirm}>Aceptar</button>
                <button className="cancel-button" onClick={onCancel}>Cancelar</button>
            </div>
        </div>
    )
}

export default ConfirmModal;