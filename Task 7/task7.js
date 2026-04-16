// Task 1

console.log("Order placed");

setTimeout(()=>{
console.log("Preparing food");
},2000);

setTimeout(()=>{
console.log("Food ready");
},4000);

setTimeout(()=>{
console.log("Delivered");
},5000);

// Task 2

let clock=setInterval(()=>{
let time=new Date().toLocaleTimeString();
console.log(time);
},1000);

setTimeout(()=>{
clearInterval(clock);
console.log("Clock stopped");
},10000);

// Task 3

function loginUser(callback){
setTimeout(()=>{
console.log("User Logged In");
callback();
},2000);
}

function getUserData(callback){
setTimeout(()=>{
console.log("User Data Fetched");
callback();
},2000);
}

function getUserPosts(){
setTimeout(()=>{
console.log("User Posts Fetched");
},2000);
}

loginUser(()=>{
getUserData(()=>{
getUserPosts();
});
});

// Task 4

function getProducts(){
return new Promise((resolve,reject)=>{

let success=true;

setTimeout(()=>{
if(success){
resolve(["Backpack","book","pen"]);
}
else{
reject("API Failed");
}
},2000);

});
}

getProducts()
.then((data)=>{
console.log("Products:",data);
})
.catch((error)=>{
console.log(error);
})
.finally(()=>{
console.log("Request Completed");
});