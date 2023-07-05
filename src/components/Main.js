import { useEffect, useState } from "react"
import api from "../utils/api"
import Card from "./Card"

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getInitialCards(), api.getUserInfo()])
            /** обрабатываем результат*/
            .then(([dataCards, dataProfile]) => {
                setUserName(dataProfile.name)
                setUserDescription(dataProfile.about)
                setUserAvatar(dataProfile.avatar)
                dataCards.forEach(element => {
                    element.myid = dataProfile._id
                });
                setCards(dataCards)
            });
    })

    return (
        <main className="content">
            <section className="profile">
                <button type="button" className="profile__icon" onClick={onEditAvatar}>
                    <img src={userAvatar} alt="Аватар" className="profile__avatar" />
                </button>
                <div className="profile__info">
                    <div className="profile__editing">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button" onClick={onEditProfile} />
                    </div>
                    <p className="profile__activity">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace} />
            </section>
            <ul className="elements" >
                {cards.map(element => {
                    return (
                        <li className="element" key={element._id}>
                            <Card card={element} onCardClick={onCardClick} />
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}