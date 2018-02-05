# ![icon-document](https://github.com/Gloper98/Cifrado-cesar-/raw/master/assets/images/icon-document.png "document") Card Validator
![Card validation](https://raw.githubusercontent.com/Danielalab/card-validator/master/assets/img/readme.gif "Card Validator")
>Producto Final: Library to Card Validation(Web Page).

La presente es una **librería** para la validación del número, fecha de vencimiento, código de verificación(cvv) y nombre completo correspondiente a la tarjeta de crédito la cual hace uso del algoritmo de [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).  

_This is a **library** for the validation of the number, expiration date, verification code (cvv) and full name corresponding to the credit card that makes use of the **Luhn** algorithm._

[![npm downloads](https://img.shields.io/badge/npm-5.5.2-orange.svg)](https://nodejs.org/en/download/releases/)  ![npm downloads](https://img.shields.io/badge/dependencies-none-brightgreen.svg)  ![npm downloads](https://img.shields.io/badge/devDependencies-insecure-blue.svg)

## Download
1. Primero debes descargar AnielCard dando click a 'Download' en nuestra página principal .
![Card validation](https://raw.githubusercontent.com/Danielalab/card-validator/master/assets/img/down.gif "Card Validator")
2. Luego debes añadir el archivo descargado a tu carpeta de trabajo junto a tus archivos javascript.
3. Por último debes anexar el archivo *index.js* en tu archivo HTML. 
*¡Listo!*, ahora puedes empezar a usar **AnielCard**.

## Using AnielCard.js

```javascript
// declare variables that select the inputs 
let name = document.getElementById('name')

let cardNumber = document.getElementById('card-number')

let cvv = document.getElementById('cvv')

let month = document.getElementById('month')

let year = document.getElementById('year')

// call the function anielCard 
// all parameters refer to an input (DOM)
anielCard(name, cardNumber, cvv, month, year);

```

## Tools used

* **[Bootstrap:](http://getbootstrap.com/docs/3.3/)** 
  Bootstrap es un framework web front-end gratuito y de código abierto para diseñar sitios web y aplicaciones web.  
  _Bootstrap is a free and open-source front-end web framework for designing websites and web applications._  

* **[ECMA script 6:](http://es6-features.org/#Constants)** 
  Javascript es un lenguaje de programación de alto nivel, dinámico, débilmente tipado, basado en prototipos, multi-paradigma e interpretado.  
  _Javascript is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language._  
```javascript
 let anielCard = (name, cardNumber, cvv, month, year) => { 
  let valueName = document.getElementById(name.id).value;
  let valueCardNumber = document.getElementById(cardNumber.id).value;
  let valueCvv = document.getElementById(cvv.id).value;
  let valueMonth = document.getElementById(month.id).value;
  let valueYear = document.getElementById(year.id).value;

```

## Related Topics

* [npmjs: ](https://www.npmjs.com/package/card-validator)Acerca de `card validator`.  
  _About_ **card validator**.
* [Ecma script 6: ](http://es6-features.org/#Constants)Acerca de la version `Javascript 6`.  
  _About_ **The javascript new version**.

>Learn more: [Youtube NPM Tutorial](https://www.youtube.com/watch?v=4aNA8ZHihFE);

## Credits

* **Anny Gutierrez Lopez:** [GitHub Account](https://github.com/Gloper98).
* **Daniela Gomez Bejar:** [GitHub Account](https://github.com/Danielalab).


