import router from '../../../router';
import axios from 'axios';

export default {
    data() {
        return {
            currentUser: '',
            loggedIn: false
        }
    },
    created() {
        let getToken = (callback) => {
            let token = JSON.parse(localStorage.getItem('token'));
            if(token) {
                callback(token);
            }
        }
        
        let getUserFromDatabase = (token) => {
            axios({
                method: 'get',
                url: `http://localhost:3000/users/${token.userId}`,
                headers: {
                    'token': token.userToken
                }
            })
            .then(res => {
                this.currentUser = res.data;
                this.loggedIn = true;
            })
            .catch(err => {
                console.log(err);
                if(err.status = 401) {
                    localStorage.removeItem('token');
                    router.push({name: 'Welcome'});
                }
            });
        }
            
        getToken(getUserFromDatabase);
    }
}