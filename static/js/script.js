let categorybtns = document.getElementById('categorybtns').querySelectorAll('button'); //get all buttons
categorybtns.forEach( btn => {
    btn.addEventListener('click', categoryfunc);
})

let partbtns = document.getElementById('partbtns').querySelectorAll('button'); //get all buttons
partbtns.forEach( btn => {
    btn.addEventListener('click', partfunc);
})


function categoryfunc(ev) {
    let id = ev.currentTarget.id;
    let btn = document.getElementById(id);
    alert(id);
}


function partfunc(ev) {
    let id = ev.currentTarget.id;
    let btn = document.getElementById(id);
    alert(id);
}


/*
function preloadImages(category, part, texture) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

function fetchdata(){
    var imageUrls = {};
    // CATEGORY
    fetch('/category')
      .then(response => {
        return response.json()
      })
      .then(data => {
        // Work with JSON data here
        imageUrls["category"] = data.data;
      })
      .catch(err => {
          console.log('CATEGORY: An error occurred!');
        // Do something for an error here
      })

      // PART
      fetch('/part')
        .then(response => {
          return response.json()
        })
        .then(data => {
          // Work with JSON data here
          imageUrls["part"] = data.data;
        })
        .catch(err => {
            console.log('PART: An error occurred!');
          // Do something for an error here
        })


        // TEXTURE
        fetch('/texture')
          .then(response => {
            return response.json()
          })
          .then(data => {
            // Work with JSON data here
            imageUrls["texture"] = data.data;
          })
          .catch(err => {
              console.log('TEXTURE: An error occurred!');
            // Do something for an error here
          })

          return imageUrls;
}


function loadtexture(){
    console.log("load texture");

    // TEXTURE
    fetch('/texture')
      .then(response => {
        return response.json()
      })
      .then(data => {
        // Work with JSON data here
        tdata = data.data;
      })
      .catch(err => {
          console.log('TEXTURE: An error occurred!');
        // Do something for an error here
    });

    console.log(tdata);

    console.log(tdata.length);
    document.getElementById('loading').style.display = 'none';
    var imageviewer = document.getElementById('imageviewer');
    console.log('texture data');
    var i;
    console.log(tdata.length);
    // tdata.forEach(function(element, i) {
    //     element.forEach(function(image, im){
    //         var figure = document.createElement('FIGURE');
    //         figure.id = element['TEXTURE'];
    //         var figcaption = document.createElement('FIGCAPTION');
    //         var img = document.createElement('IMG');
    //         img.src = '/static/src/texture/' + image + '.png';
    //         imageviewer.appendChild(figure);
    //         document.getElementById(element['TEXTURE']).appendChild(img);
    //         document.getElementById(element['TEXTURE']).appendChild(figcaption);
    //
    //     });
    // });

    for (i = 0; i < tdata.length; i++) {

    }
}

//
// loadtexture(fetchdata());

loadtexture();
*/
