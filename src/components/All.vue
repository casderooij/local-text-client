<template>
    <div class="all-container">
        <h2 class="all-title">all your texts</h2>

        <div class="all-texts-list">
            <div class="all-single-text" v-for="text in texts">
                <router-link class="router-link" :to="{name: 'Text', params: {id: text.id}}">
                    <div class="single-text-container">
                        <div class="single-text-title">{{ text.title }}</div>
                        <div class="single-text-date">{{ 
                            (new Date(`${text.createdAt}`).toString().split(' ').slice(0, 4)[0] + ', ') +
                            (new Date(`${text.createdAt}`).toString().split(' ').slice(0, 4)[2] + ' ') +
                            (new Date(`${text.createdAt}`).toString().split(' ').slice(0, 4)[1] + ' ') +
                            new Date(`${text.createdAt}`).toString().split(' ').slice(0, 4)[3]
                        }}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'All',
    data() {
        return {
            texts: null
        }
    },
    created() {
        let token = JSON.parse(localStorage.getItem('token'));
        axios({
            method: 'get',
            url: 'https://local-text.nl/server/users/texts/' + token.userId,
            headers: {
                'token': JSON.parse(localStorage.getItem('token')).userToken
            }
        })
        .then(response => this.texts = response.data)
        .catch(error => console.log(error));
    }
}
</script>

<style>
    #app {
        overflow: scroll;
    }

    .all-container {
        padding: 0 2rem;
    }

    .single-text-container {
        padding: 1rem 0;
    }

    .single-text-title {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .single-text-date {
        color: #ff5757;
        opacity: 0.8;
        padding: 0 1rem;
    }
</style>
