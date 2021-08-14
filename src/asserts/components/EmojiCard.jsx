import "./emojiCard.css"

export default function EmojiCard({symbol, title, info}) {
    return (
        <div className="emoji-card">
            <h2 className="emoji-card-title">{title}</h2>
            <h3 className="emoji-card-symbol">{symbol}</h3>
            <p className="emoji-card-info">{info}</p>
        </div>
    )
}
