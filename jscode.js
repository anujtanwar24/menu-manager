/* js code for the category section*/

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
    formData["category"] = document.getElementById("category").value;
    return formData;

}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.category;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<button class="opnbtn"><a class="opnbtn" href="product.html">open</a></button>`

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<button onclick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>delete</button>`
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('category').value = selectedRow.cells[0].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.category;

}

function onDelete(td) {
    if (confirm("do you want to delete the record ?")) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm() {
    document.getElementById('category').value = '';
}