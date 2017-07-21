    /*Module to create a post*/
    'use strict';
    function Post() {
      let photo_post,date_post,user_post,photo_user_post,comments;
      function newPost(photo_post,date_post,user_post,photo_user_post,comments){
          var pos = document.getElementById('container-posts');
          var div = document.createElement("div");
          div.setAttribute('class','post');
          var img = document.createElement("img");
          img.setAttribute('onclick','showModal()');
          img.setAttribute('src',photo_post);
          img.setAttribute('class','post-img');
          pos.appendChild(div);
          div.appendChild(img);
      }
      window.paintComments = function(){
          for(let i in comments){
              console.log(i);
          }
      }
      window.showModal = function() {
          var modal = document.getElementById('myModal');
          modal.setAttribute('src',photo_post);
          modal.style.display = "block";
      }

      return {
          createPost: newPost,
          showComments: paintComments,
      };
  }(document,window);

    const post1 = Post();
    post1.createPost("http://via.placeholder.com/500x800","21-Julio-2017","Aldo Aldaco Contreras","http://via.placeholder.com/40x40",["Buena imagen","Excelente camara","Woooo"]);
    const post2 = Post();
    post2.createPost("http://via.placeholder.com/600x800","21-Julio-2017","Aldo Aldaco Contreras","http://via.placeholder.com/40x40",["Buena imagen","Excelente camara","Woooo"]);
    const post3 = Post();
    post3.createPost("http://via.placeholder.com/700x800","21-Julio-2017","Aldo Aldaco Contreras","http://via.placeholder.com/40x40",["Excelente imagen","Buena camara","Woooo"]);
    const post4 = Post();
    post4.createPost("http://via.placeholder.com/800x800","21-Julio-2017","Aldo Aldaco Contreras","http://via.placeholder.com/40x40",["Buena imagen","Bien hecho","Woooo"]);
    const post5 = Post();
    post5.createPost("http://via.placeholder.com/900x800","21-Julio-2017","Aldo Aldaco Contreras","http://via.placeholder.com/40x40",["Buena imagen","Woooo","Excelente camara"]);

    var modal = document.getElementById('myModal');
    modal.onclick = function(event) {
        var modal = document.getElementById('myModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var span = document.getElementById('close');
    span.onclick = function(){
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
