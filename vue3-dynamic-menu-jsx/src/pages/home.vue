<template>
    <div>
        {{ info }}
    </div>
</template>

<script>
import axios from "axios";
import qs from 'qs'

export default {
    name: "Home",
    data() {
            return {
                info: null
         }
    },
    mounted () {
        let PostData = {
          message:'TestGinPostAPI'
        }
        let data = qs.stringify(PostData);
        axios.post('http://dev.onwalk.net:8000/v1/post', data)
        .then( response => {
                this.info = response.data.status;
                console.log(response);
        }).catch( error => {
                console.log(error);
        });
    }
}
</script>

<style lang="stylus" scoped>
</style>
