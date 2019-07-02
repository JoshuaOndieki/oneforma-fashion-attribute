var gcategory = document.getElementById('gcategory');
var gpart = document.getElementById('gpart');
var gtexture = document.getElementById('gtexture');

// $.ajax({
//     url: "https://oneforma.herokuapp.com/static/src/category.json", //the path of the file is replaced by File.json
//     dataType: "json",
//     success: function (response) {
//         console.log(response); //it will return the json array
//     }
// });

const categories = JSON.parse(categorydata);
const parts = JSON.parse(partdata);
const textures = JSON.parse(texturedata);

var filteredcategories;
var filteredparts;
var filteredtextures;
var imagefilterclasses = [];

document.getElementById('genderbtns').querySelectorAll('button').forEach( btn => {
    btn.addEventListener('click', genderswitcher);
})
document.getElementById('labelsbtns').querySelectorAll('button').forEach( btn => {
    btn.addEventListener('click', labelsswitcher);
})
document.getElementById('positionbtns').querySelectorAll('button').forEach( btn => {
    btn.addEventListener('click', positionswitcher);
})
document.getElementById('categorybtns').querySelectorAll('button').forEach( btn => {
    btn.addEventListener('click', categoryswitcher);
})
document.getElementById('partbtns').querySelectorAll('button').forEach( btn => {
    btn.addEventListener('click', partswitcher);
})


function genderswitcher(ev){
    var clickedbutton = ev.currentTarget;

    if (clickedbutton.id === 'malebtn') {
        document.getElementById('femalebtn').style.backgroundColor = '#efedeb';
        imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

            return value !== 'WOMEN';

        });
        if (clickedbutton.style.backgroundColor === 'rgb(167, 149, 131)' || clickedbutton.style.backgroundColor === '#a79583') {
            clickedbutton.style.backgroundColor = '#efedeb';
            imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

                return value !== 'MEN';

            });
            if(imagefilterclasses.length > 0){
                var allimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
                for (i = 0; i < allimages.length; i++) {
                    allimages[i].style.display = "inline-flex";
                }
            }
            else {
                var allimages = gcategory.getElementsByTagName('figure');
                for (i = 0; i < allimages.length; i++) {
                    allimages[i].style.display = "inline-flex";
                }
            }
        }
        else {
            imagefilterclasses.push('MEN');
            clickedbutton.style.backgroundColor = '#a79583';
            var allimages = gcategory.getElementsByTagName('figure');
            var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
            for (i = 0; i < allimages.length; i++) {
                allimages[i].style.display = "none";
            }
            for (i = 0; i < filteredimages.length; i++) {
                filteredimages[i].style.display = "inline-flex";
            }
        }
    }
    if (clickedbutton.id === 'femalebtn') {
        document.getElementById('malebtn').style.backgroundColor = '#efedeb';
        imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

            return value !== 'MEN';

        });
        if (clickedbutton.style.backgroundColor === 'rgb(167, 149, 131)' || clickedbutton.style.backgroundColor === '#a79583') {
            clickedbutton.style.backgroundColor = '#efedeb';
            imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

                return value !== 'WOMEN';

            });
            if(imagefilterclasses.length > 0){
                var allimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
                for (i = 0; i < allimages.length; i++) {
                    allimages[i].style.display = "inline-flex";
                }
            }
            else {
                var allimages = gcategory.getElementsByTagName('figure');
                for (i = 0; i < allimages.length; i++) {
                    allimages[i].style.display = "inline-flex";
                }
            }
        }
        else {
            imagefilterclasses.push('WOMEN');
            clickedbutton.style.backgroundColor = '#a79583';
            var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
            var allimages = gcategory.getElementsByTagName('figure');
            for (i = 0; i < allimages.length; i++) {
                allimages[i].style.display = "none";
            }
            for (i = 0; i < filteredimages.length; i++) {
                filteredimages[i].style.display = "inline-flex";
            }
        }
    }
}

