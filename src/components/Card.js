export default function Card({ card, onCardClick }) {
    return (
        <div className="element__list">
            <img src={card.link} alt={card.name} className="element__image" onClick={() => {
                onCardClick({ link: card.link, name: card.name })
            }} />
            <div className="element__group">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like">
                    <button type="button" className="element__heart" />
                    <p className="element__heart-sum" />
                </div>
            </div>
            <button type="button" className="element__trash" />
        </div>
    )
}