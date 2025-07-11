const galleryEl = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const meta = {
  camera: document.getElementById('meta-camera'),
  shutter: document.getElementById('meta-shutter'),
  aperture: document.getElementById('meta-aperture'),
  iso: document.getElementById('meta-iso')
};
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

const images = [
  { src: 'images/photo1.webp', category: 'nature', camera: 'Canon R5', shutter: '1/200s', aperture: 'f/2.8', iso: '100' },
  { src: 'images/photo2.webp', category: 'street', camera: 'Sony A7 III', shutter: '1/125s', aperture: 'f/4', iso: '200' },
  { src: 'images/photo3.webp', category: 'wildlife', camera: 'Nikon Z7', shutter: '1/1000s', aperture: 'f/5.6', iso: '400' },
  { src: 'images/photo4.webp', category: 'bw', camera: 'Leica M11 Mono', shutter: '1/250s', aperture: 'f/1.4', iso: '800' }
];

function renderGallery(filter = 'all') {
  galleryEl.innerHTML = '';
  const filtered = filter === 'all' ? images : images.filter(img => img.category === filter);
  filtered.forEach((img, index) => {
    const el = document.createElement('img');
    el.src = img.src;
    el.dataset.index = index;
    el.dataset.category = img.category;
    el.addEventListener('click', () => openLightbox(index));
    galleryEl.appendChild(el);
  });
}

function openLightbox(index) {
  const img = images[index];
  currentIndex = index;
  lightboxImg.src = img.src;
  meta.camera.textContent = img.camera;
  meta.shutter.textContent = img.shutter;
  meta.aperture.textContent = img.aperture;
  meta.iso.textContent = img.iso;
  lightbox.classList.remove('hidden');
}

function closeLightbox() {
  lightbox.classList.add('hidden');
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox(currentIndex);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.filter);
  });
});

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

renderGallery();