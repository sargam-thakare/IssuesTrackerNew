console.log("dataissues " + (dataissues));
 
 let listobj = document.getElementById("listofissues");
// dataissues=J(dataissues)

console.log("dataissues parse " + JSON.parse(dataissues));

dataissues=JSON.parse(dataissues)
 
iterateoverissues(dataissues);


let filterbytitle=document.getElementById("filterbytitle");
let filterbydesc=document.getElementById("filterbydescnew");
let authorselect=document.getElementById("authorselect");

authorselect.addEventListener('change',(event)=>{
    filterbytitle.value=""
    filterbydesc.value=""
    let authoselected=event.target.value;
    if(authoselected=="All"){
    iterateoverissues(dataissues);
        return
     }
    let  newdata = dataissues.filter((item) => {
        var re = new RegExp(authoselected, 'i');

        if (item.author.match(re)) {
            console.log("matching " + item.author + " " + authoselected)
            return true;
        }
    })
    iterateoverissues(newdata);

})
console.log("filterbydesc",filterbydesc)

filterbytitle.addEventListener('keyup', (event) => {filterlistener() })
filterbydesc.addEventListener('keyup', (event) => {
    console.log("filterbydesc")
    filterlistener() 
})

 
function filterlistener() {
    authorselect.value="All"
    console.log("inside filterlistenr")
    let nameInput = document.getElementById("filterbytitle");
    let descInput = document.getElementById("filterbydescnew");
 

   let  newdata = dataissues.filter((item) => {
        var re = new RegExp(nameInput.value, 'i');

        if (item.name.match(re)) {
            console.log("matching " + item.name + " " + nameInput.value,)
            return true;
        }
    })
    console.log("newdata "+newdata)

       newdata = newdata.filter((item) => {
        var re = new RegExp(descInput.value, 'i');

        if (item.description.match(re)) {
            console.log("matching " + item.description + " " + descInput.value,)
            return true;
        }
    })
    iterateoverissues(newdata);

}

function iterateoverissues(jsondata) {
    console.log("jsondata "+typeof(jsondata))
 
    listobj.innerHTML = "";
    for (let dataissues of jsondata) {
 
        dataissues=JSON.stringify(dataissues)
        dataissues=JSON.parse(dataissues);
        const listitem = document.createElement("li");
        listitem.classList.add("listissues");

        const p1 = document.createElement("h2");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");

        p1.appendChild(document.createTextNode("Name: "+dataissues.name));
        p2.appendChild(document.createTextNode("Description: "+dataissues.description));
        p3.appendChild(document.createTextNode("labels: "+dataissues.labels));

        p4.appendChild(document.createTextNode("Author: "+ dataissues.author));

        listitem.appendChild(p1)
        listitem.appendChild(p2)

        listitem.appendChild(p3)
        listitem.appendChild(p4)


        listobj.appendChild(listitem);

    }
}


authorlist = authorlist.split(',');
let options;
options = `<option value="All" id="first" style="border-radius: 5px;"">All</option>`

authorlist.map((op, i) => {
    options += `<option value="${op}" id="${i}" style="border-radius: 5px;"">${op}</option>`
})


document.getElementById("authorselect").innerHTML = options;

function multipleFunc() {
    document.getElementById("lableselect").multiple = true;
}

const dpBtn = document.getElementById('multiSelectDropdown');
let mySelectedListItems = [];
let mySelectedListItemsText = '';

function handleCB() {
    const chBoxes = document.querySelectorAll('.dropdown-menu input[type="checkbox"]');

    mySelectedListItems = [];
    mySelectedListItemsText = '';

    console.log("mySelectedListItems "+mySelectedListItems+" "+dpBtn);

    chBoxes.forEach((checkbox) => {
        if (checkbox.checked) {
            mySelectedListItems.push(checkbox.value);
            mySelectedListItemsText += checkbox.value+" ";
        }
    });
    mySelectedListItemsText=mySelectedListItemsText.trim();
    console.log("mySelectedListItemsText "+mySelectedListItemsText);
    let labelsarray=mySelectedListItemsText.split(" ");
    console.log("labelsarray "+labelsarray+" "+labelsarray.length);

    let  newdata = dataissues.filter((item) => {
        let pass=false;   

    let ans=    item.labels.map((label)=>{  
        for (let i of labelsarray){
         var re = new RegExp(i, 'i');

         if (label.match(re)) {
            console.log("matching " + label + " " + i)
            pass=true;
            break;
        }       
       }
       
    })
     if(pass==true)
     return true;
      return false;
    }
    )
    console.log("newdata "+newdata)
    iterateoverissues(newdata);
    dpBtn.innerText =  mySelectedListItems.length > 0
            ? mySelectedListItemsText : 'Select';
}

// chBoxes.forEach((checkbox) => {
//     checkbox.addEventListener('change', handleCB);
// });

 
 
let listoflabels=document.getElementById("dropdown-menuid");
console.log("listoflabels "+listoflabels)
  listoflabelsarray=listoflabelsarray.split(',');
console.log("listoflabelsarray "+listoflabelsarray)
let checkboxeslist;
listoflabelsarray.map((item,index)=>{
    let listitem=document.createElement("li");
    checkboxeslist = `<label ><input type="checkbox" value=${item} id=${index} > ${item}</label>`;
    listitem.innerHTML=checkboxeslist;
    listitem.addEventListener('change', handleCB);

      listoflabels.appendChild(listitem)
})
 