import { TypeAnimation } from "react-type-animation";
import { WhatsappIcon } from "../icons";
import CustomButton from "../ui/CustomButton";

const HeaderLeft = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center top-36 relative gap-4 z-30 pointer-events-none">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-h10 md:text-h5 tracking-wider animated-gradient-text text-white">
          Mystic Paradise
        </h1>
        {/* <h1 className="text-h5 tracking-wider animated-gradient-text">
          Estudio Webcam
        </h1> */}
        <TypeAnimation
          className="animated-gradient-text"
          sequence={[
            "Libera",
            500,
            "Libera tu ",
            500,
            "Libera tu personalidad",
            500,
            "Libera tu ",
            500,
            "Libera tu comodidad",
            500,
            "Libera tus ",
            500,
            "Libera tus deseos",
            500,
            "Libera tu ",
            500,
            "",
            500,
          ]}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>
      <CustomButton
        title="Contáctanos"
        onClick={() =>
          window.open(
            "https://wa.me/+573125235520?text=Hola!%20Quisiera%20más%20información.",
            "_blank"
          )
        }
        icon={<WhatsappIcon />}
        variant="outlined"
      />
    </div>
  );
};

export default HeaderLeft;