function positionswitcher(ev){
    var clickedbutton = ev.currentTarget;
    var posbtns = document.getElementById('positionbtns').querySelectorAll('button');

    if (clickedbutton.id === 'headbtn') {
        imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

            return value !== 'TOP' && value !== 'BOTTOM' && value !== 'TOP_BOTTOM' && value !== 'LEGS';

        });
        if (clickedbutton.style.backgroundColor === 'rgb(167, 149, 131)' || clickedbutton.style.backgroundColor === '#a79583') {
            posbtns.forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            clickedbutton.style.backgroundColor = '#efedeb';
            imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

                return value !== 'HEAD';

            });
            if(imagefilterclasses.length > 0){
                var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
                for (i = 0; i < filteredimages.length; i++) {
                    filteredimages[i].style.display = "inline-flex";
                }
            }
            else {
                var allimages = gcategory.getElementsByTagName('figure');
                for (i = 0; i < allimages.length; i++) {
                    allimages[i].style.display = "inline-flex";
                }
            }
        }
        else {
            posbtns.forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            imagefilterclasses.push('HEAD');
            clickedbutton.style.backgroundColor = '#a79583';
            var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
            var allimages = gcategory.getElementsByTagName('figure');
            for (i = 0; i < allimages.length; i++) {
                allimages[i].style.display = "none";
            }
            for (i = 0; i < filteredimages.length; i++) {
                filteredimages[i].style.display = "inline-flex";
            }
        }
    }

    if (clickedbutton.id === 'topbtn') {
        imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

            return value !== 'HEAD' && value !== 'BOTTOM' && value !== 'TOP_BOTTOM' && value !== 'LEGS';

        });
        if (clickedbutton.style.backgroundColor === 'rgb(167, 149, 131)' || clickedbutton.style.backgroundColor === '#a79583') {
            posbtns.forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            clickedbutton.style.backgroundColor = '#efedeb';
            imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

                return value !== 'TOP';

            });
            if(imagefilterclasses.length > 0){
                var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
                for (i = 0; i < filteredimages.length; i++) {
                    filteredimages[i].style.display = "inline-flex";
                }
            }
            else {
                var allimages = gcategory.getElementsByTagName('figure');
                for (i = 0; i < allimages.length; i++) {
                    allimages[i].style.display = "inline-flex";
                }
            }
        }
        else {
            posbtns.forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            imagefilterclasses.push('TOP');
            clickedbutton.style.backgroundColor = '#a79583';
            var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
            var allimages = gcategory.getElementsByTagName('figure');
            for (i = 0; i < allimages.length; i++) {
                allimages[i].style.display = "none";
            }
            for (i = 0; i < filteredimages.length; i++) {
                filteredimages[i].style.display = "inline-flex";
            }
        }
    }

    if (clickedbutton.id === 'bottombtn') {
        imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

            return value !== 'TOP' && value !== 'HEAD' && value !== 'TOP_BOTTOM' && value !== 'LEGS';

        });
        if (clickedbutton.style.backgroundColor === 'rgb(167, 149, 131)' || clickedbutton.style.backgroundColor === '#a79583') {
            posbtns.forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            clickedbutton.style.backgroundColor = '#efedeb';
            imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

                return value !== 'BOTTOM';

            });
            if(imagefilterclasses.length > 0){
                var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
                for (i = 0; i < filteredimages.length; i++) {
                    filteredimages[i].style.display = "inline-flex";
                }
            }
            else {
                var allimages = gcategory.getElementsByTagName('figure');
                for (i = 0; i < allimages.length; i++) {
                    allimages[i].style.display = "inline-flex";
                }
            }
        }
        else {
            posbtns.forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            imagefilterclasses.push('BOTTOM');
            clickedbutton.style.backgroundColor = '#a79583';
            var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
            var allimages = gcategory.getElementsByTagName('figure');
            for (i = 0; i < allimages.length; i++) {
                allimages[i].style.display = "none";
            }
            for (i = 0; i < filteredimages.length; i++) {
                filteredimages[i].style.display = "inline-flex";
            }
        }
    }

    if (clickedbutton.id === 'top_bottombtn') {
        imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

            return value !== 'TOP' && value !== 'BOTTOM' && value !== 'HEAD' && value !== 'LEGS';

        });
        if (clickedbutton.style.backgroundColor === 'rgb(167, 149, 131)' || clickedbutton.style.backgroundColor === '#a79583') {
            posbtns.forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            clickedbutton.style.backgroundColor = '#efedeb';
            imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

                return value !== 'TOP_BOTTOM';

            });
            if(imagefilterclasses.length > 0){
                var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
                for (i = 0; i < filteredimages.length; i++) {
                    filteredimages[i].style.display = "inline-flex";
                }
            }
            else {
                var allimages = gcategory.getElementsByTagName('figure');
                for (i = 0; i < allimages.length; i++) {
                    allimages[i].style.display = "inline-flex";
                }
            }
        }
        else {
            posbtns.forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            imagefilterclasses.push('TOP_BOTTOM');
            clickedbutton.style.backgroundColor = '#a79583';
            var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
            var allimages = gcategory.getElementsByTagName('figure');
            for (i = 0; i < allimages.length; i++) {
                allimages[i].style.display = "none";
            }
            for (i = 0; i < filteredimages.length; i++) {
                filteredimages[i].style.display = "inline-flex";
            }
        }
    }

    if (clickedbutton.id === 'legsbtn') {
        imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

            return value !== 'TOP' && value !== 'BOTTOM' && value !== 'TOP_BOTTOM' && value !== 'HEAD';

        });
        if (clickedbutton.style.backgroundColor === 'rgb(167, 149, 131)' || clickedbutton.style.backgroundColor === '#a79583') {
            posbtns.forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            clickedbutton.style.backgroundColor = '#efedeb';
            imagefilterclasses = imagefilterclasses.filter(function(value, index, arr){

                return value !== 'LEGS';

            });
            if(imagefilterclasses.length > 0){
                var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
                for (i = 0; i < filteredimages.length; i++) {
                    filteredimages[i].style.display = "inline-flex";
                }
            }
            else {
                var allimages = gcategory.getElementsByTagName('figure');
                for (i = 0; i < allimages.length; i++) {
                    allimages[i].style.display = "inline-flex";
                }
            }
        }
        else {
            posbtns.forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            imagefilterclasses.push('LEGS');
            clickedbutton.style.backgroundColor = '#a79583';
            var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
            var allimages = gcategory.getElementsByTagName('figure');
            for (i = 0; i < allimages.length; i++) {
                allimages[i].style.display = "none";
            }
            for (i = 0; i < filteredimages.length; i++) {
                filteredimages[i].style.display = "inline-flex";
            }
        }
    }
}

