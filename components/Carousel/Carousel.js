/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');

function carouselMaker(image) {
  const
  carouselDiv = document.createElement('div'),
  leftButtonDiv = document.createElement('div'),
  img1 = document.createElement('img'),
  img2 = document.createElement('img'),
  img3 = document.createElement('img'),
  img4 = document.createElement('img'),
  rightButtonDiv = document.createElement('div');

  carouselDiv.classList.add('carousel');
  leftButtonDiv.classList.add('left-button');
  rightButtonDiv.classList.add('right-button');

  const left = '\u00AB';
  const right = '\u00BB';
  leftButtonDiv.textContent = left;
  rightButtonDiv.textContent = right;

  img1.src='https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
  img2.src='https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=402&q=80';
  img3.src='https://images.unsplash.com/photo-1444824775686-4185f172c44b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
  img4.src='https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=757&q=80';

  carouselContainer.append(carouselDiv);
  carouselDiv.append(leftButtonDiv, img1, img2, img3, img4, rightButtonDiv);

  

  return carouselDiv;
}

carouselMaker();