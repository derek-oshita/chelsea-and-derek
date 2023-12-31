// https://blog.hubspot.com/website/video-background-css

export const WhenAndWhereCardVideo = () => {
  return (
    <section className="card-section xs:w-128 md:w-156 lg:w-160">
      <video id="background-video" autoPlay loop muted className="h-full w-full z-0">
        <source src="/media/big-sur.mp4" type="video/mp4"/>
      </video>
    </section>
  );
};