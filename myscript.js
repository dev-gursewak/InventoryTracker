const itemName = document.querySelector('#itemName');
const noOfItems = document.querySelector('#noOfItems');
const btn = document.querySelector('#submit');
const inventory = {};


btn.addEventListener('click', () => {
    const nameValue = itemName.value.trim();
    const totalItems = parseInt(noOfItems.value, 10);
    itemName.value = '';
    noOfItems.value = '';
    inventory[nameValue] = Number(inventory[nameValue] || 0) + Number(totalItems);
    
    if (!nameValue || totalItems <= 0){
        alert("Please provide input for both items and no of items");
    } else {
        let tr = document.createElement('tr');
        let trItems = document.createElement('td');
        let trNumber = document.createElement('td');
        let inventoryTable = document.querySelector(".inventory-items")

        trItems.textContent = nameValue;
        trNumber.textContent = totalItems;

        tr.appendChild(trItems);
        tr.appendChild(trNumber);
        inventoryTable.appendChild(tr);
    }
    itemName.focus();
})