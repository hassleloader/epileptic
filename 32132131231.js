function applyCss() {
  const style = document.createElement('style');
  style.textContent = `
  #app .window .window__buttons .controls-button__container_disabled {
    pointer-events: none
}

#app .jsl-select {
    width: 36.48vh
}

#app .jsl-select__value {
    overflow: visible
}

#app .vignette,
#app .window .modal__pattern-wrapper {
    display: none
}

:root {
    --bg: #000;
    --bg-20: #00000033;
    --bg-40: #00000066;
    --bg-50: #00000080;
    --bg-60: #00000099;
    --bg-80: #000000cc;
    --color: #fff;
    --color-10: #ffffff1a;
    --color-30: #ffffff4d;
    --font-famaly-all: GothamPro, "Open Sans"
}

#app .radmir-chat-input__input input {
    color: #fff !important
}

#app .radmir-chat-input__input-lang {
    padding: 0 .463vh .3704vh;
    color: #fff !important;
    border-left: .18vh solid #cdcdcd
}

#app .radmir-chat:before {
    width: 70vw !important;
    background: linear-gradient(148deg, #141414d1 10%, #14141400 50%) !important
}

#app .radmir-chat-input__input {
    border-radius: .8333vh;
    background-color: #000;
    border: .18vh solid #cdcdcd;
    padding: 0 .93vh !important
}

#app .radmir-chat_inactive {
    opacity: 1 !important
}
#app .window .modal-container-wrapper {
    background: 0 0;
    background: linear-gradient(212.45deg, #0e1434e6 -24.84%, #7d1b1de6 130.15%);
    border-radius: 1.85vh;
    border: none;
    padding: 2.22vh;
    box-shadow: none;
    transform: scale(.8)
}

#app .window .modal-container {
    border: none;
    padding: 0;
    border-radius: 0
}

#app .window .modal__title {
    font-weight: 600;
    font-size: 2.22vh;
    line-height: 3.33vh;
    font-style: normal;
    color: var(--color);
    text-transform: none;
    font-family: 'GothamPro Medium', sans-serif
}

#app .window .window__subtitle {
    margin: 0 2.96vh
}

#app .window .scrollable-container__container {
    mask-image: none !important
}

#app .window .window__content-container {
    min-width: 45vh
}

#app .window .window-table__item {
    background: #35121fcc;
    border: 0 !important;
    border-radius: .46vh;
    margin-top: .93vh;
    height: 5vh;
    color: var(--color);
    box-shadow: none
}

#app .window .window-table__item:hover {
    background: #4c1a2dcc
}

#app .window .window-table__item.selected {
    background: #ffb200 !important;
    color: #351321 !important
}

#app .window .window-table__col {
    justify-content: center;
    padding: 0 .96vh
}

#app .window .window-table__item.selected p {
    color: #351321 !important
}

#app .window .window__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1.2)
}

#app .window .window__buttons .controls-button__container {
    position: relative
}

#app .window .window__buttons .controls-button {
    position: absolute;
    width: 100%
}

#app .login-head-icon,
#app .registration-personalization-switcher__text,
#app .window .window__buttons .controls-button-shadow {
    display: none
}

#app .window .window__buttons .controls-button--text,
#app .window .window__buttons .controls-button-background,
#app .window .window__buttons .controls-button-icon {
    opacity: 0 !important
}


#app .window .window__buttons .controls-button__container:hover .controls-button__container-text {
    opacity: 1;
    box-shadow: none
}

#app .window .window__buttons .controls-button__container_disabled .controls-button__container-text {
    opacity: .25
}

#app .window .input-field {
    background: #471a2bcc;
    box-shadow: 1.39vh 1.39vh 1.85vh #0003;
    border-radius: .93vh;
    border: none
}

#app .window .input-field_hoverable:hover {
    background-color: #471a2b93
}

#app .window .input-field_focused,
#app .window .input-field_hoverable:hover.input-field_focused {
    background: #61233b
}

#app .window .input-field input,
#app .window .input-field__placeholder {
    font-weight: 500;
    font-family: 'GothamPro Medium', sans-serif
}

#app .window .input-field_focused .input-field__placeholder,
#app .window .input-field_focused input,
#app .window .input-field_hoverable:hover.input-field_focuse .input-field__placeholder,
#app .window .input-field_hoverable:hover.input-field_focuse input {
    color: #fff
}

#app .authorization {
    background: 0 0
}

#app .authorization__gradient {
    background: linear-gradient(69.28deg, #1414148f 26.1%, #14141400 94.95%)
}

#app .login-auth:before,
#app .login-code:before,
#app .registration:before {
    content: "";
    background-image:url(${assets.other.bgState1});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1
}

#app .registration:before {
    background-image:url(${assets.other.bgState2})
}

#app .login-head__subtitle {
    color: transparent;
    opacity: 1
}

#app .login-auth .login-head__subtitle:before {
    content: "С ВОЗВРАЩЕНИЕМ НА HASSLE";
    display: block;
    width: 60vh;
    font-size: 5.74vh;
    font-weight: 900;
    line-height: 100%;
    color: #fff;
    position: relative;
    padding-bottom: 4.48vh;
    font-style: normal;
    font-family: 'GothamPro Black', sans-serif
}

#app .login-auth .login-head__subtitle:after {
    content: "";
    width: 9.72vh;
    height: .93vh;
    border-radius: .74vh;
    background: #fff;
    display: block
}

#app .authorization-field,
#app .login-head__username {
    height: 4.63vh;
    box-sizing: border-box;
    border: .19vh solid #ffffff91;
    border-radius: .74vh;
    color: #ffffffd6;
    font-size: 1.3vh;
    width: 46.48vh;
    position: relative;
    font-weight: 400;
    background: #00000054;
    font-family: 'GothamPro Regular', sans-serif
}

#app .login-auth .authorization-field,
#app .login-auth .login-head__username {
    margin-top: 7.89vh
}

#app .authorization-field__box,
#app .login-head__username {
    padding: .5vh 1.67vh .4vh
}

#app .authorization-field__box {
    border: none
}

#app .authorization-field__icon,
#app .authorization-field__lang {
    right: 1.5vh
}

#app .authorization-field__input {
    color: #ffffffd6 !important;
    font-size: 1.3vh;
    border: none !important;
    padding-bottom: 0;
    font-family: 'GothamPro Regular', sans-serif
}

#app .authorization-field__input-placeholder {
    opacity: 0
}

.login-form__suggestion-wrapper .login-form-push {
    background-color: var(--bg-60);
    border-radius: 1vh
}

.login-form__suggestion-wrapper .login-form-push:before {
    border-right-width: 1.11vh;
    border-right-style: solid;
    border-right-color: var(--bg-60);
    left: .05vh;
    top: 0;
    opacity: 1
}

#app .login-form__button,
#app .registration-bonuses__button,
#app .registration-form__button,
#app .registration-personalization__button {
    padding: 0 4.63vh;
    height: 6.11vh;
    border-radius: .74vh;
    line-height: 6.11vh;
    font-size: 2.04vh;
    font-weight: 500;
    width: 17vh;
    text-transform: inherit;
    font-family: 'GothamPro Medium', sans-serif
}

#app .registration-personalization__button {
    width: 24vh
}

#app .registration-bonuses__button {
    width: 36vh
}

#app .registration-bonuses__button-background,
#app .registration-form__button-background {
    border-radius: .74vh
}

#app .login-form,
#app .registration-bonuses,
#app .registration-form,
#app .registration-personalization {
    width: 46.48vh
}

#app .registration-personalization-switcher__button {
    width: 6.11vh;
    height: 6.11vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .74vh;
    cursor: pointer;
    margin-left: 1.11vh;
    transition-duration: .25s;
    padding: 0
}

#app .registration-personalization-switcher__icon {
    width: 2vh;
    height: 2vh;
    margin: 0;
    fill: white
}

#app .registration-personalization-switcher>div.registration-personalization-switcher__button:first-child {
    border: .19vh solid #527ff1;
    background: 0 0;
    margin: 0
}

#app .registration-personalization-switcher>div.registration-personalization-switcher__button_active:first-child {
    background: #527ff1 !important
}

#app .registration-personalization-switcher>div.registration-personalization-switcher__button:last-child {
    border: .19vh solid #d152f1;
    background: 0 0
}

#app .registration-personalization-switcher>div.registration-personalization-switcher__button_active:last-child {
    background: #d152f1 !important
}

#app .registration-personalization-item {
    width: 13.33vh;
    height: 16.85vh;
    border-radius: .74vh;
    border: .19vh solid #ffffff69;
    background: 0 0
}

#app .registration-personalization-item:hover {
    border: .19vh solid #fff;
    background: 0 0 !important
}

#app .registration-personalization-item_active {
    border: .19vh solid #ffb200 !important;
    background: 0 0 !important
}

#app .authorization-field:before,
#app .login-head__username:before {
    content: "Введите логин*";
    position: absolute;
    left: 0;
    top: -3vh;
    font-size: 1.67vh;
    line-height: 100%;
    color: #ffffffb3;
    background: 0 0;
    width: 100%;
    margin-bottom: 1.11vh;
    height: auto;
    font-family: 'GothamPro Medium', sans-serif
}

#app .login-auth .authorization-field:before {
    content: "Введите пароль*"
}

#app .login-code .authorization-field:before {
    content: "Введите значение*"
}

#app .registration-bonuses .authorization-field:before {
    content: "Введите ник пригласившего (или пропустите)*"
}

#app .registration-form>div:first-child .authorization-field:before {
    content: "Введите e-mail*"
}

#app .registration-form>div:nth-child(2) .authorization-field:before {
    content: "Придумайте пароль (мин. 6 символов)*"
}

#app .registration-form>div:nth-child(3) .authorization-field:before {
    content: "Повторите пароль*"
}

#app .authorization .login {
    margin-top: -10vh;
    margin-left: 10vh
}

#app .registration {
    margin-left: 10vh
}

#app .registration__title {
    color: #fff
}

#app .registration__title-icon {
    display: none
}

#app .registration .authorization-field {
    margin-top: 6vh
}

#app .registration-personalization-container {
    width: 100%;
    margin-top: 2vh
}

#app .registration-personalization-switcher {
    margin-top: 2vh
}

#app .registration-form__confirm {
    align-items: flex-start;
    flex-direction: column
}

#app .login-auth .login-head {
    margin: 0
}

#app .scrollable-container-thumb_type_2.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_2.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_3.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_3.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_4.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_4.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_5.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_5.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_6.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_6.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_7.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_7.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_8.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_8.scrollable-container-thumb_vertical {
    background-color: #feb900
}

#app .scrollable-container_type_3 .scrollable-container__rail .scrollable-container__rail-rail-background {
    background-color: #260d16
}

  `;
  document.head.appendChild(style);
}

applyCss();
