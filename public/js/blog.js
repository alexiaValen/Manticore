var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const uploadInput = document.querySelector('#myImg');


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let currentInput = document.getElementById('text1');

function insertAtCursor(elem) {
    let cursorPos = currentInput.selectionStart;
    let v = currentInput.value;
    let textBefore = v.substring(0, cursorPos);
    let textAfter = v.substring(cursorPos, v.length);
    currentInput.value = textBefore + elem.value + textAfter;
    cursorPos += elem.value.length;
    currentInput.focus();
    currentInput.setSelectionRange(cursorPos, cursorPos);
}
document.getElementById("emoticons").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "BUTTON") {
        insertAtCursor(e.target)
        console.log("clicked.")
    }
});

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
})

const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if(file && file.type.includes("image")){
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('/upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
        .then(data => {
            if(uploadType == "image"){
                addImage(data, file.name);
            } else{
                bannerPath = `${location.origin}/${data}`;
                banner.style.backgroundImage = `url("${bannerPath}")`;
            }
        })
    } else{
        alert("upload Image only");
    }
}


const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');

const constraints = {
    Audio: true,
    video: {
        width: {min: 1024, ideal: 1280, max: 1920},
        height: {min: 576,ideaql: 720, max: 1080}
    }
}

async function startWebCam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        window.stream = stream;
    } catch (e) {
        console.log(e.tostring());
    }
}

var context = canvas.getContext('2d');

snap.addEventListener('click', () => {
    context.drawImage(video, 0, 0, 640, 480);
});

startWebCam();
