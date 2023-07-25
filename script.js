var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((d1)=>{
    for(var i=0; i<d1.length; i++){
        
        var div = document.createElement("div");div.setAttribute("class","rw");
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="${d1[i].flag}" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title" style="text-align: center">${d1[i].name}</h2>
          <h6 class="card-title" style="text-align: center">Region: ${d1[i].region}</h6>
          <h6 class="card-title" style="text-align: center">Sub-Region: ${d1[i].subregion}</h6>
          
        </div>
      </div>`

        document.body.append(div);
    }
});
