const { createApp } = Vue

  createApp({
    data() {
      return {
        Arr_dischi : []
      }
    },

    
    methods:{
        
        requestalbums() {
            axios.get("http://localhost/php-dischi-json/data.php")
            .then(response => this.Arr_dischi = response.data);
        }
    },
    
    created(){
        this.requestalbums()
    }

  }).mount('#app')