function labelsswitcher(ev){
    imagefilterclasses = [];
    var clickedbutton = ev.currentTarget;
    // clear filters
    document.getElementById('genderbtns').querySelectorAll('button').forEach(function(button){
        button.style.backgroundColor = '#efedeb';
    });
    document.getElementById('categorybtns').querySelectorAll('button').forEach(function(button) {
        button.style.backgroundColor = 'transparent';
    });
    document.getElementById('partbtns').querySelectorAll('button').forEach(function(button) {
        button.style.backgroundColor = 'transparent';
    });

    document.getElementById('positionbtns').querySelectorAll('button').forEach(function(button) {
        button.style.backgroundColor = '#efedeb';
    });

    filteredcategories = categories;
    filteredparts = parts;
    filteredtextures = textures;

    if (clickedbutton.id === 'categorybtn') {
        document.getElementById('gcategory').style.display = 'block';
        document.getElementById('gpart').style.display = 'none';
        document.getElementById('gtexture').style.display = 'none';
        if (clickedbutton.style.backgroundColor === '#a79583') {
            categoryfunc();
        }
        else {
            document.getElementById('labelsbtns').querySelectorAll('button').forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            clickedbutton.style.backgroundColor = '#a79583';
            document.getElementById('gcategory').style.display = 'block';
            document.getElementById('gpart').style.display = 'none';
            document.getElementById('gtexture').style.display = 'none';

            categoryfunc();

        }
    }
    else if (clickedbutton.id === 'partbtn') {
        document.getElementById('gcategory').style.display = 'none';
        document.getElementById('gpart').style.display = 'block';
        document.getElementById('gtexture').style.display = 'none';
        if (clickedbutton.style.backgroundColor === '#a79583') {
            partfunc();
        }
        else {
            document.getElementById('labelsbtns').querySelectorAll('button').forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            clickedbutton.style.backgroundColor = '#a79583';
            document.getElementById('gcategory').style.display = 'none';
            document.getElementById('gpart').style.display = 'block';
            document.getElementById('gtexture').style.display = 'none';

            partfunc();

        }
    }
    else if (clickedbutton.id === 'texturebtn') {
        document.getElementById('gcategory').style.display = 'none';
        document.getElementById('gpart').style.display = 'none';
        document.getElementById('gtexture').style.display = 'block';
        if (clickedbutton.style.backgroundColor === '#a79583') {
            texturefunc();
        }
        else {
            document.getElementById('labelsbtns').querySelectorAll('button').forEach(function(button){
                button.style.backgroundColor = '#efedeb';
            });
            clickedbutton.style.backgroundColor = '#a79583';
            document.getElementById('gcategory').style.display = 'none';
            document.getElementById('gpart').style.display = 'none';
            document.getElementById('gtexture').style.display = 'block';

            texturefunc();

        }
    }

}



