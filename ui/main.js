console.log('Loaded!');

 // Change the text of main
 var element = document.getElementById('main-text');
 element.innerHTML = 'New Value';
  
  //move the image
  var img = document.getElementById('Ayush');
  img.onclick = function () {
      img.style.marginLeft = '100px';
  };