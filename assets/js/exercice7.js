function getSidi(){
  var regexp = new RegExp (/[1-9]/);
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;

  if(regexp.test(shoeSize) & regexp.test(yearOfBirth)){
    var result = (((((shoeSize * 2)+5)*50)-yearOfBirth)+1766)
    alert(result)
  }else {
    alert('Veuillez entrer un nombre supèrieur à 0')
  }
}
