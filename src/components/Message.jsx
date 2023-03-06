const Message = ({from, message}) => {
    return (
        <div className={from == "BOT" ? "left" : "right"}>
            <div className={`Message ${from == "BOT" ? "MessageBot" : "MessageYou"}`}>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message;