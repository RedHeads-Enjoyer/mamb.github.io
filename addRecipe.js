var reader = new FileReader();

let galleryCounter = 0;
let ingredientCount = 0;
let stepsCount = 0;

var difficultyInput = document.querySelector('#difficulty');
var difficultyOutput = document.querySelector('#difficulty_val');
var veganInput = document.querySelector('#is_vegan');
var veganOutpiut = document.querySelector('#vegan_output');
var is_vegan = false;
difficultyInput.value = 0;


function checkGallery() {
    var semi_gallery = document.querySelector('#semi_gallery');
    var gallery = document.querySelector('.gallery');
    var nothing = document.querySelector('#nothing_gal');
    var btn = document.querySelector('.select_div');
    if (semi_gallery.innerHTML.length == 0) {
        nothing.style.display = 'block';
        gallery.style.display = 'none';
        btn.style.marginTop = '0px';
    }
    else {
        nothing.style.display = 'none';
        if (window.screen.width >= 780) 
        btn.style.marginTop = '44px';
    }
}

function checkIngredients() {
    var ul = document.querySelector('#ingredients_ul');
    var nothing = document.querySelector('#nothing_ing');
    if (ul.innerHTML.length == 0) {
        nothing.style.display = 'block';
    }
    else {
        nothing.style.display = 'none'
    }
}

function checkSteps() {
    var ol = document.querySelector('#steps_ol');
    var nothing = document.querySelector('#nothing_step');
    if (ol.innerHTML.length == 0) {
        nothing.style.display = 'block';
    }
    else {
        nothing.style.display = 'none';
    }
}

checkGallery();
checkIngredients();

function avatarReadURL() {
    var preview = document.querySelector('#avatar');
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
    var btn = document.createElement('button');
    var btnImg = document.createElement('img');

    if (file) {
        reader.readAsDataURL(file);
    }
    reader.onloadend = function () {
        img.src = reader.result;
    }
    img.id = 'img' + galleryCounter;
    li.id = 'li' + galleryCounter;
    btn.id = 'btn' + galleryCounter;
    btnImg.src = '/img/x.png';
    btn.setAttribute('onclick', 'delSemi(this.id)');
    galleryCounter += 1;
    btn.append(btnImg);
    li.append(img);
    li.append(btn);
    gallery.append(li);
    console.log(gallery.innerHTML);
    var gallery = document.querySelector('.gallery');
    gallery.style.display = 'block';
    checkGallery();
}

function delSemi(val) {
    var tmp = confirm("Подтвердите удаление");
    if (tmp) {
        var t = val;
        var li = document.querySelector('#li' + t.slice(3));
        li.remove();
        checkGallery();
    }
}

function delIngredient(val) {
    var tmp = confirm("Подтвердите удаление");
    if (tmp) {
        var t = val;
        var li = document.querySelector('#liIngredient' + t.slice(4));
        li.remove();
        checkIngredients();
    }
}

function delStep(val) {
    var tmp = confirm("Подтвердите удаление");
    if (tmp) {
        var t = val;
        var li = document.querySelector('#liS' + t.slice(4));
        li.remove();
        checkSteps();
    }
}

function addIngredient() {
    var ingredientsUl = document.querySelector('#ingredients_ul');

    var ingredientsLi = document.createElement('li');
    var ingredientDiv = document.createElement('div');
    var name = document.createElement('input');
    var nameLabel = document.createElement('label');
    var count = document.createElement('input');
    var countLabel = document.createElement('label');
    var btn = document.createElement('button');

    ingredientDiv.className = 'ingredients_div';
    name.type = 'text';
    name.id = 'iName' + ingredientCount;
    nameLabel.setAttribute('for', 'iName' + ingredientCount);
    name.setAttribute('placeholder', 'Введите название ингредиента');
    nameLabel.innerHTML = 'Название';
    count.type = 'text';
    count.id = 'iCount' + ingredientCount;
    countLabel.setAttribute('for', 'iCount' + ingredientCount);
    count.setAttribute('placeholder', 'Введите количество ингредиента');
    countLabel.innerHTML = 'Количество';
    btn.className = 'del_btn';
    btn.id = 'btnI' + ingredientCount;
    btn.innerHTML = 'Удалить';
    btn.setAttribute('onclick', 'delIngredient(this.id)');
    ingredientsLi.id = 'liIngredient' + ingredientCount;
    ingredientDiv.append(name);
    ingredientDiv.append(nameLabel);
    ingredientDiv.append(count);
    ingredientDiv.append(countLabel);
    ingredientDiv.append(btn);

    ingredientsLi.append(ingredientDiv);
    ingredientsUl.append(ingredientsLi);

    ingredientCount += 1;
    checkIngredients();
}

function addStep() {
    var stepsOl = document.querySelector('#steps_ol');

    var stepsLi = document.createElement('li');
    var stepsDiv = document.createElement('div');
    var textarea = document.createElement('textarea');
    var label = document.createElement('label');
    var btn = document.createElement('button');

    stepsLi.id = 'liS' + stepsCount;
    textarea.id = 'taS' + stepsCount;
    btn.id = 'btnS' + stepsCount;

    label.setAttribute('for', '#taS' + stepsCount);
    label.innerHTML = 'Описание этапа';

    btn.setAttribute('onclick', 'delStep(this.id)');
    btn.innerHTML = 'Удалить';
    btn.className = 'del_btn';

    stepsDiv.className = 'steps_div';
    textarea.setAttribute('oninput', 'this.style.height = "";this.style.height = this.scrollHeight + "px"');
    textarea.setAttribute('placeholder', 'Введите описание этапа')

    stepsDiv.append(textarea);
    stepsDiv.append(label);
    stepsDiv.append(btn);

    stepsLi.append(stepsDiv);
    stepsOl.append(stepsLi);

    stepsCount += 1;
    checkSteps();
}


difficultyInput.addEventListener('input', function () {
    var s = this.value + " ";
    if (this.value > 7) {
        s += 'СЛОЖНО';
        difficultyOutput.style.backgroundColor = 'rgb(240, 0, 0)';
    }
    else if (this.value > 4) {
        s += 'СРДЕНЕ';
        difficultyOutput.style.backgroundColor = 'orange';
    }
    else {
        s += 'ЛЕГКО';
        difficultyOutput.style.backgroundColor = 'rgb(0, 220, 0)';
    }
    difficultyOutput.innerHTML = s;
});

veganInput.addEventListener('change', function () {
    if (is_vegan) {
        veganOutpiut.innerHTML = 'Нет';
    }
    else {
        veganOutpiut.innerHTML = 'Да';
    }
    is_vegan = !is_vegan;
})