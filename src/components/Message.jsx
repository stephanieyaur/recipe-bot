const Message = ({from, message, link}) => {

    const formatMessage = () => {
        if (message.includes("\n")){
            var list = message.split(/\r?\n/);
            return (
                <ul>
                    {list.map((item) => (
                        <li>{item}</li>)
                    )}
                </ul>
            )
        } else if (link != ""){
            return (
                <p>{message} <a href={link}>{link}</a></p>
            )
        }
        else {
            return (
                <p>{message}</p>
            )
        }
    }

    return (
        <div className={from == "BOT" ? "left" : "right"}>
            <div className={`Message ${from == "BOT" ? "MessageBot" : "MessageYou"}`}>
                {formatMessage()}
            </div>
        </div>
    )
}

export default Message;