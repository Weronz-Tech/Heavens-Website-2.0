import sky from "../assets/images/sky.jpg";

const Header = () => {
  return (
    <section className="bg-red-400 h-screen relative">
      {/* Image with SVG mask */}
      <div className="w-full h-[500px]">
        <svg 
          viewBox="0 0 1402 743" 
          className="w-full h-full px-6"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id="svg-mask">
              <path fill="white" d="M0 35C0 15.67 15.67 0 35 0H811.899C818.498 0 824.963 1.86569 830.548 5.38184L948.452 79.6181C954.037 83.1343 960.502 85 967.101 85H1367C1386.33 85 1402 100.67 1402 120V708C1402 727.33 1386.33 743 1367 743L590.101 743C583.502 743 577.037 741.134 571.452 737.618L453.548 663.382C447.963 659.866 441.498 658 434.899 658L31.5385 658C16.447 658 2.55038 648.348 0.822042 633.356C0.279069 628.646 0 623.855 0 619V35Z"/>
            </clipPath>
          </defs>
          <image 
            href={sky} 
            width="100%" 
            height="100%" 
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#svg-mask)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Header;