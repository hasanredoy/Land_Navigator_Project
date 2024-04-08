import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div className=" container mx-auto">
      <section className=" flex gap-10">
        {/* text section ' */}
        <div>
          <h1>
          Welcome To Land Navigator.
            <br />
            Let&apos;s Navigate You to You&apos;re Dream Land.
          </h1>
        </div>
        {/* slider section  */}
        <div>
          <Slider></Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;