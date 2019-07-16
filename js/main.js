var selectedRow = null; 

function onFormSubmit() {
	if(validate() ) {
		var formData = readFormData();
		if (selectedRow == null) {
			insertNewRecord(formData);
		} else {
			updateFormData(formData) 
		}
		resertFormData();
	}	
}

function readFormData() {
	var formData = {};
	formData['fullName'] = document.getElementById('fullName').value;
	formData['empCode'] = document.getElementById('empCode').value;
	formData['email'] = document.getElementById('email').value;
	formData['city'] = document.getElementById('city').value;
	return formData;
}

function insertNewRecord(data) {
	var table = document.getElementById('employeeList').getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.fullName;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.empCode;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.email;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.city;
	cell4 = newRow.insertCell(4);
	cell4.innerHTML = `<button class='btn btn-info btn-sm text-white pointer' onclick="onEdit(this)"> Edit </button>
						<button class='btn btn-danger btn-sm text-white' onclick="deleteData(this)">Delete</button>`;
}

function resertFormData() {
	document.getElementById('fullName').value = '';
	document.getElementById('empCode').value = '';
	document.getElementById('email').value = '';
	document.getElementById('city').value = '';
}

function onEdit(td) {
	selectedRow = td.parentElement.parentElement;
	document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
	document.getElementById('empCode').value = selectedRow.cells[1].innerHTML;
	document.getElementById('email').value = selectedRow.cells[2].innerHTML;
	document.getElementById('city').value = selectedRow.cells[3].innerHTML;
}

function updateFormData(formData) {
	selectedRow.cells[0].innerHTML = formData.fullName;
	selectedRow.cells[1].innerHTML = formData.empCode;
	selectedRow.cells[2].innerHTML = formData.email;
	selectedRow.cells[3].innerHTML = formData.city;
}

function deleteData(td) {
	row = td.parentElement.parentElement;
	document.getElementById('employeeList').deleteRow(row.rowIndex);
	var table = document.getElementById('employeeList');
	var rowCount = table.rows.length
	if (table.rows.length <=  1) {
		confirm('this is last row');	
	}
}

function validate() {
	isValid = true;
	var showError = document.querySelector('.error');
	if(document.getElementById('fullName').value == '') {
		isValid = false;
		showError.classList.remove('d-none');
	} else {
		isValid = true;
		if(!showError.classList.contains('d-none')) {
			showError.classList.add('d-none');
		}
	}
	return isValid;
}