function createFigure(name, labeltype, elementimg, gendervalue='', categoriesvalue=[], position=''){
    var figureclasses = [];
    var figure = document.createElement('FIGURE');
    figure.setAttribute('name', name);
    if (position) {
        figureclasses.push(position);
    }
    if (gendervalue) {
        figureclasses.push(gendervalue);
    }
    if (categoriesvalue) {
        figureclasses.push(categoriesvalue.join(' '));
    }
    if (figureclasses) {
        figure.setAttribute('class', figureclasses.join(' '));
    }

    figure.addEventListener('click', resizefigure);

    var figcaption = document.createElement('FIGCAPTION');
    figcaption.innerHTML = name;
    var img = document.createElement('IMG');
    img.src = 'static/src/' + labeltype + '/' + elementimg + '.png';
    figure.appendChild(img);
    figure.appendChild(figcaption);

    if (labeltype === 'category'){
        gcategory.appendChild(figure);
    }
    else if (labeltype === 'part') {
        gpart.appendChild(figure);
    }
    else if (labeltype === 'texture') {
        gtexture.appendChild(figure);
    }
}

function categoryfunc(){
    var myNode = document.getElementById("gcategory");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    document.getElementById('categorybtns').style.display = 'block';
    document.getElementById('partbtns').style.display = 'none';
    document.getElementById('asideinfo').style.display = 'none';

    filteredcategories.forEach(function(element) {
        element['IMAGES'].forEach(function(elementimg) {
            createFigure(element['NAME'], 'category', elementimg, gendervalue=element['GENDER'], categoriesvalue=element['CATEGORY'], position=element['POSITION']);
        });
    });
}

function partfunc(){
    document.getElementById('categorybtns').style.display = 'none';
    document.getElementById('partbtns').style.display = 'block';
    document.getElementById('asideinfo').style.display = 'none';
    var myNode = document.getElementById("gpart");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    filteredparts.forEach(function(element) {
        element['IMAGES'].forEach(function(elementimg) {
            createFigure(element['PART'], 'part', elementimg, categoriesvalue=element['CATEGORY']);
        });
    });

}

function texturefunc(){
    document.getElementById('categorybtns').style.display = 'none';
    document.getElementById('partbtns').style.display = 'none';
    document.getElementById('asideinfo').style.display = 'block';
    var myNode = document.getElementById("gtexture");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    filteredtextures.forEach(function(element) {
        element['IMAGES'].forEach(function(elementimg) {
            createFigure(element['TEXTURE'], 'texture', elementimg);
        });
    });

}


