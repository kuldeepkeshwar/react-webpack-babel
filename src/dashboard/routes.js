import Dashboard from './dashboard';
import AccountStatus from './account-status/account-status';
import Auth from './../utils/auth';


const DashBoardRouteConfig={
    component:Dashboard,
    onEnter: (nextState, replace) => {
        if(!Auth.loggedIn()){
            replace('/login');
        }
    },
    getIndexRoute(partialNextState, callback) {
        console.log('index-Dash')
        callback(null, {
            component: AccountStatus
        });
    },
    getChildRoutes(partialNextState, callback) {
        console.log('getChildRoutes-Dash')
        callback(null, [{
            path:'account-status',
            component:AccountStatus
        }])
    }
}
export default DashBoardRouteConfig;