const ExportControl = require('@tilecloud/mbgl-export-control')

const map = new mapboxgl.Map({
  container: 'map', style: 'style.json', zoom: 15, center: [130.702071, 32.805147],
  localIdeographFontFamily: "'MS Gothic', 'Hiragino Kaku Gothic Pro', sans-serif",
  attributionControl: true, hash: true
});
map.on('load', function() {
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(new ExportControl({
    dpi: 300,
    attribution: 'GSI'
  }))
})
