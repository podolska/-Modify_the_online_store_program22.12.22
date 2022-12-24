export default function showOrderDOM(data) {
   let info = {};
   info.lastName = data[name = 'lastName'].value;
   info.firstName = data[name = 'firstName'].value;
   info.fatherName = data[name = 'fatherName'].value;
   info.city = document.querySelector('[name="selectedCity"]').options[document.querySelector('[name="selectedCity"]').selectedIndex].textContent;
   info.departament = data[name = 'selectedDepartament'].value;
   info.productAmount = data[name = 'productAmount'].value;
   info.comment = data[name = 'comment'].value;

   const infoSection = `<div class="info">
       <h3>Дякуємо за замовлення!</h3>
       <div class="info-part">
          <p class="info-title">ПІБ:</p>
          <p>${info.lastName} ${info.firstName} ${info.fatherName}</p>
       </div>
       <div class="info-part">
          <p class="info-title">Дані для доставки замовлення:</p>
          <div>
             <p>${info.city}</p>
             <p>${info.departament}</p>
          </div>
       </div>
       <div class="info-part">
          <p class="info-title">Деталі замовлення:</p>
          <div>
             <p>Кількість одиниць продукції: ${info.productAmount}</p>
             <p>Коментар: ${info.comment}</p>
          </div>
       </div> 
    </div>`;

   const orderInfo = document.querySelector('.orderInfo');
   orderInfo.innerHTML = infoSection;

   return infoSection;
}