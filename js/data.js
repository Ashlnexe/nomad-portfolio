// The work. Order is the order they tile across the canvas.
// `src` is null while media is pending — the canvas renders a placeholder tile.
// `title` is the placeholder label shown inside each empty tile.
export const WORKS = [
  { src: './assets/tiles/video-1.mp4', title: '' },
  { src: './assets/tiles/video-2.mp4', title: '' },
  { src: './assets/tiles/video-3.mp4', title: '' },
  { src: './assets/tiles/video-4.mp4', title: '' },
  { src: './assets/tiles/video-5.mp4', title: '' },
  { src: './assets/tiles/video-1.mp4', title: '' },
  { src: './assets/tiles/video-2.mp4', title: '' },
  { src: './assets/tiles/video-3.mp4', title: '' }
];

// Text cards live in the same grid as the films and are clickable.
export const CARDS = [
  { text: 'about us',   route: 'about'   },
  { text: 'contact us', route: 'contact' }
];
