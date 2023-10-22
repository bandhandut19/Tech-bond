
const Banner = () => {
  return (
    <div className="hero min-h-screen mb-20 mt-16" style={{ backgroundImage: 'url(https://i.ibb.co/fQf4ZvR/cool-background-2.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-amber-500">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold line-clamp-4">WELCOME TO THE BEST TECH SHOP IN THE TOWN !</h1>
          <p className="mb-5 mt-24 text-xl font-semibold">We sell gadgets in Best Value and Price. <br />Our tech shop is your one-stop destination for cutting-edge gadgets and accessories. Explore, innovate, and shop with us today!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;