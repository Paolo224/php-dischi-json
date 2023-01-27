const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: './api.php',
            dischiList: [],
        }
    },
    methods:{
        getDischi(){
            axios.get(this.apiUrl)
            .then(responde => {
                console.log(responde.data)
                this.dischiList = responde.data
            }) 
        }
    },
    created(){
        this.getDischi();
    }
}).mount('#app')