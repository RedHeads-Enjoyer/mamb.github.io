var searchName = document.querySelector('#name_search');
var cbSoup = document.querySelector('#soup');
var cbHot = document.querySelector('#hot');
var cbDrink = document.querySelector('#drink');
var cbBakery = document.querySelector('#bakery');
var cbDessert = document.querySelector('#dessert');
var cbSalad = document.querySelector('#salad');
var cbSouce = document.querySelector('#souce');
var radAnyScore = document.getElementsByName('score');
var timeFrom = document.querySelector('#time_from');
var timeTo = document.querySelector('#time_to');
var forVegan = document.querySelector('#for_vegetarian');
var recipeCount = document.querySelector('#recipe_count');
var menu = document.querySelector('.search_div');
var menuBtn = document.querySelector('#open_menu');
var MenuText = document.querySelector('#menu_text');

var isMenuOpen = false;

var recipeList = new Array();
var displayList = new Array();

displayList = recipeList;

class Recipe {
    constructor(rName, rImgSrc, rDescription, rUserScore, rDifficulty, rAuthorName, rTime, rVegan, type) {
        this.rName = rName;
        this.rImgSrc = rImgSrc;
        this.rDescription = rDescription;
        this.rUserScore = rUserScore;
        this.rDifficulty = rDifficulty;
        this.rAuthorName = rAuthorName;
        this.rTime = rTime;
        this.rVegan = rVegan;
        this.type = type;
    }
}

recipeList.push(new Recipe('Щи', 'img/shi.jpg', 'Классические щи из свежей капусты - замечательное первое блюдо для семейного обеда . Ароматные и наваристые щи на курином бульоне понравятся и взрослым и детям. А если к ним добавить сметану, свежую зелень и подать чесночные пампушки, то однозначно все попросят еще добавки.', 4.9, 5, 'СуперПовар', 70, false, 'soup'));
recipeList.push(new Recipe('Макароны по-флотски', 'img/makaroni.jpg', 'Макароны по-флотски - классическое блюдо советской домашней кухни. Рецепт этого блюда  появился примерно в 50-е годы XX века, и с тех пор оно стало одним из любимых в СССР. Простое, недорого, сытное, что еще нужно для популярности? Ах, да, вкус! Макароны по-флотски - очень вкусное блюдо, когда вы готовите его их хорошего мяса и правильных макарон.', 4.4, 6, 'Вовчик', 50, false, 'hot'));
recipeList.push(new Recipe('Компот', 'img/kompot.jpg', 'Самый вкусный компот получается из смеси сухофруктов. Ароматный и полезный. Мы всегда делаем такой на новый год и Рождество.', 3.8, 2, 'Вовчик', 150, true, 'drink'));
recipeList.push(new Recipe('Шарлотка', 'img/warlotka.jpg', 'Классическая шарлотка с яблоками — пирог очень простой в приготовлении, но при этом вкусный, потому невероятно популярный. Печь его лучше осенью, так как именно местные сезонные фрукты зимних сортов идеально подходят для начинки. Почему они? Потому что такие яблоки обладают ярким вкусом с приятной кислинкой и насыщенным ароматом, которых зачастую очень не хватает «круглогодичным» плодам из супермаркетов. В общем, упустить счастливую возможность получить максимальные вкусовые впечатления от классической шарлотки нельзя ни в коем случае. Приготовьте этот пирог по нашему рецепту и скорее зовите близких к столу!', 4.9, 9, 'Антоша', 120, true, 'bakery'));
recipeList.push(new Recipe('Мороженое', 'img/morojenoe.jpg', 'Это молочное мороженое легко приготовить. Очень вкусное, нежное, отличной консистенции, прекрасно освежает в жару. Домашнее мороженое натуральное, без всякой химии, идет на ура! Отлично замораживается, и через 2-3 часа его уже можно есть.', 4, 10, 'Гордон', 180, false, 'dessert'));
recipeList.push(new Recipe('Салат "Цезарь"', 'img/salat.jpg', 'Один из самых популярных салатов, приготовленный дома! Салат-легенда, названный так совсем не в честь римского императора, а взявший имя шеф-повара Цезаря Кардини, который, по легенде, накормил однажды голливудских актеров салатом из того, что было.', 5, 2, 'Рамзи', 40, false, 'salad'));

