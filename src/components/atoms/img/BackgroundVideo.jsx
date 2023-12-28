// https://blog.hubspot.com/website/video-background-css

export const BackgroundVideo = () => {
  return (
    <video id="background-video" autoPlay loop muted className="h-full w-full z-0">
      <source src="/big-sur.mp4" type="video/mp4"/>
    </video>
  );
};