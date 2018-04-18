<template>
    <div class="add-container">
        <h2 class="add-title">add text</h2>
        <h2>{{ latitude }} : {{ longitude }}</h2>

        <transition name="wait">
            <div class="wait-container" v-if="!latitude">
                <img class="wait-svg" src="../assets/img/wait.svg" alt="waiting for texts">
                <div class="wait-text">waiting for location</div>
            </div>
        </transition>

        <form v-on:submit.prevent="addText" class="add-form" v-if="latitude">
            <input v-model="title" placeholder="title" type="text" name="title" class="add-input">
            <textarea rows="4" v-model="body" placeholder="text..." name="body" class="add-textarea"></textarea>
            <button id="add-button" class="add-button">save text</button>
        </form>
    </div>
</template>

<script>
import router from '../router'
import axios from 'axios'
import getLocation from '../assets/js/methods/getLocation'

export default {
    name: 'Add',
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
