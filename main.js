var i = 0;
var txt1 = `Hi dear.....!  <<     Abhi Main kuch special kahna chahta hu<<<         So , Please sab kuch dhan se parna...!                     > jab Maine tumhe peheli bar dekha tha < tum mujhe kuch khas lagi  <<                  or din jate jate  < tum mere or karib Ane lagi....! <<                           mujhe pata nhi kyu tumari baat har bakt mere dimag main ghum ta rahta hain...!               > tumare bare main sab kuch mujhe bohot interesting lagta hain...!                    << Main thora nervous hu kyu ke Maine kabhi yeh shabd kabhi kisi ko bola nhi or sayad future main kabhi kisi ko bolunga bhi nhi...!                   > Iss duniya main mujhe sabse jyada pyar mere paribar se hain....!                    << Abhi srif tum ek matro inshan ho jise main mere paribar ke saman pyar karta hu....!                 >main tumse bohot jada pyar karta hu <meri sweetie pie.....! |                  <<<< soo I want to ask u thttt.... Will u be mine forever evr nd ever.....!  by dhiraj`;
var speed = 55;
typeWriter();

function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}