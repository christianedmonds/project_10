var spotAPI = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
var spotOptions = {} ;
function displayAlbum(data) {
  var albumHTML = "";
  $.each(data.items, function (i, album) {
    albumHTML += '<a class="cover" href="' + album.images[0].url + '"';
    albumHTML += 'data-lightbox="gallery"';
    albumHTML += 'data-title="' + album.artists[0].name + ' // ' +  album.name +' // ' + album.album_type +'">';
    albumHTML += '<img src=" ' + album.images[1].url + ' "></img>';
    albumHTML += '</a>';
  });
  $(".album_wrapper").html(albumHTML);
}
$.getJSON(spotAPI, spotOptions, displayAlbum);
