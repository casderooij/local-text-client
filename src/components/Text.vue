<template>
    <div class="text-container" v-if="text">

        <transition name="wait">
            <div class="wait-container" v-if="!distance">
                <img class="wait-svg" src="../assets/img/wait.svg" alt="waiting for texts">
                <div class="wait-text">waiting for location</div>
            </div>
        </transition>

        <div v-if="distance">
            <div class="text-username" v-if="text"><username :id="text.user_id"></username></div>

            <div class="text-distance">{{ distance }} m</div>

            <div class="title-body-container">
                <h2 class="text-title">{{ text.title }}</h2>
                <div class="text-body" v-if="distance <= 15 || distance == 0">{{ text.body }}</div>
            </div>

            <div class="text-button-container" v-if="isUser">
                <router-link class="text-link" :to="{name: 'TextUpdate', params: {id: id}}">
                    <div class="text-button text-update">update</div>
                </router-link>
                <div class="text-button text-delete" @click="doDelete()">delete</div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router'
import axios from 'axios'
import getLocation from '../assets/js/methods/getLocation'
import username from './Username.vue';

export default {
    name: 'Add',
    components: {username},
    data() {
        return {
            id: '',
            text: null,
            isUser: false,
            latitude: '',
            longitude: '',
            distance: ''
        }
    },
    created() {
        if('geolocation' in navigator) {

            let position;

            let success = (position) => {
                this.counter++;
                queryPosition(position.coords.latitude, position.coords.longitude);
                function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
                    var R = 6371; // Radius of the earth in km
                    var dLat = deg2rad(lat2-lat1);  // deg2rad below
                    var dLon = deg2rad(lon2-lon1); 
                    var a = 
                        Math.sin(dLat/2) * Math.sin(dLat/2) +
                        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
                        Math.sin(dLon/2) * Math.sin(dLon/2)
                        ; 
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
                    var d = R * c; // Distance in km
                    return Math.floor(d * 1000);
                }

                function deg2rad(deg) {
                    return deg * (Math.PI/180)
                }

                this.distance = getDistanceFromLatLonInKm(position.coords.latitude, position.coords.longitude, this.text.latitude, this.text.longitude);
            }

            let error = (msg) => {
                console.error(msg);
            }

            let queryPosition = (lat, lon) => {
                this.latitude = lat;
                this.longitude = lon;
            }

            navigator.geolocation.watchPosition(success, error, {
                maximumAge: 0,
                enableHighAccuracy: true,
                timeout: Infinity
            });

        } else {
            console.log('Geolocation not available...');
        }




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
                this.isUser = true;
            } else {
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
            .then(response => {
                router.push({name: 'Welcome'});
            })
            .catch(error => console.log(error));
        }
    }
}
</script>

<style>
    .text-container {
        padding: 0 2rem;
        text-align: center;
    }

    .text-username {
        text-align: left;
        padding-left: 2rem;
        padding-bottom: 2rem;
        font-weight: bold;
        font-size: 1.2rem;
    }

    .title-body-container {
    }

    .text-body {
        margin-top: 2rem;
        font-size: 1.4rem;
    }

    .text-distance {
        margin-top: 4rem;
        font-size: 3rem;
        color: #ff5757;
        font-weight: bold;
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

    .wait-container {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 50vw;
        padding-top: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .wait-enter-active {
        transition: opacity .4s ease;
    }

    .wait-leave-active {
        transition: opacity .4s ease;
    }

    .wait-enter, .wait-leave-to {
        opacity: 0;
    }

    .wait-svg {
        position: relative;
        align-self: center;
        width: 30vw;
        animation:spin 3s ease infinite;
    }

    .wait-text {
        position: relative;
        text-align: center;
        font-size: 1.2rem;
    }

    @-moz-keyframes spin { 40% { -moz-transform: rotate(180deg) scale(1.4, 1.4); } }
    @-webkit-keyframes spin { 40% { -webkit-transform: rotate(180deg) scale(1.4, 1.4); } }
    @keyframes spin { 50% { -webkit-transform: rotate(180deg) scale(1.4, 1.4); transform: rotate(180deg) scale(1.4, 1.4); } }
</style>