function addRecipe(recipe) {
    var recipeGallery = document.querySelector('#result_gallery');

    var recipeLink = document.createElement('a');
    var recipeCard = document.createElement('div');
    var recipeName = document.createElement('p');
    var imageDiv = document.createElement('div');
    var recipeImg = document.createElement('img');
    var recipeDescription = document.createElement('p');
    var lineFix = document.createElement('div');
    var recipeInfo = document.createElement('div');
    var userScore = document.createElement('p');
    var difficulty = document.createElement('p');
    var authorName = document.createElement('p');
    var recipeTime = document.createElement('div');
    var timeImg = document.createElement('img');
    var timeCounter = document.createElement('p');

    recipeCard.className = 'recipe_card';
    recipeName.className = 'recipe_name';
    imageDiv.className = 'image_div';
    recipeImg.className = 'recipe_img';
    recipeDescription.className = 'recipe_description';
    recipeInfo.className = 'recipe_info';
    recipeTime.className = 'recipe_time';
    lineFix.className = 'line_fix';

    timeImg.src = 'img/clock.png';
    recipeLink.href = '/openRecipe.html';

    var tmp = recipe.rDescription;
    if (tmp.length > 50) {
        tmp = tmp.slice(0, 50) + '...';
    }

    var duration = recipe.rTime;
    if (duration % 60 == 0) {
        duration = duration / 60 + 'ч';
    } else if (duration > 60) {
        duration = Math.floor(duration / 60) + 'ч ' + duration % 60 + 'мин';
    } else {
        duration = duration + 'мин';
    }

    recipeName.innerHTML = recipe.rName;
    recipeImg.src = recipe.rImgSrc;
    recipeDescription.innerHTML = tmp;
    userScore.innerHTML = 'Оценка: ' + recipe.rUserScore + '/5';
    difficulty.innerHTML = 'Сложность: ' + recipe.rDifficulty + '/10';
    authorName.innerHTML = recipe.rAuthorName;
    timeCounter.innerHTML = duration;


    imageDiv.append(recipeImg);
    recipeInfo.append(userScore);
    recipeInfo.append(difficulty);
    recipeInfo.append(authorName);
    recipeInfo.append(recipeTime);
    recipeTime.append(timeImg);
    recipeTime.append(timeCounter);
    recipeCard.append(recipeName);
    recipeCard.append(imageDiv);
    lineFix.append(recipeDescription);
    recipeCard.append(lineFix);
    recipeCard.append(recipeInfo)
    recipeLink.append(recipeCard);


    recipeGallery.append(recipeLink);
}

function check(obj) {
    if (obj.value < 5) obj.value = 5;
    if (obj.value > 600) obj.value = 600;
}

for (var i = 0; i < displayList.length; i++) {
    addRecipe(displayList[i]);
}

if (displayList.length == 0) recipeCount.innerHTML = 'По вашему запросу нчего не найдено :(';
else recipeCount.innerHTML = 'Найдено ' + displayList.length + ' рецептов';

function searchRecipe() {
    var tmp = recipeList;
    var name = searchName.value;
    if (name.length > 0) {
        var cl = new Array();
        tmp = cl;
        for (let i = 0; i < recipeList.length; i++) {
            if (recipeList[i].rName.toLowerCase().includes(name.toLowerCase())) {
                tmp.push(recipeList[i]);
            }
        }
    }

    var tmp2 = new Array();

    if (cbSoup.checked) {
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].type == 'soup') {
                tmp2.push(tmp[i]);
            }
        }
    }

    if (cbHot.checked) {
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].type == 'hot') {
                tmp2.push(tmp[i]);
            }
        }
    }

    if (cbDrink.checked) {
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].type == 'drink') {
                tmp2.push(tmp[i]);
            }
        }
    }

    if (cbBakery.checked) {
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].type == 'bakery') {
                tmp2.push(tmp[i]);
            }
        }
    }

    if (cbDessert.checked) {
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].type == 'dessert') {
                tmp2.push(tmp[i]);
            }
        }
    }

    if (cbSalad.checked) {
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].type == 'salad') {
                tmp2.push(tmp[i]);
            }
        }
    }

    if (cbSouce.checked) {
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].type == 'souce') {
                tmp2.push(tmp[i]);
            }
        }
    }

    var tmp3 = tmp2;

    if (radAnyScore[0].checked) {
        var tmp3 = new Array();
        for (let i = 0; i < tmp2.length; i++) {
            if (tmp2[i].rUserScore >= 4) {
                tmp3.push(tmp2[i]);
            }
        }
    }

    var tmp4 = tmp3;
    var l = timeFrom.value;
    var h = timeTo.value;
    if (l.length > 0 || h.length > 0) {
        var tmp4 = new Array()
        if (l.length == 0) l = 5;
        if (h.length == 0) h = 600;
        for (let i = 0; i < tmp3.length; i++) {
            if (tmp3[i].rTime >= l && tmp3[i].rTime <= h) {
                tmp4.push(tmp3[i]);
            }
        }
    }

    var tmp5 = tmp4;

    if (forVegan.checked) {
        var tmp5 = new Array();
        for (let i = 0; i < tmp4.length; i++) {
            if (tmp4[i].rVegan == true) {
                tmp5.push(tmp4[i])
            }
        }
    }

    var recipeGallery = document.querySelector('#result_gallery');
    recipeGallery.innerHTML = '';

    if (tmp5.length == 0) recipeCount.innerHTML = 'По вашему запросу нчего не найдено :(';
    else if (tmp5.length == 1) recipeCount.innerHTML = 'Найден 1 рецепт';
    else if (tmp5.length < 5) recipeCount.innerHTML = 'Найдено ' + tmp5.length + ' рецепта'
    else recipeCount.innerHTML = 'Найдено ' + tmp5.length + ' рецептов';

    for (let i = 0; i < tmp5.length; i++) {
        addRecipe(tmp5[i]);
    }
}

function openMenu() {
    if (!isMenuOpen) {
        MenuText.innerHTML = 'ЗАКРЫТЬ МЕНЮ';
        menuBtn.style.left = '282px'
        menu.style.left = '0px';
        isMenuOpen = true;
    }
    else {
        MenuText.innerHTML = 'ОТКРЫТЬ МЕНЮ';
        menuBtn.style.left = '0px';
        menu.style.left = '-282px';
        isMenuOpen = false;
    }
}