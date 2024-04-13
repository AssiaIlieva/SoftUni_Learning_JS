function gramophone(band, album, song) {
  let bandNameLength = band.length;
  let albumNameLength = album.length;
  let songNameLength = song.length;

  let songDuration = (bandNameLength * albumNameLength * songNameLength) / 2;
  let rotations = Math.ceil(songDuration / 2.5);

  console.log(`The plate was rotated ${rotations} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
