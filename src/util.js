import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "SEHWAG",
      cover:
        "https://song.vlcmusic.com/tiny_image/timthumb.php?q=100&w=250&src=images/37091.png",
      artist: "Fotty Seven",
      audio: "https://song.vlcmusic.com/download.php?track_id=37091&format=128",
      color: ["#F42D54", "#E58B89"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Grind Emiway Bantai",
      cover:
        "https://song.vlcmusic.com/tiny_image/timthumb.php?q=100&w=250&src=images/27890.png",
      artist: "Emiway Bantai",
      audio: "https://song.vlcmusic.com/download.php?track_id=27890&format=128",
      color: ["#F0F0F0", "#B3182A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;