

function afterupdate(){
  console.log("afterupdate..");
  arr2 = localStorage.getItem("Itemsjson");
  console.log(localStorage.getItem("Itemsjson"));
  arr = JSON.parse(arr2);
  body = document.getElementById("desc");
    body.innerHTML = "";
    str ="";
    if (localStorage.getItem("Itemsjson") == null)
    {
      body.innerHTML = "";
    }
    else
    {
    arr.forEach( (element, index)  => {
      str += `
      <div class="col-sm-4 my-2">
    <div class="card">
      <div class="card-body">
        <p class="card-text">${element}</p>
        <button class="btn btn-danger btn-sm text-center " id="del" onclick = "deleted(${index})">Delete</button>
      </div>
    </div>
  </div>`;
      body.innerHTML = str;
  } 
);
    }
}
afterupdate();
let add = document.getElementById("Add");
add.addEventListener("click", ()=> {
  console.log("clicked..")
  let notes = document.getElementById("notes").value;
    if(localStorage.getItem("Itemsjson")==null)
    {
      arr=[];
      arr.push(notes);
      localStorage.setItem("Itemsjson", JSON.stringify(arr));
    }
    else{
      arr = JSON.parse(localStorage.getItem("Itemsjson"));
      arr.push(notes);
      localStorage.setItem("Itemsjson", JSON.stringify(arr));
    }
    console.log(localStorage.getItem("Itemsjson"));
    afterupdate();
    
});

function clearstorage(){
  if(confirm("do u really want clear all notes")){
    localStorage.clear();}
    afterupdate();
}

function deleted(itemindex)

{
  arr2 = localStorage.getItem("Itemsjson");
  console.log(localStorage.getItem("Itemsjson"));
  arr = JSON.parse(arr2);
  arr.splice(itemindex,1);
  localStorage.setItem("Itemsjson", JSON.stringify(arr));
    afterupdate();
}


 let inpute = document.getElementById("search");
  inpute.addEventListener("input", ()=>
  {
    let card = document.getElementsByClassName("card");
    inputtxt = inpute.value.toLowerCase();
    Array.from(card).forEach(element => {
    cardtxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
    // console.log(inputtxt);
    if(cardtxt.includes(inputtxt))
    {
      element.style.display = "block";
    }
    else{
      element.style.display = "none";
    }

 });
  })
  
    
    
    