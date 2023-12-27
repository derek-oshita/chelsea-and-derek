export const BackgroundVideo = () => {
  return (
    <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg"  className="h-screen w-screen z-0">
      <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"/>
    </video>
  );
};