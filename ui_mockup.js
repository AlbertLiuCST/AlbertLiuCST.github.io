function init(){
    if(localStorage.getItem("artist") == null){
        let artist = [];
        localStorage.setItem("artist",JSON.stringify(artist));
    }
    loadArtists();
}
function loadArtists(){
    var artists = JSON.parse(localStorage.getItem("artist"));
    artists.forEach(function(art) {  addItem(art.img,art.name,art.abt); });
    
}
function searchArtistButton(){
    clearListItem();
    let search = document.getElementById("searchInput").value;
    var artists = JSON.parse(localStorage.getItem("artist"));
    artists.forEach(function(art) {  
        if(art.name.includes(search))
            addItem(art.img,art.name,art.abt); 
    });
}
function clearListItem(){
    let search = document.getElementById("searchListBox");
    search.innerHTML = ""

}
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
    
    saveArtist(imgSrc, name,abt);
    addItem(imgSrc,name,abt);
}

function saveArtist(img, name,abt){
    let artist = {};
    artist.img = img;
    artist.name = name;
    artist.abt = abt;

    let artistArr = JSON.parse(localStorage.getItem("artist"))
    artistArr.push(artist);
    localStorage.setItem("artist",JSON.stringify(artistArr));
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
    deleteArtist(id);
    var element = document.getElementById(id);
    document.getElementById('searchListBox').removeChild(element);

}
function deleteArtist(id){
    let name = document.getElementById(id).innerText.split("\n")[0];
    let arr = JSON.parse(localStorage.getItem("artist"))
    let newArr = arr.filter(function(obj){
        return obj.name != name; 
    });
    localStorage.setItem("artist",JSON.stringify(newArr));
    
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