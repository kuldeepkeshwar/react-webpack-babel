import {fakeAccount,fakeAccountDetail} from './../../dummy/accounts';
export function getAccounts(filter){
  return new Promise((resolve,reject)=>{
    resolve(fakeAccount);
  });
}
export function getAccountDetail(id){
  return new Promise((resolve,reject)=>{
    resolve(fakeAccountDetail);
  });
}