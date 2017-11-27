var playlist = {artist1: "song 1"};

function updatePlaylist(playlist,artistname,songtitle) {
  playlist.artistname = songtitle;
  return playlist

}

function removeFromPlaylist(playlist,artist){
  delete playlist.artist;
  return playlist
}
