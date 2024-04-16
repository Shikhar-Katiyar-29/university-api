let url = "http://universities.hipolabs.com/search?name=india";
let btn = document.querySelector("button");




btn.addEventListener("click",async ()=>{
    let state = document.querySelector("input").value;
    console.log(state);
    let colleges = await getcollege(state);
    console.log(colleges);
    showclg(colleges)
});

function showclg(colleges){
    let list = document.querySelector("ul");
    list.innerText="";

    for(col of colleges)
    {
        let li =document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);

    }

}

async function getcollege(state){
   try{
    let res= await axios.get(url);
    // return (res.data);
    let temp = state.toLocaleLowerCase();
    const ans = res.data.filter((item) =>temp === item["state-province"].toLocaleLowerCase());
    // console.log(ans);
    return ans;

   }
   catch(err){
    console.log("error :" , err);
    return [];

   } 
}