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
	let changeLang = $('#language');
	
	$('[lang="es"]').hide();
	changeLang.click(function() {
		$('[lang="es"]').toggle();
    $('[lang="en"]').toggle();
  });

  let card = $('#card');
  let cardB = $('#card-b');
  let number = $('#number');
  let numberB = $('#number-b');
  let code = $('#code');
  let codeB = $('#code-b');
  let expiration = $('#expiration-b');
  let monthValue = $('#value-month');
  let yearValue = $('#value-year');  
  let validName = $('#valid-name');
  let validNameB = $('#valid-name-b');
	let validType = $('#valid-type');
  let validTypeB = $('#valid-type-b');

  // declarar funciones 
  let addObjectValuesToHTML = (valueReturnAnielCard) => {
    card.text(valueReturnAnielCard['card valid']['valid']);
    numberB.text(valueReturnAnielCard['card number']['valid']);
    number.text(valueReturnAnielCard['card number']['value']);
    codeB.text(valueReturnAnielCard['cvv']['valid']);
    code.text(valueReturnAnielCard['cvv']['value']);
    expiration.text(valueReturnAnielCard['expiration']['valid']);
    monthValue.text(valueReturnAnielCard['expiration']['value']['month']);
    yearValue.text(valueReturnAnielCard['expiration']['value']['year']);    
    validNameB.text(valueReturnAnielCard['name']['valid']);
    validName.text(valueReturnAnielCard['name']['value']);
		validTypeB.text(valueReturnAnielCard['type']['valid']);
    validType.text(valueReturnAnielCard['type']['value']);
  }

  let addElementsHtml = (valueReturnAnielCard) => {   
    addObjectValuesToHTML(valueReturnAnielCard);    
    if (valueReturnAnielCard['card valid']['valid'] === true) {
      messageTesting.text('The card is valid');
    } else {
      messageTesting.text('The card is invalid'); 
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
    event.preventDefault(); 
    addElementsHtml(anielCard(name, cardNumber, cvv, month, year));
    resetExample();
  };

  // asocia eventos a elementos del DOM
  btnSubmit.on('click', testingLibrary);
};

window.onload = (begin);