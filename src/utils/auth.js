import Cookies from './cookies';
import {TOKEN} from './constants';
import {login,logout,getUser} from './../services/auth';
 
const Auth={
    login(email, pass) {
        let _token=Cookies.get(TOKEN);
        if (_token) {
            return getUser(_token);
        }
        return login(email, pass).then((res) => {
            if (res.authenticated) {
                Cookies.set(TOKEN,res.token)//set cookies //TODO
            }
            return res;// should have user
        })
    },
    getToken() {
        return Cookies.get(TOKEN)
    },
    logout(cb) {
        return logout(TOKEN).then(()=>{
            Cookies.delete(TOKEN);
            cb();
        });
    },
    loggedIn() {
        return !!Cookies.get(TOKEN)
    },
    getUser(){
        return getUser(Cookies.get(TOKEN));
    }
};
export default Auth;