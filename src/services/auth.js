
import fakeUser from './../../dummy/user';

export function login(email,pass){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if (email === 'test@test.com' && pass === 'password') { //TODO
        resolve(Object.assign({},fakeUser,{
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        }))
      } else {
        resolve({ authenticated: false })
      }
    }, 0)
  })
}
export function getUser(token){ //TODO
  return new Promise((resolve,reject)=>{
    resolve(fakeUser);
  })
}
export function logout(token){
  return new Promise((resolve,reject)=>{
    resolve(true);//TODO;
  })
}