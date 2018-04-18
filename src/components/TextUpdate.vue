<template>
    <div class="update-container" v-if="text">
        <h2 class="update-title">update text</h2>

        <form v-on:submit.prevent="updateText" class="update-form">
            <input v-model="text.title" placeholder="title" type="text" name="title" class="update-input">
            <textarea rows="4" v-model="text.body" placeholder="text..." name="body" class="update-textarea"></textarea>
            <button id="update-button" class="update-button">update</button>
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
            id: '',
            text: null
        }
    },
    created() {
        this.id = window.location.href.split('/')[5];

        axios({
            method: 'get',
            url: 'https://local-text.nl/server/texts/' + this.id,
            headers: {'token': JSON.parse(localStorage.getItem('token'))}
        })
        .then(response => this.text = response.data)
        .catch(error => console.log(error));
    },
    methods: {
        updateText() {
            let title = this.text.title;
            let body = this.text.body;

            axios({
                method: 'put',
                url: `https://local-text.nl/server/texts/${this.id}`,
                header: {'token': JSON.parse(localStorage.getItem('token'))},
                data: {
                    title: title,
                    body: body
                }
            })
            .then(response => router.push({name: 'Text', params: {id: this.id}}))
            .catch(error => console.log(error));
        }
    }
}
</script>

<style>
    .update-container {
        padding: 0 2rem;
    }

    .update-form {
        display: flex;
        flex-direction: column;
    }

    .update-input {
        border: none;
        border-bottom: 0.2rem #474747 solid;
        padding: 1rem 1rem .4rem .4rem;
        margin: 1rem 0 1.5rem 0;
        font-family: 'Karla', sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        color: #474747;
        outline: none;
    }

    .update-textarea {
        border: none;
        padding: 1rem 1rem .4rem .4rem;
        margin: 1rem 0 2rem 0;
        font-family: 'Karla', sans-serif;
        font-size: 1.4rem;
        color: #474747;
        outline: none;
    }

    .update-button {
        background-color: white;
        border: none;
        font-family: 'Karla', sans-serif;
        font-size: 1.8rem;
        font-weight: bold;
        color: #ff5757;
        outline: none;
    }
</style>
