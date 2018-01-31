let begin = () => {
  // selecciona elementos del DOM
  let cardNumber = document.getElementById('card-number');
  let name = document.getElementById('name');
  let cvv = document.getElementById('cvv');
  let month = document.getElementById('month');
  let year = document.getElementById('year');
  let btnSubmit = $('#btn-submit');
  let messageTesting = $('#message');
  let returnCode = $('#return');
  console.log(name);

  // declarar funciones 
  let addElementsHtml = (valueReturnAnielCard) => {
    returnCode.text(valueReturnAnielCard);      
    if (valueReturnAnielCard === true) {
      messageTesting.text('valid');
    } else {
      messageTesting.text('invalid'); 
    }
  };

  let resetExample = () => {
    cardNumber.value = '';
    name.value = '';
    cvv.value = ''; 
    month.value = '';
    year.value = '';
  };

  let testingLibrary = (event) => {
    event.preventDefault(); debugger;
    addElementsHtml(anielCard(name, cardNumber, cvv, month, year));
    resetExample();
  };

  // asocia eventos a elementos del DOM
  btnSubmit.on('click', testingLibrary);
};

window.onload = (begin);