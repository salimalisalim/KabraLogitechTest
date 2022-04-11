import "./AlertMessage.css"

const AlertMessage = ({ message, variant, show }) => {
    return (
        <>
            <div id="alertMessage" style={{ display: show }} className={`alert ${variant} text-center`}>
                <strong>{message}</strong>
            </div>

        </>
    )
}

export default AlertMessage