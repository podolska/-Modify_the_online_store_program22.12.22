export default function changeDepartaments(newDepartaments) {

    const selectDepartment = document.querySelector('.selectDepartament');

    newDepartaments.map(el => {
        const item = document.createElement('option');
        item.setAttribute('value', `${el.Number}, ${el.Description}`);
        item.textContent = `Відділення номер ${el.Number}, ${el.Description}`;
        selectDepartment.appendChild(item);
    });
};