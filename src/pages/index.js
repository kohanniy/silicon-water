import ShowAndHideBlock from '../components/ShowAndHideBlock.js';


//мобильное меню
const toggleMobileMenu = new ShowAndHideBlock('.header', '.toggle-menu');



// const introSlider = new Slider(introSliderSelectors);

//слайдер в intro
// const slides = document.querySelectorAll('.intro__slider-item');
// const dots = document.querySelectorAll('.intro__dot');
// const prevButton = document.querySelector('.slider__prev-button');
// const nextButton = document.querySelector('.slider__next-button');
// let slideIndex = 1;

// const showSlides = (n) => {
//   if (n > slides.length) {
//     slideIndex = 1;
//   }

//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   slides.forEach((slide) => {
//     slide.classList.add('intro__slider-item_hide');
//   });

//   dots.forEach((dot) => {
//     dot.classList.remove('intro__dot_active');
//   })

//   slides[slideIndex - 1].classList.remove('intro__slider-item_hide');
//   dots[slideIndex - 1].classList.add('intro__dot_active');
// }

// const handlePlusSlides = (n) => {
//   showSlides(slideIndex += n);
// };

// const currentSlide = (n) => {
//   showSlides(slideIndex = n);
// };


// showSlides(slideIndex);


// //слушатель на кнопку назад
// prevButton.addEventListener('click', () => {
//   handlePlusSlides(-1);
// });

// nextButton.addEventListener('click', () => {
//   handlePlusSlides(1);
// });

// for (let i = 0; i < slides.length; i += 1) {
//   dots[i].addEventListener('click', () => {
//     currentSlide(i + 1);
//   })
// }

toggleMobileMenu.enableBlockToggle();

// import './index.css';
// import '../images/avatar.jpg';

// import Card from '../components/card.js';
// import FormValidator from '../components/form-validator.js';
// import Section from '../components/section.js';
// import PopupWithImage from '../components/popup-with-image.js';
// import PopupWithForm from '../components/popup-with-form.js';
// import PopupWithFormSubmit from '../components/popup-with-form-submit.js';
// import UserInfo from '../components/user-info.js';
// import Api from '../components/api.js'
// import { defaultFormConfig, popupConfig, profileConfig, cardsConfig, mestoApiConfig } from '../utils/constants.js';

// const openEditFormButton = document.querySelector('.profile__edit-button');
// const openCardFormButton = document.querySelector('.profile__add-button');
// const openAvatarFormButton = document.querySelector('.profile__image');
// const titleInputValue = document.querySelector('.popup__input_type_name');
// const descriptionInputValue = document.querySelector('.popup__input_type_description');

// const userInfo = new UserInfo({
//   userNameSelector: profileConfig.profileTitle,
//   userDescriptionSelector: profileConfig.profileDescription,
//   userAvatarSelector: profileConfig.profileAvatar
// });

// const api = new Api(mestoApiConfig);

// let userId = null;

// const imagePopup = new PopupWithImage(popupConfig.imageModalWindow);
// imagePopup.setEventListeners();

// const cardInfoSubmit = new PopupWithFormSubmit({
//   popupSelector: popupConfig.removeCardModalWindow,
//   handleFormSubmit: () => {}
// });
// cardInfoSubmit.setEventListeners();

// const editFormValidator = new FormValidator(defaultFormConfig, popupConfig.editFormModalWindow);
// editFormValidator.enableValidation();

// const cardFormValidator = new FormValidator(defaultFormConfig, popupConfig.cardFormModalWindow);
// cardFormValidator.enableValidation();

// const avatarFormValidator = new FormValidator(defaultFormConfig, popupConfig.changeAvatarModalWindow);
// avatarFormValidator.enableValidation();


// const createCard = (cardData) => {
//   const card = new Card({
//     data: { ...cardData, currentUserId: userId },
//     handleCardClick: () => {
//       imagePopup.open(cardData);
//     },
//     handleLikeClick: (card) => {
//       api.changeLikeCardStatus(card.id(), !card.isLiked())
//         .then(data => {
//           card.setLikesInfo({ ...data });
//         })
//         .catch(err => console.log(`Ошибка изменения статуса лайка: ${err}`))
//     },
//     handleDeleteIconClick: (card) => {
//       cardInfoSubmit.setSubmitAction(() => {
//         cardInfoSubmit.renderLoading(true);
//         api.removeCard(card.id())
//           .then(() => {
//             card.removeCard();
//             cardInfoSubmit.close();
//           })
//           .catch(err => console.log(`При удалении карточки: ${err}`))
//           .finally(() => cardInfoSubmit.renderLoading(false));
//       });
//       cardInfoSubmit.open();
//     },
//   }, cardsConfig.cardSelector);

//   return card.getView();
// }

// const cardList = new Section({
//     renderer: (data) => {
//       cardList.addItem(createCard(data));
//     }
//   }, cardsConfig.placesWrap
// );

// const newCardPopup = new PopupWithForm({
//   popupSelector: popupConfig.cardFormModalWindow,
//   handleFormSubmit: (data) => {
//     newCardPopup.renderLoading(true);

//     api.addCard(data)
//       .then((cardData) => {
//         cardList.addItem(createCard(cardData));
//         newCardPopup.close();
//       })
//       .catch(err => console.log(`Ошибка добавление карточки: ${err}`))
//       .finally(() => newCardPopup.renderLoading(false));
//   }
// });
// newCardPopup.setEventListeners();

// const userInfoPopup = new PopupWithForm({
//   popupSelector: popupConfig.editFormModalWindow,
//   handleFormSubmit: (data) => {
//     userInfoPopup.renderLoading(true);
//     api.setUserInfo({
//       name: data.userName,
//       about: data.userDescription
//     })
//       .then((info) => {
//         userInfo.setUserInfo({
//           userName: info.name,
//           userDescription: info.about,
//         })
//         userInfoPopup.close();
//       })
//       .catch(err => console.log(`Ошибка при обновлении информации о пользователе: ${err}`))
//       .finally(() => userInfoPopup.renderLoading(false));
//   }
// });
// userInfoPopup.setEventListeners();

// const changeAvatarPopup = new PopupWithForm({
//   popupSelector: popupConfig.changeAvatarModalWindow,
//   handleFormSubmit: (data) => {
//     changeAvatarPopup.renderLoading(true);

//     api.setUserAvatar({
//       avatar: data.avatar
//     })
//       .then((info) => {
//         userInfo.setUserInfo({
//           userAvatar: info.avatar,
//         });
//         changeAvatarPopup.close();
//       })
//       .catch(err => console.log(`При изменении аватара пользователя: ${err}`))
//       .finally(() => changeAvatarPopup.renderLoading(false));
//   }
// });
// changeAvatarPopup.setEventListeners();

// openEditFormButton.addEventListener('click', () => {
//   const currentUserInfo = userInfo.getUserInfo();
//   titleInputValue.value = currentUserInfo.userName;
//   descriptionInputValue.value = currentUserInfo.userDescription;
//   userInfoPopup.open();
// });

// openCardFormButton.addEventListener('click', () => {
//   newCardPopup.open();
// });

// openAvatarFormButton.addEventListener('click', () => {
//   changeAvatarPopup.open();
// });

// Promise.all([api.getCardList(), api.getUserInfo()])
//   .then(([cards, userData]) => {
//     userId = userData._id;

//     userInfo.setUserInfo({
//       userName: userData.name,
//       userDescription: userData.about,
//       userAvatar: userData.avatar
//     });

//     cardList.renderItems(cards.reverse());
//   })
//   .catch(err => console.log(`Ошибка загрузки данных: ${err}`))

