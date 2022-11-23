var recipeList = new Array();

class Recipe {
    constructor(rName, rImgSrc, rDescription, rUserScore, rDifficulty, rAuthorName, rTime, type) {
        this.rName = rName;
        this.rImgSrc = rImgSrc;
        this.rDescription = rDescription;
        this.rUserScore = rUserScore;
        this.rDifficulty = rDifficulty;
        this.rAuthorName = rAuthorName;
        this.rTime = rTime;
        this.type = type;
    }
}



recipeList.push(new Recipe('Щи', '/img/shi.jpg', 'Классические щи из свежей капусты - замечательное первое блюдо для семейного обеда . Ароматные и наваристые щи на курином бульоне понравятся и взрослым и детям. А если к ним добавить сметану, свежую зелень и подать чесночные пампушки, то однозначно все попросят еще добавки.', 4.9, 5, 'СуперПовар', 70, 'soup'));
recipeList.push(new Recipe('Макароны по-флотски', '/img/makaroni.jpg', 'Макароны по-флотски - классическое блюдо советской домашней кухни. Рецепт этого блюда  появился примерно в 50-е годы XX века, и с тех пор оно стало одним из любимых в СССР. Простое, недорого, сытное, что еще нужно для популярности? Ах, да, вкус! Макароны по-флотски - очень вкусное блюдо, когда вы готовите его их хорошего мяса и правильных макарон.', 4.4, 6, 'Вовчик', 50, 'hot'));
recipeList.push(new Recipe('Компот', '/img/kompot.jpg', 'Самый вкусный компот получается из смеси сухофруктов. Ароматный и полезный. Мы всегда делаем такой на новый год и Рождество.', 3.8, 2, 'Вовчик', 150, 'drink'));
recipeList.push(new Recipe('Шарлотка', '/img/warlotka.jpg', 'Классическая шарлотка с яблоками — пирог очень простой в приготовлении, но при этом вкусный, потому невероятно популярный. Печь его лучше осенью, так как именно местные сезонные фрукты зимних сортов идеально подходят для начинки. Почему они? Потому что такие яблоки обладают ярким вкусом с приятной кислинкой и насыщенным ароматом, которых зачастую очень не хватает «круглогодичным» плодам из супермаркетов. В общем, упустить счастливую возможность получить максимальные вкусовые впечатления от классической шарлотки нельзя ни в коем случае. Приготовьте этот пирог по нашему рецепту и скорее зовите близких к столу!', 4.9, 9, 'Антоша', 120, 'bakery'));
recipeList.push(new Recipe('Мороженое', 'img/morojenoe.jpg', 'Это молочное мороженое легко приготовить. Очень вкусное, нежное, отличной консистенции, прекрасно освежает в жару. Домашнее мороженое натуральное, без всякой химии, идет на ура! Отлично замораживается, и через 2-3 часа его уже можно есть.', 4, 10, 'Гордон', 180, 'desert'));
recipeList.push(new Recipe('Салат "Цезарь"', '/img/salat.jpg', 'Один из самых популярных салатов, приготовленный дома! Салат-легенда, названный так совсем не в честь римского императора, а взявший имя шеф-повара Цезаря Кардини, который, по легенде, накормил однажды голливудских актеров салатом из того, что было.', 5, 2, 'Рамзи', 40, 'salad'));

function addRecipe(recipe) {
    var recipeGallery = document.querySelector('#result_gallery');

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

    timeImg.src = '/img/clock.png';

    var tmp = recipe.rDescription;
    if (tmp.length > 50) {
        tmp = tmp.slice(0, 50) + '...';
    }

    var duration = recipe.rTime;
    if (duration % 60 == 0) {
        duration =  duration / 60 + 'ч';
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


    recipeGallery.append(recipeCard);
}

function check(obj) {
    if (obj.value < 5) obj.value = 5;
    if (obj.value > 600) obj.value = 600;
}

for (var i = 0; i < recipeList.length; i++) {
    addRecipe(recipeList[i]);
}