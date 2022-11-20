var reader = new FileReader();

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
    document.li.append(img);
    document.gallery.append(li);
    // var img = document.createElement('img');
    // document.body.append(img);
}