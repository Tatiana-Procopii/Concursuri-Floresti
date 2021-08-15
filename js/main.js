function data(){
    var div;
    var date= new Date();
    var an, luna, zi;
    var text;

    an= date.getFullYear();
    luna = date.getMonth() + 1;
    zi = date.getDate();
    text = zi+ "/" + luna+ "/"+ an;


    div = document.getElementById("data");
    div.innerHTML = "Direcția Generală Educaţie Floreşti </br> ®Toate drepturile sunt rezervate</br>"+ text;
    // alert(text);
 
}
data();

function show(){
    document.getElementById("side-menu").classList.toggle("show");
  
  }
  
  function responsiveMenu() {
      var x = document.getElementById("myNav");
      if (x.className === "nav") {
        x.className += " responsive";
      } else {
        x.className = "nav";
      }
    }
    function hideMenu() {
      var x = document.getElementById("myNav");
      if (x.className !== "nav") {
        x.className = "nav";
      }
    }



    var index = 0;
    
    function slider() {
      var slides = document.getElementsByClassName("slide");
      var i = 0;
  
      for(i = 0; i < slides.length; i++) {
          slides [i].style.display = "none";
      }
  
      slides [index].style.display = "block";
      index++;
      if (index >= slides.length){
          index = 0;
      }
  }
  
  slider();
 setInterval(slider, 1500);



 emailjs.init("user_vFbROt1l9IOkMhIJlnDG7");
 function send() {

  if (document.getElementById("formular").checkValidity() == false) {
      document.getElementById("formular").reportValidity();
      return;
  }

  var date = {
      nume: document.getElementById("nume").value,
      email: document.getElementById("email").value,
      mesaj: document.getElementById("mesaj").value
  };

  emailjs.send("service_au3gb3h", "template_a3c043a", date)
      .then(function (raspuns) {
          alert("Mesajul a fost transmis.")
          document.getElementById("formular").reset();
      }, function (error) {
          alert("Eroare la transmitere. Contactati programatorul.")
          alert(error);
      })
}
  