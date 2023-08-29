
const express=require('express');
const port=8081;
const path = require('path');

const app=express();
app.use(express.static('assets'));
app.use(express.urlencoded());

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'));

let listofissue=[
    {
     
        "name":"Web-development-project",
        "description":" Eu commodo commodo laborum est pariatur eu laborum reprehenderit ullamco ad Lorem.",
        "issues":[{"name":"UI issue","description":"ui fix","author":"first","labels":["UI","css"]},
        {"name":"downloadissue","description":"sss","author":"second","labels":["UI","screen","css"]},
        {"name":"Css issue","description":"sss","author":"third","labels":["css","speed"]}],
        "author":"abc"
    },
    {
        "name":"UI-Development",
        "description":"The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly",
        "issues":[{"name":"UI issue","description":"ui fix","author":"first","labels":["UI","css"]},
        {"name":"downloadissue","description":"sss","author":"second","labels":["UI","screen","css"]},
        {"name":"Css issue","description":"sss","author":"third","labels":["css","speed"]}],
        "author":"abc"
    }
]


app.post('/createNewProject',(req,res)=>{

    console.log("req "+req.body);
    let name=req.body.name;
    let description=req.body.description;
    let author=req.body.author;
    
    listofissue.push({
        "name":name,
        "description":description,
        "issues":[],
        "author":author
    })
    res.render('home',{
        listofissue
    })
})


app.get('/NewProject',(req,res)=>{
    res.render('NewProject')
})

app.get("/projectDetails/:name",function(req,res){
    
console.log("name "+req.params.name)
  console.log("listofissue top "+listofissue+" "+JSON.stringify(listofissue))
 
    let  data = listofissue.filter((item)=>{
        
       return  item.name==req.params.name
    }
    )
    console.log("issueslist 68  "+data+" "+JSON.stringify(data));

     data=data[0];
     let listoflabelsarray ;
     let parent;
     let authorlist;
    if(data && data.issues){
      authorlist = data.issues.map((issue)=>{
        if(issue)
        return  issue.author
    
    })
    }
    if(data && data.issues){
      listoflabelsarray = data.issues.map((issue)=>{
         let arroflabels=issue.labels;
       return   arroflabels.map((item)=>item)
    
    })
    parent=listoflabelsarray[0];
}
    
    let result=[]
    // let arr = arr1.concat(arr2);
    // let mergedArr = [...new Set(arr)]
    if(listoflabelsarray)
    listoflabelsarray.map((item)=>{
        console.log(parent +" ietm "+item)
        result= parent.concat(item);
        parent=[...new Set(result)]
    })
  
     
 
   
  //  console.log("abc 100  "+abc.isArray()+" "+typeof(abc));

  //  abc=abc.split(',');
   // console.log("issueslist 111  "+abc+" "+typeof(abc));

 
  let abc=[]

  if(data && data.issues){
  let issueslist = data.issues.map((issue,index)=>{
      console.log(typeof(issue))
      console.log("issuess 77  "+JSON.stringify(issue))
      abc[index]= issue
     return   issue
  
  })
}

  console.log("issueslist 99  "+data+" "+JSON.stringify(data));
  //issueslist=(issueslist.toString()).split("%%")
    res.render('ProjectDetails',{
       data:data,
       issueslist:JSON.stringify(abc),
       authorlist:authorlist,
       listoflabelsarray:parent
    })
   
});
app.get('/home',function(req,res){
  
   return res.render('home',{
        title:"hi home",
        listofissue 

    })
})


app.get("/NewIssue/:name",function(req,res){
    console.log("inside newisuees ",req.params.name)
    return res.render('NewIssues',{
         title:"hi home", 
         name:req.params.name
     })
 })

 app.post('/createNewIssue/:name',function(req,res){
    console.log("creating issue for nAME "+req.params.name)
    let labels=req.body.labels;
    labels=labels.trim();
    labels=labels.split(" ");

    let newIssue={
        name:req.body.name,
        description:req.body.description,
        author:req.body.author,
        labels:labels
    }
    listofissue=listofissue.filter((item)=>item.name==req.params.name);
    console.log("listofissue  issues creted  "+ newIssue);

    let data=listofissue[0];
    data.issues.push(newIssue);
    console.log("listofissue  data.issues "+ JSON.stringify(data.issues));

    listofissue=listofissue.map((item)=>{
        if(item.name==req.params.name){
            return data;
        }
    })
 
     console.log("listofissue new "+JSON.stringify(listofissue));
   //// req.url =`/ProjectDetails/${req.params.name}`;
    
     res.redirect(303, `/ProjectDetails/${req.params.name}`)
     // res.render('ProjectDetails',{
    //     data:data
    // })
    // console.log("req "+req.name);
//     console.log("req "+req.body);
//         let name=req.body.name;
//     let description=req.body.description;
//     let author=req.body.author;
//     let labels=req.body.labels;
//    console.log("labels ",labels+" "+req.body)
//    let labelsarray=labels.split(" ");
//     listofissue.push({
//         "name":name,
//         "description":description,
//         "labels":labelsarray,
//         "author":author
//     })
//     console.log("listofissue "+listofissue);
   
//     return res.redirect('/home');

   
 })

 

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})