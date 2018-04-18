<template>
    <div class="add-container">
        <h2 class="add-title">add text</h2>
        <h2>{{ latitude }} + {{ longitude }}</h2>

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
            body: '',
            latitude: '',
            longitude: ''
        }
    },
    created() {
        if('geolocation' in navigator) {
            // var positionOption = { timeout: 500, enableHighAccuracy: true, maximumAge: 0 };

            // var gpsSuccess = function(currentPosition) {
            //     this.latitude = currentPosition.coord.latitude;
            //     this.longitude = currentPosition.coords.longitude;
            //     this.message = 'yes';
            // };

            // var gpsFailed = function() {
            //     //use some 3rd party position solution(get position by your device ip)
            //     // getPositionBy3rdParty();
            // };

            // navigator.geolocation.getCurrentPosition(gpsSuccess, gpsFailed, positionOption);

            let position;

            let success = (position) => {
                queryPosition(position.coords.latitude, position.coords.longitude);
                // navigator.geolocation.watchPosition(success, error, {
                //     maximumAge: 0,
                //     enableHighAccuracy: true,
                //     timeout: Infinity
                // });
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

            // watchId = navigator.geolocation.watchPosition(
            //     processGeolocation,
            //     // Optional settings below
            //     geolocationError,
            //     {
            //         timeout: 0,
            //         enableHighAccuracy: true,
            //         maximumAge: Infinity
            //     }
            // );

            // var id, target, options;

            // function success(pos) {
            //     console.log(pos.coords.latitude);
            //     console.log(pos.coords.longitude);
            //     this.latitude = pos.coords.latitude;
            //     this.longitude = pos.coords.longitude;
            // }

            // function error(err) {
            //     console.warn('ERROR(' + err.code + '): ' + err.message);
            // }

            // options = {
            //     enableHighAccuracy: false,
            //     // timeout: Infinity,
            //     maximumAge: 0
            // };

            // id = navigator.geolocation.watchPosition(success, error, options);

        } else {
            console.log('Geolocation not available...');
        }
    },
    methods: {
        addText: function() {
            let title = this.title;
            let body = this.body;
            let latitude = this.latitude;
            let longitude = this.longitude;

            axios({
                method: 'post',
                // url: `http://localhost:3000/login`,
                url: `https://local-text.nl/server/texts`,
                headers: {
                    'token': JSON.parse(localStorage.getItem('token')).userToken
                },
                data: {
                    title: title,
                    body: body,
                    latitude: latitude,
                    longitude: longitude
                }
            })
            .then(res => window.location.replace('https://local-text.nl'))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style>
    .add-container {
    }

    .wait-container {
        position: absolute;
        width: 100%;
        padding-top: 8rem;
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
        width: 30vw;
        left: 50%;
        margin-top: -15vw;
        margin-left: -15vw;
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

    .add-title {
        padding: 0 2rem;
    }

    .add-form {
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
    }

    .add-input {
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

    .add-textarea {
        border: none;
        padding: 1rem 1rem .4rem .4rem;
        margin: 1rem 0 2rem 0;
        font-family: 'Karla', sans-serif;
        font-size: 1.4rem;
        color: #474747;
        outline: none;
    }

    .add-button {
        background-color: white;
        border: none;
        font-family: 'Karla', sans-serif;
        font-size: 1.8rem;
        font-weight: bold;
        color: #ff5757;
        outline: none;
    }
</style>
