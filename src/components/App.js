import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from "react";
function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  }

  return (
    <div className="page__content">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title='Редактировать профиль'
        name={'popup-edit'}
        textButton='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="name"
          placeholder="Введите имя"
          name="userName"
          className="form__item form__item_el_name"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span className="form__item-error" id="name-error" />
        <input
          type="text"
          id="activity"
          placeholder="Расскажите о себе"
          name="activity"
          className="form__item form__item_el_activity"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="form__item-error" id="activity-error" />
      </PopupWithForm>
      <PopupWithForm
        title='Новое место'
        name={'popup-add'}
        textButton='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="title"
          placeholder="Название"
          name="title"
          className="form__item form__item_el_title"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="form__item-error" id="title-error" />
        <input
          type="url"
          id="link"
          placeholder="Ссылка на картинку"
          name="link"
          className="form__item form__item_el_link"
          required=""
        />
        <span className="form__item-error" id="link-error" />
      </PopupWithForm>
      <PopupWithForm
        title='Обновить аватар'
        name={'popup-avatar'}
        textButton='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          id="avatar"
          placeholder="Ссылка на картинку"
          name="avatar"
          className="form__item form__item_el_avatar-link"
          required=""
        />
        <span className="form__item-error" id="avatar-error" />
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}
export default App;