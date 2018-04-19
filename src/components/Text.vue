<template>
    <div class="text-container" v-if="text">
        <h2 class="text-title">{{ text.title }}</h2>

        <div class="text-body">{{ text.body }}</div>

        <div class="text-distance" v-if="latitude">{{ Math.floor(distance * 1000) }} m away</div>

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
                    return d;
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
                // window.location.assign("https://local-text.nl")
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
