function addArtistButton(){
    clearElements('addArtistInput');
    showForm();
}

function addButton(){
    hideform();
    
    var imgSrc= document.getElementById("artistImg").value;
    if(imgSrc === "")
        return;

    var abt = document.getElementById("artistAbout").value;
    if(abt === "")
        return;

    var name = document.getElementById("artistName").value;
    if(name === "")
        return;

    addItem(imgSrc,name,abt);
}

function addItem(src, name, blurb){
    
    var id = Date.now();
    var div = document.createElement("div");
    div.setAttribute("class","listItem");
    div.setAttribute("id",id);
    
    var img = addImg(src);
    
    var divDetails = document.createElement("div");
    divDetails.setAttribute("class","listItemDetails");

    var nam = document.createElement("p");
    nam.innerHTML = name;
    var abt = document.createElement("p")
    abt.innerHTML = blurb;
    divDetails.appendChild(nam);
    divDetails.appendChild(abt);


    var btn = document.createElement("button");
    btn.setAttribute("class","delete");
    btn.setAttribute("onClick","deleteItem(" + id + ")");
    btn.innerHTML = "Delete"

    div.appendChild(divDetails);
    div.appendChild(img);
    div.appendChild(btn);
    document.getElementById('searchListBox').appendChild(div);
}

function deleteItem(id){
    var element = document.getElementById(id);
    document.getElementById('searchListBox').removeChild(element);
}
function addImg(src){
    var img = document.createElement("img");
    img.setAttribute("src",src);
    return img;
}

function clearElements(div){
    let inp = document.getElementsByClassName(div);
    for(let i = 0; i < inp.length; i++){
        inp[i].value="";
    }
}
function hideform(){
    document.getElementById("divAddArtist").style.display = "none";
}
function showForm(){
    document.getElementById("divAddArtist").style.display = "flex";
}