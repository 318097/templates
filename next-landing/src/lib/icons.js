import { MdOutlineAutorenew } from "react-icons/md";
import { AiFillRobot } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { CgSandClock } from "react-icons/cg";
import { BsCheck, BsTwitter } from "react-icons/bs";
import { TfiEmail, TfiTwitterAlt, TfiLinkedin } from "react-icons/tfi";

const getIcon = ({ type }) => {
  switch (type) {
    case "robot":
      return <AiFillRobot />;
    case "automatic":
      return <MdOutlineAutorenew />;
    case "time":
      return <BiTimeFive />;
    case "timeline":
      return <CgSandClock />;
    case "check":
      return <BsCheck />;
    case "twitter":
      return <TfiTwitterAlt />;
    case "email":
      return <TfiEmail />;
    case "linkedin":
      return <TfiLinkedin />;
    default:
      return null;
  }
};

export { getIcon };
