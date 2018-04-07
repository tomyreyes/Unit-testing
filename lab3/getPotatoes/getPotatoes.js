const getPotatoes = new Promise((resolve, reject)=> {
  setTimeout(()=>{
    resolve('potatoes')
  }, 500)
  setTimeout(()=>{
    reject('tomatoes')
  }, 1000)
  
})
getPotatoes.then(res =>{
  return res
})
.catch((err)=>{
  return err
})


module.exports = getPotatoes 