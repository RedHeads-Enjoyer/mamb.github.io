var recipeList = new Array();

class Recipe {
    constructor(rName, rImgSrc, rDescription, rUserScore, rDifficulty, rAuthorName, rTime) {
        this.rName = rName;
        this.rImgSrc = rImgSrc;
        this.rDescription = rDescription;
        this.rUserScore = rUserScore;
        this.rDifficulty = rDifficulty;
        this.rAuthorName = rAuthorName;
        this.rTime = rTime;
    }
}



recipeList.push(new Recipe('Стейк', 'https://e1.edimdoma.ru/data/posts/0002/2542/22542-ed4_wide.jpg?1631192811', 'Типа описение', '4.2', '6', 'Xaer', '60'));
recipeList.push(new Recipe('Щи', '/img/shi/jpg', ))

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
    if (tmp.length > 76) {
        tmp = tmp.slice(0, 76) + '...';
    }

    var duration = recipe.rTime;
    if (duration > 60) {
        duration = Math.floor(duration / 60) + 'ч ' + duration % 60 + 'мин';
    }
    else if (duration == 60) {
        duration = '1ч';
    }
    else {
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





addRecipe(recipeList[0]);