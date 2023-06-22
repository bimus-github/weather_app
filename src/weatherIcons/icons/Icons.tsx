import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import { yellow, grey, blue } from "@mui/material/colors";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GrainIcon from "@mui/icons-material/Grain";
import CircleIcon from "@mui/icons-material/Circle";
import CloudSharpIcon from "@mui/icons-material/CloudSharp";

interface Props {
  sun: any;
  cloud: any;
  rain: any;
  moon: any;
  snow: any;
}

export default function ({ sun, cloud, moon, rain, snow }: Props) {
  if ((sun && cloud && rain) || (moon && cloud && rain))
    return (
      <>
        <CloudSharpIcon sx={{ fontSize: 80, color: grey[500] }} />{" "}
        <GrainIcon sx={{ fontSize: 50, color: blue[500] }} />
      </>
    );

  if ((sun && cloud && snow) || (moon && cloud && snow))
    return (
      <>
        <CloudSharpIcon sx={{ fontSize: 80, color: grey[500] }} />{" "}
        <AcUnitIcon sx={{ fontSize: 30, color: "#fff" }} />
      </>
    );

  if (sun && cloud)
    return (
      <>
        <LightModeSharpIcon sx={{ fontSize: 80, color: yellow[500] }} />{" "}
        <CloudSharpIcon sx={{ fontSize: 80, color: grey[500] }} />
      </>
    );

  if (moon && cloud)
    return (
      <>
        <CircleIcon sx={{ fontSize: 80, color: "#fff" }} />{" "}
        <CloudSharpIcon sx={{ fontSize: 80, color: grey[500] }} />
      </>
    );

  if (sun)
    return <LightModeSharpIcon sx={{ fontSize: 80, color: yellow[500] }} />;

  if (moon) return <CircleIcon sx={{ fontSize: 80, color: "#fff" }} />;

  return <>NO ICON</>;
}
