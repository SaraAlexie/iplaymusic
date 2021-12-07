import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const AudioCard = () => (
  <AudioPlayer
    autoPlay
    src='../audio/the-way-home.mp3'
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

export default AudioCard;