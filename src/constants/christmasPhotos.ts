// Christmas Party 2025 - Event Photo Collection
// High-quality, warm, candid Christmas party photography

export const CHRISTMAS_PARTY_PHOTOS = [
  'https://images.unsplash.com/photo-1745573673416-66e829644ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Christmas party celebration indoor
  'https://images.unsplash.com/photo-1671465845141-664c1cdce66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Christmas lights bokeh warm
  'https://images.unsplash.com/photo-1734027851931-6e06637151ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Christmas dinner festive table
  'https://images.unsplash.com/photo-1639124432501-eea02aa820d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Christmas tree ornaments closeup
  'https://images.unsplash.com/photo-1642775073532-65020022b8d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Holiday party people laughing
  'https://images.unsplash.com/photo-1605045185511-0a1252167f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Christmas candles cozy atmosphere
  'https://images.unsplash.com/photo-1639691454326-4a77a689cbc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Festive desserts christmas sweets
  'https://images.unsplash.com/photo-1698836638897-b210b43d4365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Christmas decorations indoor warm
  'https://images.unsplash.com/photo-1763429760275-7c464c1d1ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Friends celebrating christmas together
  'https://images.unsplash.com/photo-1745433921726-f43836696276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Christmas party drinks toast
  'https://images.unsplash.com/photo-1763598811218-76d67f9ea18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Holiday gathering indoor festive
  'https://images.unsplash.com/photo-1575384043001-f37f48835528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Christmas gift wrapping hands
];

// Generate cycling array for gallery views
export const getChristmasPhotos = (count: number) => {
  const photos = [];
  for (let i = 0; i < count; i++) {
    photos.push(CHRISTMAS_PARTY_PHOTOS[i % CHRISTMAS_PARTY_PHOTOS.length]);
  }
  return photos;
};
