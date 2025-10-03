const track = document.querySelector('.carousel-track');
let items = Array.from(track.children);
const pagination = document.querySelector('.carousel-pagination');
let currentIndex = 2; // second actual item active initially

// Clone first and last for seamless loop
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);
track.appendChild(firstClone);
track.insertBefore(lastClone, items[0]);
items = Array.from(track.children);

// Pagination dots
for(let i = 0; i < 3; i++){
  const dot = document.createElement('button');
  if(i === 1) dot.classList.add('active'); // second dot active
  dot.addEventListener('click', ()=> goToSlide(i+1));
  pagination.appendChild(dot);
}
const dots = Array.from(pagination.children);

function updateCarousel(animate=true){
  const containerWidth = document.querySelector('.carousel-container').offsetWidth;
  const itemWidth = items[0].offsetWidth + 40;
  const offset = itemWidth * currentIndex - containerWidth / 2 + itemWidth / 2;

  track.style.transition = animate ? 'transform 0.5s ease' : 'none';
  track.style.transform = `translateX(-${offset}px)`;

  items.forEach((item,i)=> item.classList.toggle('active', i===currentIndex));
  dots.forEach((dot,i)=> dot.classList.toggle('active', i===currentIndex-1));
}

function nextSlide(){
  currentIndex++;
  updateCarousel();
  if(currentIndex === items.length - 1){
    setTimeout(()=>{ currentIndex = 1; updateCarousel(false); }, 500);
  }
}

function prevSlide(){
  currentIndex--;
  updateCarousel();
  if(currentIndex === 0){
    setTimeout(()=>{ currentIndex = items.length - 2; updateCarousel(false); }, 500);
  }
}

function goToSlide(index){
  currentIndex = index;
  updateCarousel();
}

// Auto-play
setInterval(nextSlide, 3000);

// Drag / swipe with grab cursor
let startX=0, isDragging=false;
function dragStart(x){
  startX=x; isDragging=true;
  track.classList.add('grabbing');
}
function dragEnd(x){
  if(!isDragging) return;
  const diff = x - startX;
  if(diff < -50) nextSlide();
  else if(diff > 50) prevSlide();
  isDragging=false;
  track.classList.remove('grabbing');
}

// Mouse events
track.addEventListener('mousedown', e=> dragStart(e.clientX));
track.addEventListener('mouseup', e=> dragEnd(e.clientX));
track.addEventListener('mouseleave', e=> dragEnd(e.clientX));

// Touch events
track.addEventListener('touchstart', e=> dragStart(e.touches[0].clientX));
track.addEventListener('touchend', e=> dragEnd(e.changedTouches[0].clientX));
track.addEventListener('touchmove', e=> e.preventDefault());

// Initialize carousel
updateCarousel(false);