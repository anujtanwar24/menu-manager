var selectedRow = null;

function onFormSubmit() {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}




function readFormData() {
    var formData = {};
    formData["productName"] = document.getElementById("productName").value;
    formData["productDsc"] = document.getElementById("productDsc").value;
    return formData;

}


function insertNewRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productDsc;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<button onclick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>delete</button>`
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('productDsc').value = selectedRow.cells[0].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productName;
    selectedRow.cells[0].innerHTML = formData.productDsc;

}



function onDelete(td) {
    if (confirm("do you want to delete the record ?")) {
        row = td.parentElement.parentElement;
        document.getElementById('productList').deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm() {
    document.getElementById('productName').value = '';
    document.getElementById('productDsc').value = '';
}