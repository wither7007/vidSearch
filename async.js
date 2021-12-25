console.log("async")
const url="http://jsonplaceholder.typicode.com/todos/1"
const url2="http://jsonplaceholder.typicode.com/todos/2"
const url3="http://jsonplaceholder.typicode.com/todos/3"
results={}
const loadData=async () => {
const results=await Promise.all([
    fetch(url),
    fetch(url2)
])
const dataPromises=results.map(result =>result.json())
const finalData=await Promise.all(dataPromises)

console.log("results are: " ,finalData)
} 
console.log("done")









// const loadData=async ()=>{
//     try {
//     const res=await fetch(url3)
//     const data=await res.json()
//     // console.log(data)
//     return data
//     // console.log(res)
// }catch(err){
//     console.error(err)

// }
// }
// loadData().then((data)=>console.log("data is: " , data))









// fetch(url)
//     .then(res=>{
//         return res.json()

//     })
//     .then(data=> {
//         console.log(data)   
//     })
//     .catch(err =>{
//        console.log(err) 
//     })