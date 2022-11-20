var reader = new FileReader();

let = galleryCounter = 0;

function checkGallery() {
    var semi_gallery = document.querySelector('#semi_gallery');
    var gallery = document.querySelector('.gallery');
    if (semi_gallery.innerHTML.length == 0) {
        gallery.style.display = 'none';
    }
    else {
        gallery.style.display = 'block';
    }
}

checkGallery();

function avatarReadURL() {
    var preview  = document.querySelector('#avatar');
    var file = document.querySelector('#avatar_input').files[0];
    if (file) {
        reader.readAsDataURL(file);
    }
    reader.onloadend = function () {
        preview.src = reader.result;
    }
}

function semiReadURL() {
    var gallery = document.querySelector('#semi_gallery');
    var file = document.querySelector('#semi_input').files[0];
    var li = document.createElement('li');
    var img = document.createElement('img');

    if (file) {
        reader.readAsDataURL(file);
    }
    reader.onloadend = function () {
        img.src = reader.result;
    }
    img.id = galleryCounter;
    galleryCounter += 1;
    li.append(img);
    gallery.append(li);
    console.log(gallery.innerHTML);
    checkGallery();
}