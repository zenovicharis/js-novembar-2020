const myMixin = {
    methods: {
        saveNewWorker(worker) {
            axios.post("http://localhost:3000/workers", worker)
                .then((response) => {
                    this.fetchData()
                })
        },
        fetchData() {
            axios.get("http://localhost:3000/workers")
                .then((response) => {
                    var {data} = response;
                    console.log(data);
                    this.workers = data
                })
        },
        deleteRowData(id) {
            axios.delete(`http://localhost:3000/workers/${id}`)
            .then(() => {
                this.fetchData()
            })
        },
        saveEditedData(worker) {
            axios.put(`http://localhost:3000/workers/${worker.id}`, worker)
            .then(() => {
                this.fetchData()
            })
        },
    }
}



const TableRow = {
    template: `
        <tr>
            <template v-if="!isEditing">
                <td> {{worker.id}}</td>
                <td> {{worker.name}}</td>
                <td> {{worker.surname}}</td>
                <td> {{worker.age}}</td>
                <td> {{worker.department}}</td>
                <td>
                    <button @click="edit">Edit</button>
                    <button @click="remove">Delete</button>
                </td>
                <td> {{fullname}}</td>
            </template>
            <template v-else>
                <td>{{worker.id}}</td>
                <td>
                    <input type="text" v-model="worker.name"/>
                </td>
                <td>
                    <input type="text" v-model="worker.surname"/>
                </td>
                <td>
                    <input type="text" v-model="worker.age"/>
                </td>
                <td>
                    <input type="text" v-model="worker.department"/>
                </td>
                <td>
                    <button v-on:click="saveNewValues">Save Changes</button>
                    <button v-on:click="revertValues">Discard Changes</button>
                </td>
                
            </template>
        </tr>    
    `,
    props: ["worker"],
    mixins: [ myMixin ],
    data() {
        return {
            isEditing: false,
            prevState: {}
        }
    },
    computed: {
        fullname () {
            return this.worker.name + " " + this.worker.surname
        }
    },
    methods: {
        edit() {
            this.isEditing = !this.isEditing
            this.prevState = Object.assign({}, this.worker)
        },
        remove() {
            this.$emit("delete-row", this.worker.id);
        },
        workerIsValid() {
            // if (
            //     this.form.name.trim() != "" &&
            //     this.form.surname.trim() != "" &&
            //          .... (for each option)
            // )
            // this.validationMessage = "";
            var formValid = Object.keys(this.worker).reduce((acc, e) => {
                acc = acc || (this.worker[e].trim() != "")
                return acc
            }, false);

            // this.validationMessage = formValid ? "Form is Valid" : "Form is Not Valid";

            return formValid;
        },
        saveNewValues() {
            if (this.workerIsValid()) {
                this.isEditing = !this.isEditing
                // this.$emit("edited-worker", this.worker);
                this.saveEditedData(this.worker);
            }
        },
        revertValues() {
            console.log(this.prevState, this.worker);
            this.isEditing = !this.isEditing
            this.$emit("revert-worker", this.prevState);
            // this.worker = Object.assign({}, this.prevState);
        }
    }
};


const Table = {
    components: {
        "app-table-row": TableRow
    },
    template: `
        <table border="1px">
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Department</th>
            <th>Actions</th>

            <app-table-row 
                v-for="(worker, i) in workers" 
                :ref="'row-el' + i"
                :worker="worker" 
                @delete-row="removeRow"
                @edited-worker="editedWorker"
                @revert-worker="revertWorker">
            </app-table-row>
        </table>  
    `,
    props: ["workers"],
    data() {
        return {

        }
    },
    methods: {
        refereces() {
            console.log(this.$refs['row-el0'].remove())
        },
        removeRow(id) {
            this.$emit("delete-row", id)
        },
        editedWorker(worker) {
            console.log(worker);
            this.saveEditedData()
        },
        revertWorker(worker) {
            console.log(worker, "IN TABLE");
            this.$emit("revert-worker", worker);
        }

    }

};


const Form = {
    template: `
        <div>
            <form v-on:submit.prevent="addNewWorker">
                <p>
                    <label>Name</label>
                    <input type="text" name="name" v-model="form.name"/>
                </p>
                <p>
                <label>Surname</label>
                    <input type="text" name="surname" v-model="form.surname"/>
                </p>
                <p>
                    <label>Age</label>
                    <input type="number" name="age" v-model="form.age"/>
                </p>
                <p>
                    <label>Department</label>
                    <select name="department" id="" v-model="form.department">
                        <option value="it">IT</option>
                        <option value="mngmnt">Management</option>
                        <option value="hr">HR</option>
                        <option value="admin">Admin</option>
                    </select>
                </p>
                <p>{{validationMessage}}</p>
                <p>
                    <button type="submit">Add new</button>
                </p>
            </form>
        
        </div>
    `,
    mixins: [myMixin],
    data() {
        return {
            form: {
                name: "",
                surname: "",
                age: "",
                department: ""
            },
            validationMessage: ""
        }
    },
    methods: {
        addNewWorker() {
            if(this.formIsValid()) {
                /// trigger event
                this.saveNewWorker(this.worker)
                
            }
        },
        formIsValid() {
            // if (
            //     this.form.name.trim() != "" &&
            //     this.form.surname.trim() != "" &&
            //          .... (for each option)
            // )
            this.validationMessage = "";
            var formValid = Object.keys(this.form).reduce((acc, e) => {
                acc = acc || (this.form[e].trim() != "")
                return acc
            }, false);

            this.validationMessage = formValid ? "Form is Valid" : "Form is Not Valid";

            return formValid;
            
        }
    }
};



const root = Vue.createApp(
    {
        mixins: [
            myMixin
        ],
        components: {
            "app-table": Table,
            "app-form": Form
        },
        data() {
            return {
                message: "TEST root App Loaded",
                workers: [],
            }
        },
        methods: {
            removeRow(id) {
                this.deleteRowData(id);
            },
            saveEditedWorker (worker) {
                console.log(worker, "saveEDITED WORKER ROOT")
                this.saveEditedData(worker)
            },
            revertWorker(worker) {
                this.workers = this.workers.map(w => {
                    if(worker.id == w.id) {
                        w = Object.assign({}, worker);
                    }
                    return w
                })
            }
        },
        mounted() {
            this.fetchData();
        }
    }
).mount("#app");


