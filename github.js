gitSite = "https://api.github.com/users/wither7007/repos"
url3="http://jsonplaceholder.typicode.com/todos/3"
xy = {}
aob={}
axios.get(gitSite)
    .then(function (response) {
        xy = response.data
        fillTest(xy)
    })
// Object.fromEntries(Object.entries(xy[1]).filter(([key]) => key.includes('Name')));

async function asyncFunc(point) {
    try {
      // fetch data from a url endpoint
      console.log("site is ", point)
      const response = await axios.get(point);
      const data = await response.json();
  
      return data;
    } catch (error) {
      alert(error); // catches both errors
    }
  }
g=asyncFunc(url3)
function fillTest(aOb){
    console.log(aOb)

}
document.getElementById('test').innerHTML = ` this is tic`
// xy.forEach((x,i)=>console.log(i, x.name))
// xy.forEach((x,i)=> {
//     gitName= `Name of git ${x.name}`
// })

// console.log(i, x.name)
