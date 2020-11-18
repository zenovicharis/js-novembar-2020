function LocalFormData(form) {
  this.firstName = form[0].value ? form[0].value : form[0].textContent;
  this.lastName = form[1].value ? form[1].value : form[1].textContent;
  this.age = form[2].value ? form[2].value : form[2].textContent;
  this.department = form[3].value ? form[3].value : form[3].textContent;

  this.getParamInputField = function(varName) {
    return `<input value="${this[varName]}"/>`;
  } 
  this.getSelectInputForDepartments = function() {
    return `
      <select id="department">
        <option value="hr">HR</option>
        <option value="dev">Dev</option>
        <option value="finance">Finance</option>
        <option value="management">Management</option>
      </select>
    `;
  }
}


var getDataFromForm = function (event) {
  // ne efikasan nacin
  // var firstName = document.getElementById("first-name").nodeValue;

  // efikasan nacin
  var form = event.currentTarget;

  console.log(form);
  var data = new LocalFormData(form);
  console.log(data);
  // var data = {
  //   firstName: form[0].value,
  //   lastName: form[1].value,
  //   age: form[2].value,
  //   department: form[3].value,
  // };
  form.reset();
  return data;
};

var editActionFunc = function (event) {
  var trow = event.currentTarget.parentElement.parentElement;
  var data = new LocalFormData(trow.children);
  // trow.
  console.log(data);

  // trow.children[0].innerHTML = `<input value="${data.firstName}"/>`;
  trow.children[0].innerHTML = data.getParamInputField('firstName');
  trow.children[1].innerHTML = data.getParamInputField('lastName');
  trow.children[2].innerHTML = data.getParamInputField('age');
  trow.children[3].innerHTML = data.getSelectInputForDepartments();
  trow.children[4].innerHTML = "";

  var saveAction = document.createElement("button");
  saveAction.textContent = `Save`;

  saveAction.addEventListener("click", function (saveEvent) {
    if (
      trow.children[0].firstChild.value.match(letters) &&
      trow.children[1].firstChild.value.match(letters) &&
      trow.children[2].firstChild.value.match(num)
    ) {
      var row = saveEvent.currentTarget.parentElement.parentElement;
      trow.children[0].innerHTML = trow.children[0].firstChild.value;
      trow.children[1].innerHTML = trow.children[1].firstChild.value;
      trow.children[2].innerHTML = trow.children[2].firstChild.value;
      trow.children[3].innerHTML = trow.children[3].firstChild.nextSibling.value;
      
      trow.children[4].appendChild(getEditButton());
      trow.children[4].appendChild(getDeleteButton());

    } else {
      alert("Podaci nisu validni");
    }
  });

  var discartAction = document.createElement("button");
  discartAction.textContent = `Discart`;

  trow.children[4].appendChild(saveAction);
  trow.children[4].appendChild(discartAction);
}

var deleteActionFunc = function (event) {
  var result = window.confirm("Are you sure you want to delete this row ?");
  if (result) {
    var trow = event.currentTarget.parentElement.parentElement;
    trow.remove();
  }
}

var getEditButton = function() {
  var editAction = document.createElement("button");
  editAction.textContent = `Edit`;
  
  // same as addEventListener
  editAction.addEventListener("click", editActionFunc);

  return editAction;
}

var getDeleteButton = function() {
  var deleteAction = document.createElement("button");
  deleteAction.textContent = `Delete`;

  deleteAction.addEventListener('click', deleteActionFunc);

  return deleteAction;
}

var letters = /^[A-Za-z]+$/;
var num = /^[1-9][0-9]+$/;

var addDataIntoTable = function (data) {
  var table = document.getElementById("list-of-employees");
  var row = document.createElement("tr");

  //validation
  if (
    data.firstName.match(letters) &&
    data.lastName.match(letters) &&
    data.age.match(num)
  ) {
    var firstNameCell = document.createElement("td");
    firstNameCell.innerHTML = data.firstName;
    row.appendChild(firstNameCell);
    var lastNameCell = document.createElement("td");
    lastNameCell.innerHTML = data.lastName;
    row.appendChild(lastNameCell);
    var ageCell = document.createElement("td");
    ageCell.innerHTML = data.age;
    row.appendChild(ageCell);
    var depCell = document.createElement("td");
    depCell.innerHTML = data.department;
    row.appendChild(depCell);
    var actionCell = document.createElement("td");

    // action buttons elements
    var editAction = document.createElement("button");
    editAction.textContent = `Edit`;
    // editAction.addEventListener("click", function(){

    // });
    // same as addEventListener
    editAction.addEventListener("click", editActionFunc);

    actionCell.appendChild(getEditButton());
    actionCell.appendChild(getDeleteButton());

    row.appendChild(actionCell);

    table.appendChild(row);
  } else alert("Podaci nisu validni");
};

var form = document.getElementById("form-input");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var data = getDataFromForm(event);
  addDataIntoTable(data);
});

var sortTableByColumn = function(event) {
  var ths = document.querySelectorAll('th');
  var thsArray = Array.from(ths);
  for(var preTh of thsArray) {
    preTh.style.backgroundColor = 'white';
  }
  var th = event.currentTarget;
  th.style.backgroundColor = 'gray';

  var sortByProp = th.getAttribute('data-prop');

  var tableRows = document.querySelectorAll("table > tr");
  var tableRowsArray = Array.from(tableRows);

  var datObj = [];

  for(var tr of tableRowsArray) {
    
    datObj.push(new LocalFormData(tr.children));

  }
  datObj.sort(function(a, b) {
    if(typeof a[sortByProp] == 'string') {
      return a[sortByProp].split('')[0] < b[sortByProp].split('')[0]
    }
    return a[sortByProp] < b[sortByProp];
  });

  for(var rowOfTable of tableRows) {
    rowOfTable.remove();
  }
  for(var data of datObj) {
    addDataIntoTable(data);
  }

}
// 
var setEventListenersOnTh = function() {
  var ths = document.getElementsByTagName('th');
  var thsArray = Array.from(ths);
  for (var i = 0; i < thsArray.length - 1; i++) {
    thsArray[i].addEventListener("click", sortTableByColumn)
  }
  console.log(ths);
  debugger;
}
setEventListenersOnTh();

