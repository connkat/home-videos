import VideoPlayer from './VideoPlayer.jsx';
function VideoCard() {
  return (
    <div className="video-card">
        <p>year</p>
        <p>month</p>
        <p>holiday</p>
        <p>family member name</p>
        <p>others</p>
        <VideoPlayer embedId=""/>
    </div>
  );
}

export default VideoCard;
