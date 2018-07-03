import getElementFromTemplate from "./template";
import data from "../data";
import footerTemplate from "./footer";
import game1Function from "./game-1";
import debounce from "../debounce";
import renderScreen from "../render";

const rulesTemplate = `
<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
</header>
<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>
${footerTemplate}`;

const rulesFunction = () => {
  const rulesElement = getElementFromTemplate(rulesTemplate),
        form = rulesElement.querySelector(`.rules__form`),
        userName = form.querySelector(`.rules__input`),
        submitBtn = form.querySelector(`.rules__button`);

  const btnUpdate = () => {
    submitBtn.disabled = !(userName.value.length > 1);
  };

  submitBtn.disabled = true;

  userName.addEventListener(`input`, () => {
    debounce(btnUpdate, 500);
  });

  form.addEventListener(`submit`, () => {
    game1Function(data);
  });

  renderScreen(rulesElement);
};

export default rulesFunction;
