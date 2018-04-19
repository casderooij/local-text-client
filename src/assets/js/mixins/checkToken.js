export default {
    data() {
        return {
            hasToken: false
        }
    },
    created() {
        let token = JSON.parse(localStorage.getItem('token'));
        if (token.time < new Date()) {
            localStorage.removeItem('token');
        }
            
        if(token) {
            this.hasToken = true;
        }
    }
}