function categoryswitcher(ev){
    var clickedbutton = ev.currentTarget;
    var myNode = document.getElementById("gcategory");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    if (clickedbutton.style.backgroundColor === 'rgb(221,218,214)' || clickedbutton.style.backgroundColor === '#dddad6') {
        filteredcategories = categories;
        document.getElementById('categorybtns').querySelectorAll('button').forEach(function(button) {
            button.style.backgroundColor = 'transparent';
        });
        clickedbutton.style.backgroundColor = 'transparent';
        categoryfunc();

        var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
        var allimages = gcategory.getElementsByTagName('figure');
        for (i = 0; i < allimages.length; i++) {
            allimages[i].style.display = "none";
        }
        for (i = 0; i < filteredimages.length; i++) {
            filteredimages[i].style.display = "inline-flex";
        }
    }
    else {
        document.getElementById('categorybtns').querySelectorAll('button').forEach(function(button) {
            button.style.backgroundColor = 'transparent';
        });
        clickedbutton.style.backgroundColor = '#dddad6';
        filteredcategories = categories.filter(function(value, index, arr){
            return value['CATEGORY'].includes(clickedbutton.id.slice(0,-3).toUpperCase());
        });
        categoryfunc();

        if(imagefilterclasses.length > 0){
            var filteredimages = gcategory.getElementsByClassName(imagefilterclasses.join(' '));
            for (i = 0; i < filteredimages.length; i++) {
                filteredimages[i].style.display = "inline-flex";
            }
        }
    }
}


function partswitcher(ev){
    var clickedbutton = ev.currentTarget;
    var myNode = document.getElementById("gpart");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    if (clickedbutton.style.backgroundColor === 'rgb(221,218,214)' || clickedbutton.style.backgroundColor === '#dddad6') {
        filteredparts = parts;
        document.getElementById('partbtns').querySelectorAll('button').forEach(function(button) {
            button.style.backgroundColor = 'transparent';
        });
        clickedbutton.style.backgroundColor = 'transparent';
        partfunc();

        var filteredimages = gpart.getElementsByClassName(imagefilterclasses.join(' '));
        var allimages = gpart.getElementsByTagName('figure');
        for (i = 0; i < allimages.length; i++) {
            allimages[i].style.display = "none";
        }
        for (i = 0; i < filteredimages.length; i++) {
            filteredimages[i].style.display = "inline-flex";
        }
    }
    else {
        document.getElementById('partbtns').querySelectorAll('button').forEach(function(button) {
            button.style.backgroundColor = 'transparent';
        });
        clickedbutton.style.backgroundColor = '#dddad6';
        filteredparts = parts.filter(function(value, index, arr){
            return value['CATEGORY'].includes(clickedbutton.id.slice(0,-3).toUpperCase());
        });
        partfunc();

        filteredparts = parts.filter(function(value, index, arr){
            console.log(value);
            return value['CATEGORY'].includes(clickedbutton.id.slice(0,-3).toUpperCase());
        });
    }
}


function resizefigure(ev){
    image = ev.currentTarget;
    // resize all images to normal size

    /* resize this image to
    width: auto;
    height: 450px;
    display: block;

    width: auto;
    height: 100%;
    */
    console.log(image);
    var currentdisplay = image.style.display;
    console.log(currentdisplay);
    var figures = document.getElementsByTagName('figure');
    for (i = 0; i < figures.length; i++) {
        figures[i].style.width = '144px';
        figures[i].style.height = '188px';
        figures[i].style.display = 'inline-flex';

        var figureimage = figures[i].getElementsByTagName('img')[0];
        figureimage.style.width = '';
        figureimage.style.maxWidth = '144px';
        figureimage.style.height = '188px';
    }
    if (currentdisplay !== 'block') {
        image.style.width = 'auto';
        image.style.height = '450px';
        image.style.display = 'block';

        var imageimg = image.getElementsByTagName('img')[0];
        imageimg.style.maxWidth = '';
        imageimg.style.width = 'auto';
        imageimg.style.height = '100%';
        image.scrollIntoView();
    }
}
