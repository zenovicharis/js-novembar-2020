var getDataFromForm = function (event) {
  // ne efikasan nacin
  // var firstName = document.getElementById("first-name").nodeValue;

  // efikasan nacin
  var form = event.currentTarget;

  console.log(form);
  var data = {
    firstName: form[0].value,
    lastName: form[1].value,
    age: form[2].value,
    department: form[3].value,
  };
  form.reset();
  return data;
};

var addDataIntoTable = function (data) {
  var table = document.getElementById("list-of-employees");
  var row = document.createElement("tr");

  //validation
  var letters = /^[A-Za-z]+$/;
  var num = /^[0-9]+$/;
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
    editAction.addEventListener("click", function (event) {
      var trow = event.currentTarget.parentElement.parentElement;
      var data = {
        firstName: trow.children[0].textContent,
        lastName: trow.children[1].textContent,
        age: trow.children[2].textContent,
        department: trow.children[3].textContent,
      };
      // trow.
      console.log(data);

      trow.children[0].innerHTML = `<input value="${data.firstName}"/>`;
      trow.children[1].innerHTML = `<input value="${data.lastName}"/>`;
      trow.children[2].innerHTML = `<input value="${data.age}"/>`;
      trow.children[3].innerHTML = `<input value="${data.department}"/>`;
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
          trow.children[3].innerHTML = trow.children[3].firstChild.value;
          trow.children[4].innerHTML = `<button>Edit</button><button>Delete</button>`;
          // debugger;
        } else {
          alert("Podaci nisu validni");
        }
      });

      var discartAction = document.createElement("button");
      discartAction.textContent = `Discart`;

      trow.children[4].appendChild(saveAction);
      trow.children[4].appendChild(discartAction);
      // debugger;
    });

    var deleteAction = document.createElement("button");
    deleteAction.textContent = `Delete`;
    actionCell.appendChild(editAction);
    actionCell.appendChild(deleteAction);

    row.appendChild(actionCell);

    table.appendChild(row);
  } else alert("Podaci nisu validni");
};

var form = document.getElementById("form-input");
console.log(form);

form.addEventListener("submit", function (event) {
  var data = getDataFromForm(event);
  addDataIntoTable(data);
  event.preventDefault();
});
