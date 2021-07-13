<template>
    <div>
        {{ info }}
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Home",
    data() {
            return {
                info: null
         }
    },
    mounted () {
        axios.get('http://dev.onwalk.net:8000/v1/hello')
        .then( response => { 
		this.info = response.data.message;
                console.log(response);
	}).catch( error => { 
		console.log(error);
	});
    }
}
</script>

<style lang="stylus" scoped>
</style>
