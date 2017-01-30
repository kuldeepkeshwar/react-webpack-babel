import Login from './login';
import Auth from './../utils/auth';
const LoginRouteConfig={
    component: Login,
    onEnter: (nextState, replace) => {
        if(Auth.loggedIn()){
            replace('/dashboard');
        }
    }
}
export default LoginRouteConfig;