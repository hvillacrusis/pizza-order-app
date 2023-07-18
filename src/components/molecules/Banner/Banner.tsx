import TextBannerTitle from "../../atoms/TextBannerTitle/TextBannerTitle";

const BANNER_IMAGE_URL =
  "https://images.pexels.com/photos/5908255/pexels-photo-5908255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const BANNER_OVERLAY_URL = "banner-overlay";
const BANNER_TEXT = "Pizza perfected. Delivered to your door.";

const Banner = () => {
  return (
    <section className="banner mt-6">
      <div
        className="w-full h-64 flex items-center justify-center bg-banner-overlay"
        style={{
          backgroundImage: `url('${BANNER_IMAGE_URL}'), url('${BANNER_OVERLAY_URL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-opacity-50 bg-black p-4 rounded">
          <TextBannerTitle title={BANNER_TEXT} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
