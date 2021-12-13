let fileInput = document.getElementById("fileInput")

let uploadBtn = document.getElementById("uploadBtn")
let imgDragBox = document.getElementById("imgDragBox")


imgDragBox.ondragover = function(e){
    e.preventDefault();
}

uploadBtn.onclick = function(){
    fileInput.click();
}

imgDragBox.ondrop= function(e){
    e.preventDefault();
    imgDragBox.innerHTML = "";
    uploadFiles(e.dataTransfer.files);

}

fileInput.onchange = function(e){
    let files = e.target.files
    imgDragBox.innerHTML = "";
    uploadFiles(files);

}



function uploadFiles(files){
    [...files].forEach(x=>{
        let reader = new FileReader();
        reader.onloadend = function(){
            let img = document.createElement('img')
            img.className = "img-item"
            img.setAttribute('src',reader.result)
            imgDragBox.appendChild(img)
        }
        reader.readAsDataURL(x)
    })
}