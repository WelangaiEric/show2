const imageInput = document.querySelector('#image');
var uploadedImage = "";
imageInput.addEventListener('change',function(){
    const reader = new FileReader();
    reader.addEventListener('load',()=>{
        uploadedImage=reader.result;
        document.querySelector('#display').style.backgroundImage = `url(${uploadedImage})`

    });
    reader.readAsDataURL(this.files[0]);
    document.querySelector('#display').innerHTML=''
});
