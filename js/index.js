import getCities from './api/getCities.js';
import getDepartaments from './api/getDepartaments.js';
import getDepartamentByNumber from './api/getDepartamentByNumber.js';
import changeDepartaments from './changeDepartaments.js';
import showOrderDOM from './showOrderDOM.js';

function getCustomerInfo() {
    // Listen the button "buy" to open form
    const buyButton = document.querySelector('.buy');
    buyButton.addEventListener('click', openForm);
    const form = document.querySelector('form');
    function openForm() {
        form.style.display = 'block';
    }
    // Listen input to find cities for Nova Poshta service
    const cityInput = document.querySelector('[name="city"]');
    cityInput.addEventListener('input', showInfo);

    async function showInfo() {
        // Get cities according to input changes (API)
        const cities = await getCities(cityInput.value);

        // Show cities in <select> element (DOM)
        const list = document.createElement('select');
        list.setAttribute('name', 'selectedCity');
        cities.map(el => {
            const item = document.createElement('option');
            item.setAttribute('value', `${el.Ref}`);
            item.textContent = `${el.SettlementTypeDescription} ${el.Description}, ${el.AreaDescription} область`;
            list.appendChild(item);
        });
        const cityList = document.querySelector('.cityList');
        cityList.innerHTML = '';
        cityList.appendChild(list);

        // Get departaments in select (API)
        const departaments = await getDepartaments(list.value);

        // Show departaments of Nova Poshta
        const labelDepartment = document.createElement('label');
        labelDepartment.textContent = 'Введіть номер зручного для Вас відділення: ';
        const inputDepartament = document.createElement('input');
        inputDepartament.setAttribute('name', 'inputDepartament');
        labelDepartment.appendChild(inputDepartament);
        const departamentList = document.querySelector('.departamentList');
        departamentList.innerHTML = '';
        departamentList.appendChild(labelDepartment);

        const selectDepartment = document.createElement('select');
        selectDepartment.setAttribute('name', 'selectedDepartament');
        selectDepartment.classList.add('selectDepartament');
        departaments.map(el => {
            const item = document.createElement('option');
            item.setAttribute('value', `${el.Number}, ${el.Description}`);
            item.textContent = `Відділення номер ${el.Number}, ${el.Description}`;
            selectDepartment.appendChild(item);
        });
        labelDepartment.appendChild(selectDepartment);

        // Listen input with departament number to make fetch
        inputDepartament.addEventListener('input', fetchDepartament);
        async function fetchDepartament(e) {
            const newDepartaments = await getDepartamentByNumber(e.target.value, list.value);
            selectDepartment.innerHTML = '';
            if (newDepartaments) {
                changeDepartaments(newDepartaments);
            }
        }

        // Watch the <select> with cities to change departaments
        list.addEventListener('change', async () => {
            const newDepartaments = await getDepartaments(list.value);
            selectDepartment.innerHTML = '';
            if (newDepartaments) {
                changeDepartaments(newDepartaments);
            }
        });
    }

    // Check the submit of the form
    form.addEventListener('submit', showOrderInfo);

    function showOrderInfo(e) {
        e.preventDefault();
        // Show info in DOM
        showOrderDOM(e.target.elements);
    }
};

getCustomerInfo();