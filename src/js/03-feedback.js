import throttle from 'lodash.throttle';
// паттерн магические числа и строки
const STORAGE_KEY = 'feedback-msg'

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea')
}

refs.form.addEventListener('submit', onFormSubmit);
// добавляем throttle
refs.textarea.addEventListener('input',throttle(onTextareaInput, 1000));
let formData = {};
populateTextarea()

// refs.form.addEventListener('input', evt => {
//     // formData = {};
//   // console.log(evt.target.value);
//   // console.log(evt.target.name)
//   formData[evt.target.name] = evt.target.value;
//   //если такого влюча еще не будет в этом объекте он создастся
//   // если будет его значение перезапишется
//   // реализация собственног локалсторедж
//   console.log(formData)

// });

function onFormSubmit(evt) {
  // Останавливаем поведение по умолчанию
  evt.preventDefault();
  console.log('отправляем форму');
  // console.log(formData);
  // formData = {};
  // очищаем форму
  evt.currentTarget.reset();
  // очищаем в сторедже и текстерия при сабмите
  localStorage.removeItem(STORAGE_KEY)
  // не clear он очищает все
 }

function onTextareaInput(evt) {
  // получаем значение поля
  // currentTarget всплывает и меняется поэтому используем target
   formData[evt.target.name] = JSON.stringify(formData);
  //если такого влюча еще не будет в этом объекте он создастся
  // если будет его значение перезапишется
  // реализация собственног локалсторедж
  const savedData = evt.target.value;
  console.log(formData);
  // сохраняем его в хранилище
   localStorage.setItem(STORAGE_KEY, savedData)
}


// получаем значение из хранилища
// если там чт-то было обновляем Dom
function populateTextarea(evt) {
  // при перезагрузке страницы
  // получаем значение из локал стореджа
  const saveMessage = localStorage.getItem(STORAGE_KEY)
  console.log(saveMessage);
  // если ключа нет вернет null но ничего не выполнится
  if (saveMessage) {
     //  если да, сохранни поченные значения из локалстореджа
    console.log(saveMessage)
    const parseSave = JSON.parse(saveMessage)
    console.log( parseSave);
    // если в поле textarea пусто ничего не произойдет
    // если в поле что-то есть оно сохранится в локалсторедж
    // и згачение из локала при перезагружке будет находиться в поле тексериа
    refs.textarea.value = parseSave;
  }
}
