import {browserHistory} from 'react-router';
import Container from './container/container';
import Auth from './utils/auth';
import LoginRouteConfig from './login/routes';
import DashBoardRouteConfig from './dashboard/routes';


const LogoutRouteConfig={
    onEnter: (nextState, replace) => {
        Auth.logout(()=>browserHistory.replace('/login'));
    }
}
const LoginRoute=Object.assign({path: 'login'},LoginRouteConfig);
const DashBoardRoute=Object.assign({path: 'dashboard'},DashBoardRouteConfig);
const LogoutRoute=Object.assign({path: 'logout'},LogoutRouteConfig);

const Routes = {
    path: '/',
    component: Container,
    getChildRoutes(partialNextState, callback) {
        callback(null, [LoginRoute,DashBoardRoute,LogoutRoute]);
    },
    getIndexRoute(partialNextState, callback) {
        console.log('index-Container')
        if(Auth.loggedIn()){
            callback(null,DashBoardRouteConfig);//TODO not working for nested routes
        }else{
            callback(null,LoginRouteConfig);
        }
    }
};

export default Routes;