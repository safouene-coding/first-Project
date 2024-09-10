const songsData = {
  1: {
    title: "Lost in Japan",
    artist: "Shown Mandes",
    artistImage: "./images/lost.jpg",
    description:
      "Visit <a href='https://en.wikipedia.org/wiki/Lost_in_Japan' target='_blank'>this link</a> for more details.",

    audioSrc: "songs/1.mp3",
  },
  2: {
    title: "Dance Monkey",
    artist: "Tones and  I",
    artistImage: "./images/da.jpg",
    description:
      "Visit <a href='https://fr.wikipedia.org/wiki/Dance_Monkey' target='_blank'>this link</a> for more details.",
    audioSrc: "songs/2.mp3",
  },
  3: {
    title: "Memories",
    artist: "Maroon 5",
    artistImage: "./images/maron5.jpg",
    description:
      "Visit <a href='https://fr.wikipedia.org/wiki/Memories_(chanson_de_Maroon_5)' target='_blank'>this link</a> for more details.",
    audioSrc: "songs/3.mp3",
  },

  4: {
    title: "Seniorita",
    artist: "Camila Cabello & Shawn Mandes",
    artistImage: "./images/sen.jpg",
    description:
      "Visit <a href='https://fr.wikipedia.org/wiki/Señorita_(chanson_de_Shawn_Mendes_et_Camila_Cabello)' target='_blank'>this link</a> for more details.",
    audioSrc: "songs/4.mp3",
  },

  5: {
    title: "Something just like this",
    artist: "Coldplay",
    artistImage: "./images/som.jpg",
    description:
      "Visit <a href='https://genius.com/The-chainsmokers-and-coldplay-something-just-like-this-lyrics' target='_blank'>this link</a> for more details.",
    audioSrc: "songs/5.mp3",
  },

  6: {
    title: "Torn Apart",
    artist: "Eredase",
    artistImage: "./images/to.jpg",
    description:
      "Visit <a href='https://genius.com/Eredaze-torn-apart-lyrics' target='_blank'>this link</a> for more details.",
    audioSrc: "songs/6.mp3",
  },
  7: {
    title: "Dernier Dance",
    artist: "Indila",
    artistImage: "./images/de.jpg",
    description:
      "Visit <a href='https://fr.wikipedia.org/wiki/Dernière_Danse_(chanson_d%27Indila)' target='_blank'>this link</a> for more details.",
    audioSrc: "songs/7.mp3",
  },
  8: {
    title: "Shallow",
    artist: "Lady Gaga & Bradley Cooper",
    artistImage: "./images/sha.jpg",
    description:
      "Visit <a href='https://genius.com/Lady-gaga-and-bradley-cooper-shallow-lyrics' target='_blank'>this link</a> for more details.",
    audioSrc: "songs/8.mp3",
  },
  9: {
    title: "Feeling Good ",
    artist: "Michael Buble",
    artistImage: "./images/fg.jpg",
    description:
      "Visit <a href='https://fr.wikipedia.org/wiki/Feeling_Good' target='_blank'>this link</a> for more details.",
    audioSrc: "songs/9.mp3",
  },
  10: {
    title: "I Will Survive ",
    artist: "Gloria Gaynor",
    artistImage: "./images/iws.jpg",
    description:
      "Visit <a href='https://en.wikipedia.org/wiki/I_Will_Survive' target='_blank'>this link</a> for more details.",
    audioSrc: "songs/10.mp3",
  },
};

function getQueryParam(param) {
  const urlParam = new URLSearchParams(window.location.search);
  return urlParam.get(param);
}

window.onload = function () {
  const songId = getQueryParam("id");
  const song = songsData[songId];

  if (song) {
    document.getElementById("song-title").textContent = song.title;
    document.getElementById("artist-name").textContent = song.artist;
    document.getElementById("artist-image").src = song.artistImage;
    document.getElementById("song-description").innerHTML = song.description;
    document.getElementById("audio-source").src = song.audioSrc;
    document.getElementById("audio-player").load();
  }
};
