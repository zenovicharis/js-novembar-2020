const {defineAsyncComponent} = Vue;

const questions = {
    data () {
        return {
            title: "Questions Component"
        }
    },
    template: `
        <h1>{{title}}</h1>
    `,
    selector: "questions"
}

const score = {
    data () {
        return {
            title: "Score Component"
        }
    },
    template: `
        <h1>{{title}}</h1>
    `,
    selector: "score"
}

const dashboard = {
    data () {
        return {
            title: "Dashboard Component"
        }
    },
    template: `
        <h1>{{title}}</h1>
    `,
    selector: "dashboard"
}


const root = {
    data () {
        return {
            title: "Vuejs 3 examples",
            tabs: ["Dashboard", "Questions", "Score", "Example"],
            quizState: "dashboard"
        }
    },
    components: {
        dashboard,
        questions,
        score,
        example: defineAsyncComponent(() => import("./example.js"))
    },
    methods: {
        setComponent (tabName) {
            this.quizState = tabName.toLowerCase();
        }
    },
}




Vue.createApp(root).mount("#app");

/* Slots Example */
const innerComponent = {
    data() {
        return {
            title:"Inner Component Title"
        }
    },
    template: `
        <div>
            <h1>
                {{title}}
                <slot name="title"></slot>
            </h1>
            <h5>
                <slot name="subtitle"></slot>
            </h5>
        </div>

    `
}
const appSlots = {
    data() {
        return {
            mainTitle: "This is Main Title"
        }
    },
    components: {
        "inner-component": innerComponent
    }
}


Vue.createApp(appSlots).mount("#app-slots");



const grandChildComponent = {
    data() {
        return {
            title:"Grand Child Component Title"
        }
    },
    inject: [ "listOfGrandGrandChildren" ],
    template: `
        <div>
            <h1>
                {{title}}
            </h1>
            
            <ul>
                <li v-for="child in listOfGrandGrandChildren.value">{{child}}</li>
            </ul>
        </div>

    `,
    mounted() {
        console.log(this.listOfGrandGrandChildren);
    },
    created() {
        console.log(this.listOfGrandGrandChildren);
    }
}


const childComponent = {
    components: {
        "grand-child" : grandChildComponent
    },
    data() {
        return {
            title:"Child Component Title"
        }
    },
    template: `
        <div>
            <h1>
                {{title}}
            </h1>
            <grand-child />
        </div>

    `
}
const appProvide = {
    data() {
        return {
            mainTitle: "This is Provide/Inject Title"
        }
    },
    provide () {
        return {
            listOfGrandGrandChildren: Vue.computed(() => ["Jan", "Clode", "Van", "Dam"])
        }
    },
    components: {
        "child-component": childComponent
    }
}
Vue.createApp(appProvide).mount("#app-provide");