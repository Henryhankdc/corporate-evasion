console.log('bloop');
let item = document.querySelectorAll('.button');
let itemOne = document.getElementById('choice-1');
let itemTwo = document.getElementById('choice-2');
let itemThree = document.getElementById('choice-3');
let imageOne = document.getElementById('image-1');
let imageTwo = document.getElementById('image-2');
let imageThree = document.getElementById('image-3');

item.forEach(elem => {
  elem.addEventListener('click', function() {
    const clicked = this.id;
    if (clicked == 'choice-1') {
      imageOne.classList.add('active');
      imageTwo.classList.remove('active');
      imageThree.classList.remove('active');
    }
    if (clicked == 'choice-2') {
      imageTwo.classList.add('active');
      imageOne.classList.remove('active');
      imageThree.classList.remove('active');
    }
    console.log(imageThree);
    if (clicked == 'choice-3') {
      imageThree.classList.add('active');
      imageOne.classList.remove('active');
      imageTwo.classList.remove('active');
    }
  });
});
