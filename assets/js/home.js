

 



// document.getElementById("lableselect");


function addlabel( ){

    var e = document.getElementById("labelselect");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    // let labelval=document.getElementById("labellist");
    var newSpan = document.createElement('span');
    newSpan.innerHTML=text+" ";
    document.getElementById('labellist').appendChild(newSpan);
    document.getElementById('labellistinput').value+=text+" ";
    
 }
// var jsondata = JSON.parse(data);

// let listobj = document.getElementById("listofissues");
// console.log(jsondata)

// iterateoverissues(jsondata);

// function iterateoverissues(jsondata) {
//     listobj.innerHTML = "";
//     for (let i of jsondata) {
//         console.log(i)
//         const listitem = document.createElement("li");

//         const p1 = document.createElement("p");
//         const p2 = document.createElement("p");
//         const p3 = document.createElement("p");

//         p1.appendChild(document.createTextNode(i.name));
//         p2.appendChild(document.createTextNode(i.description));
//         p3.appendChild(document.createTextNode(i.author));

//         listitem.appendChild(p1)
//         listitem.appendChild(p2)

//         listitem.appendChild(p3)

//         listobj.appendChild(listitem);

//     }
// }

// let authInput=document.getElementById("filterbyauth");
// let descInput=document.getElementById("filterbydesc");

// let nameInput=document.getElementById("filterbyname");

// authInput.addEventListener('keyup', (event) => { filterlistener()})
// descInput.addEventListener('keyup', (event) => {filterlistener() })
// nameInput.addEventListener('keyup', (event) => {filterlistener() })

// function filterlistener() {
//     let nameInput = document.getElementById("filterbyname");
//     let descInput = document.getElementById("filterbydesc");
//     let authInput = document.getElementById("filterbyauth");


//     newdata = jsondata.filter((item) => {
//         var re = new RegExp(nameInput.value, 'i');

//         if (item.name.match(re)) {
//             console.log("matching " + item.name + " " + nameInput.value,)
//             return true;
//         }
//     })

 
//     newdata = newdata.filter((item) => {
//         var re = new RegExp(descInput.value, 'i');

//         if (item.description.match(re)) {
//             console.log("matching " + item.description + " " + descInput.value)
//             return true;
//         }
//     })

//     newdata = newdata.filter((item) => {
//         console.log(item + " " + item.author)
//         var re = new RegExp(authInput.value, 'i');

//         if (item.author.match(re)) {
//             console.log("matching " + item.author + " " + authInput.value)
//             return true;
//         }
//     })

//     iterateoverissues(newdata);

// }

