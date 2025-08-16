import ProductVideo from './img/ProductVideo.mp4'
export default function Video() {
  return (
    // <div className="flex justify-center items-center">
        <video className="lg:h-[30rem] w-full mt-8 lg:mt-5 rounded-lg" loop autoPlay muted>
            <source src={ProductVideo} type="video/mp4" />
                Your browser does not support the video tag.
        </video>
    // </div>
  );
}