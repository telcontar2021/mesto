const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector('.popup__input-error');

const showError = (input, errorMessage) => {
    input.classList.add('popup__input_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('popup__input-error_active');
  };
  
  const hideError = (input) => {
    input.classList.remove('popup__input_type_error');
  };
  
  const checkInputValidity = () => {
    if (!formInput.validity.valid)  {
      showError(formInput);
    }
    else {
      hideError(formInput);
    }
  };
  
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  
  formInput.addEventListener('input', function () {
    checkInputValidity();
  });
