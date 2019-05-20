console.log('bloop');
let item = document.querySelectorAll('.button');
let itemOne = document.getElementById('choice-1');
let itemTwo = document.getElementById('choice-2');
let itemThree = document.getElementById('choice-3');
let imageOne = document.getElementById('image-1');
let imageTwo = document.getElementById('image-2');
let imageThree = document.getElementById('image-3');

//There's a better and shorter way to do this but...
item.forEach(elem => {
  elem.addEventListener('click', function() {
    const clicked = this.id;
    if (clicked == 'choice-1') {
      //add/remove classes on images
      itemOne.classList.add('active');
      itemTwo.classList.remove('active');
      itemThree.classList.remove('active');

      //add/remove classes on images
      imageOne.classList.add('active');
      imageTwo.classList.remove('active');
      imageThree.classList.remove('active');
    }
    if (clicked == 'choice-2') {
      itemTwo.classList.add('active');
      itemOne.classList.remove('active');
      itemThree.classList.remove('active');

      //add/remove classes on images
      imageTwo.classList.add('active');
      imageOne.classList.remove('active');
      imageThree.classList.remove('active');
    }
    if (clicked == 'choice-3') {
      console.log('clicked three');
      itemThree.classList.add('active');
      itemOne.classList.remove('active');
      itemTwo.classList.remove('active');

      //add/remove classes on images
      imageThree.classList.add('active');
      imageOne.classList.remove('active');
      imageTwo.classList.remove('active');
    }
  });
});
