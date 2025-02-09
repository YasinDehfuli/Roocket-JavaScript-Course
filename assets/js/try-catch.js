'use strict'

try{
  if (true){
    throw {name: 'Wrong!', message: 'something wrong'};
  }
}catch (err){
  console.error(err.name , err.message);
}