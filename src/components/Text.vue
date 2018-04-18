<template>
    <div class="text-container">
        <h2 class="text-title">{{ id }}</h2>
    </div>
</template>

<script>
import router from '../router'
import axios from 'axios'
import getLocation from '../assets/js/methods/getLocation'

export default {
    name: 'Add',
    props: ['id'],
    data() {
        return {
            title: '',
            body: ''
        }
    },
    created() {
        
    }
}
</script>

<style>
</style>
