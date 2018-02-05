const regExpNumbers = /^\d+$/;
const regExpText = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
const visa = /^4[0-9]{6,}$/;
const masterCard = /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/;
const amex = /^3[47][0-9]{5,}$/;
const dinerClub = /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/;

let typeObject;
let typeOfCard;
let sentinelCardNumber = false;
let sentinelName = false;
let sentinelVerificationCode = false;
let sentinelDueDate = false;
let allInputsValid = {
  'card valid' : {
		'valid' : false,
	 },
  'card number' : {
		'valid' : false,
		'value' : undefined
	 },
  'cvv' : {
		'valid' : false,
		'value' : undefined
	 },
  'expiration' : {
    'valid' : false,
    'value' : {
      'month' : undefined,
      'year' : undefined,
    } ,
	 },
	'type' : {
		'valid' : false,
		'value' : undefined
	 },
  'name' : {
		'valid' : false,
		'value' : undefined
	 }
};

// card number Validation
let isValidCardNumber = (cardNumber) => {
	let withoutBlankSpaces = cardNumber.replace(/\s/g, '');
  if (regExpNumbers.test(withoutBlankSpaces) && ((withoutBlankSpaces.length === 16 && (visa.test(withoutBlankSpaces) || master.test(withoutBlankSpace))) || (withoutBlankSpaces.length === 15 && amex.test(withoutBlankSpaces)) )) {
    let cardNumbersUpsideDown = withoutBlankSpaces.split('').reverse(); 
    let counterOfEvenNumbers = 1; // contador de posiciones pares (impares en js)
    let sum = 0; // almacenar la suma de los numeros de la tarjeta  
    cardNumbersUpsideDown.forEach((numb, index) => {
      cardNumbersUpsideDown[index] = parseInt(numb);
      if (index === counterOfEvenNumbers) {
        cardNumbersUpsideDown[index] *= 2;
        if (cardNumbersUpsideDown[index] >= 10) {
          cardNumbersUpsideDown[index] = cardNumbersUpsideDown[index].toString();
          let separateNumbers = cardNumbersUpsideDown[index].split('');
          separateNumbers[0] = parseInt(separateNumbers[0]);
          separateNumbers[1] = parseInt(separateNumbers[1]);
          cardNumbersUpsideDown[index] = separateNumbers[0] + separateNumbers[1];
        }
        counterOfEvenNumbers += 2; 
      }
      sum += cardNumbersUpsideDown[index];
    });
    sum % 10 === 0 ? sentinelCardNumber = true : sentinelCardNumber = false;
  } else {
    sentinelCardNumber = false;
  }
};

// Name Validation
let isValidName = (name) => {
  if (regExpText.test(name) && name.split(' ').length === 2){
    sentinelName = true;
	} else
    sentinelName = false;
};

// CVV validation
let cvvValidation = (typeCard, cvvNumber) => {
  let realCVV = cvvNumber.replace(/\s/g, '');
  if (regExpNumbers.test(realCVV)) {
    if (realCVV.length === 3) {
      if (typeCard === 'visa' || typeCard === 'mastercard' || typeCard === 'discover' || typeCard === 'dclub' || typeCard === 'jcb') {
        sentinelVerificationCode = true;
      } else {
        sentinelVerificationCode = false;
      }
    } else if (realCVV.length === 4) {
      if (typeCard === 'amex') {
        sentinelVerificationCode = true;
      } else {
        sentinelVerificationCode = false;
      }
    }
  } else {
    sentinelVerificationCode = false;
  }
};

let cardType = (numberIn) => {
  let realN = numberIn.replace(/\s/g, '');
  if (visa.test(realN)) {
    typeOfCard = 'visa';
		typeObject = true
  } else if (masterCard.test(realN)) {
    typeOfCard = 'mastercard';
		typeObject = true
  } else if (amex.test(realN)) {
    typeOfCard = 'amex';
		typeObject = true
  } else if (dinerClub.test(realN)) {
    typeOfCard = 'dclub';
		typeObject = true
  } else {
    typeOfCard = 'tipo de tarjeta no registrada';
		typeObject = false
  }
  return typeOfCard;
};

// expiration date validation
let expirationDate = (month, year) => {
  let dateValid;
  let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  let actualDate = new Date();
  let day = actualDate.getDate();
  let actualMonth = months[actualDate.getUTCMonth()];
  let actualYear = actualDate.getFullYear();
  let fullDate = actualYear + actualMonth;
  let actualDateJoin = year + month;
  let lastDay = new Date(year, actualDate.getMonth() + 1, 0);
  let dayL = lastDay.getDate();
  
  if (actualDateJoin > fullDate) {
    sentinelDueDate = true;
  } else if (actualDateJoin === fullDate) {
    if (day === dayL) {
      sentinelDueDate = false;
    } else {
      sentinelDueDate = true;
    }
  } else {
    sentinelDueDate = false;
  }
};

let modifyReturnObject = (valueName, valueCardNumber, valueCvv, valueMonth, valueYear) => {
  allInputsValid['card number']['valid'] = sentinelCardNumber;
  allInputsValid['card number']['value'] = valueCardNumber;
  allInputsValid['cvv']['valid'] = sentinelVerificationCode;
  allInputsValid['cvv']['value'] = valueCvv;
  allInputsValid['expiration']['valid'] = sentinelDueDate;
  allInputsValid['expiration']['value']['month'] = valueMonth;
  allInputsValid['expiration']['value']['year'] = valueYear;  
  allInputsValid['name']['valid'] = sentinelName;
  allInputsValid['name']['value'] = valueName;
  allInputsValid['type']['valid'] = typeObject;
  allInputsValid['type']['value'] = typeOfCard;
};

let addClassHtml = (newClass, oldClass, name, cardNumber, cvv, month, year) => {
  name.classList.add(newClass);
  cardNumber.classList.add(newClass);
  cvv.classList.add(newClass);
  month.classList.add(newClass);
  year.classList.add(newClass);
  name.classList.remove(oldClass);
  cardNumber.classList.remove(oldClass);
  cvv.classList.remove(oldClass);
  month.classList.remove(oldClass);
  year.classList.remove(oldClass);   
}

// Testing: General function.

let anielCard = (name, cardNumber, cvv, month, year) => { 
  let valueName = name.value; debugger;
  let valueCardNumber = cardNumber.value.replace(/\s/g, '');
  let valueCvv = cvv.value;
  let valueMonth = month.value;
  let valueYear = year.value;
  
	cardType(valueCardNumber);
  isValidCardNumber(valueCardNumber);
  isValidName(valueName); 
  cvvValidation(typeOfCard, valueCvv);
  expirationDate(valueMonth, valueYear);

  // verificar que todos los inputs cumplan la condición
  if (sentinelCardNumber && sentinelDueDate && sentinelName && sentinelVerificationCode) {
    allInputsValid['card valid']['valid'] = true;
    addClassHtml('succes', 'error', name, cardNumber, cvv, month, year);
  }
  else {
    allInputsValid['card valid']['valid'] = false;
    addClassHtml('error', 'succces', name, cardNumber, cvv, month, year);    
  }
  modifyReturnObject(valueName, valueCardNumber, valueCvv, valueMonth, valueYear);
  return allInputsValid;
};

