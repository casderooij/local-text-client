<template>
    <div class="text-container" v-if="text">
        <h2 class="text-title">{{ text.title }}</h2>
        <h2>{{ message }}</h2>

        <div class="text-body">{{ text.body }}</div>

        <div class="text-distance"></div>

        <div class="text-button-container" v-if="isUser">
            <router-link class="text-link" :to="{name: 'TextUpdate', params: {id: id}}">
                <div class="text-button text-update">update</div>
            </router-link>
            <div class="text-button text-delete" @click="doDelete()">delete</div>
        </div>
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
            text: null,
            isUser: false,
            message: ''
        }
    },
    created() {
        this.id = window.location.href.split('/')[5];

        axios({
            method: 'get',
            url: 'https://local-text.nl/server/texts/' + this.id,
            headers: {'token': JSON.parse(localStorage.getItem('token')).userToken}
        })
        .then(response => {
            this.text = response.data;
            let userId = JSON.parse(localStorage.getItem('token')).userId;
            if(parseInt(response.data.user_id) === parseInt(userId)) {
                console.log('Same user');
                this.isUser = true;
            } else {
                console.log('not same user');
                this.isUser = false;
            }
        })
        .catch(error => console.log(error));
    },
    methods: {
        doDelete() {
            axios({
                method: 'delete',
                url: 'https://local-text.nl/server/texts/' + this.id,
                headers: {'token': JSON.parse(localStorage.getItem('token'))}
            })
            .then(response => window.location.assign("https://local-text.nl"))
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
        z-index: 10;
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
