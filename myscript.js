const itemName = document.querySelector('#itemName');
const noOfItems = document.querySelector('#noOfItems');
const btn = document.querySelector('#submit');


btn.addEventListener('click', () => {
    const nameValue = itemName.value.trim();
    const totalItems = noOfItems.value;
    itemName.value = '';
    totalItems.value = NaN;
    if (nameValue && totalItems){
        let tr = document.createElement('tr');
        let trItems = document.createElement('td');
        let trNumber = document.createElement('td');
        let inventoryTable = document.querySelector(".inventory-items")

        trItems.textContent = nameValue;
        trNumber.textContent = totalItems;

        tr.appendChild(trItems);
        tr.appendChild(trNumber);
        inventoryTable.appendChild(tr);
    } else {
        alert("Please provide input for both items and no of items");
    }
})