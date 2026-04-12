//Task 1

let cart1=[
    {name:"Shirt",price:500},
    {name:"Shoes",price:1500}
  ];
  let cart2=[
    {name:"Watch",price:2000}
  ];
  let mergedCart=[...cart1,...cart2];
  mergedCart.push({name:"Bag",price:800});
  mergedCart.pop();
  let total =mergedCart.reduce((sum, item) => sum + item.price, 0);
  
  console.log(mergedCart);
  console.log("Total Price:", total);

  //Task 2

  let user ={
    name:"Rohith",
    role:"Trainee",
    salary:20000
  };
  
  let update ={
    role:"FullStack Developer",
    salary:50000
  };
  let updatedUser ={...user,...update};
  
  let {name,role,salary} =updatedUser;
  
  console.log(`${name} is now a ${role} earning ${salary}`);
  
  //Task 3

  function teamScore(teamName,...scores) {
    console.log("Team:",teamName);
    console.log("Scores:",scores);
  
    let total =scores.reduce((sum,s) => sum+s,0);
    let highest =Math.max(...scores);
  
    console.log("TotalScore:",total);
    console.log("HighestScore:",highest);
  }
  
  teamScore("CSK",50,70,90,30);

  //Task 4
  let apiData = {
    user1: {
      name1: "Rohith",
      address: {
        city: "Hyderabad",
        pincode: 500070
      }
    }
  };
  
  let { user1 } = apiData;
  
  let { name1, address } = user1;
  
  let { city, pincode } = address;
  
  console.log(`${name1} lives in ${city} - ${pincode}`);

  //Task 5

  let users =["A","B","C","D","E"];

users.splice(2,2,"X","Y");

let firstThree=users.slice(0,3);

let exists =users.includes("B");

let index = users.indexOf("E");

console.log(users);
console.log(firstThree);
console.log("B exists:",exists);
console.log("Index of E:",index);

//Task 6

let messyData=[1,2,[3,4,[5]],null,undefined,"hello"];

let flatData=messyData.flat(Infinity);

let cleanData=flatData.filter(item =>item != null);

console.log(cleanData);

//Task 7

let prices =[1000,200,50,5000];
prices.sort((a,b) =>a - b);
console.log(prices);

//.sort() treats values as strings, not numbers "1000" comes before "200" in string comparison

//Task 8

let orders =[
    {id:1,amount:100},
    {id:2,amount:200},
    {id:3,amount:300}
  ];
  let totalRevenue =orders.reduce((sum,o) =>sum+o.amount,0);
  let avg =totalRevenue/orders.length;
  
  console.log("Total Revenue:",totalRevenue);
  console.log("Average Order:",avg);

//Task 9

let inventory =["Phone","Macbook","Tab"];

inventory.push("Watch");

inventory.pop();

let index1 =inventory.indexOf("Macbook");
if (index1 !==-1) {
  inventory.splice(index,1,"Notebook");
}

console.log("Has Phone:",inventory.includes("Phone"));

let newStock = ["Adaptor","Cable"];
let finalInventory =[...inventory,...newStock];

console.log(finalInventory);


//Task 10

function processData(...data) {
    let flat = data.flat(Infinity);
  
    let unique = [...new Set(flat)];
  
    return unique.sort((a, b) => a - b);
  }
  
  console.log(processData(1,2,[3,4],[5,[6]]));
