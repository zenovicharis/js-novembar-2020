const CRUDTable = {
    data() {
        return {
            employees: [],
            newEmployee: {
                firstName: "",
                lastName: "",
                age: "",
                department: "",
                editMode: false
            },
            employeesEdits: {

            },
            departmentOptions: [
                {value: "hr", text: "Human Resources"},
                {value: "dev", text: "Development"},
                {value: "mnm", text: "Management"},
                {value: "adm", text: "Admin"},
            ]
        }
    },
    methods: {
        add(event) {
            var newEmp = {};
            Object.assign(newEmp, this.newEmployee);
            this.employees.push(newEmp);
            event.target.reset();
            this.newEmployee = {
                firstName: "",
                lastName: "",
                age: "",
                department: "",
                editMode: false
            }
        },
        remove(index) {
            this.employees.splice(index, 1);
        },
        edit(index) {
            this.employees[index].editMode = true;
            var employeeEditing = {};
            Object.assign(employeeEditing, this.employees[index]);
            this.employeesEdits[index] = employeeEditing;
        },
        saveChanges(index) {
            this.employees[index].editMode = false;
            delete this.employeesEdits[index];
        },
        discardChanges(index) {
            // this.employeesEdits[index]
            this.employees[index] = this.employeesEdits[index];
            this.employees[index].editMode = false;
        },
        getTextValueOfDepartment(value) {
            var el = this.departmentOptions.find(e => e.value == value);

            return el.text
        }
    }
}

Vue.createApp(CRUDTable).mount("#app");

