<template>
    <div class="update-container" v-if="text">
        <h2 class="update-title">update {{ text.title }}</h2>

        <form v-on:submit.prevent="updateText" class="update-form">
            <input v-model="text.title" placeholder="title" type="text" name="title" class="update-input">
            <textarea rows="4" v-model="text.body" placeholder="text..." name="body" class="update-textarea"></textarea>
            <button id="update-button" class="update-button">update text</button>
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
            .then(response => console.log('Success!'))
            .catch(error => console.log(error));
        }
    }
}
</script>

<style>
    .text-container {
        padding: 0 2rem;
    }

    .text-body {
        margin-top: 2rem;
        font-size: 1.4rem;
    }

    .text-button-container {
        width: 100vw;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
    }

    .text-button {
        font-size: 1.4rem;
        font-weight: bold;
        margin: 0 2rem;
    }

    .text-delete {
        color: #ff5757;
    }

    .text-link {
        text-decoration: none;
        color: #474747;
    }
</style>
