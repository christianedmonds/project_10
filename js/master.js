var spotAPI = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
var spotOptions = {} ;
function displayAlbum(data) {
  var albumHTML = "";
  $.each(data.items, function (i, album) {
    albumHTML += "<a>";
    albumHTML += ""
  });
};


$.getJSON(spotAPI, spotOptions, displayAlbum);
