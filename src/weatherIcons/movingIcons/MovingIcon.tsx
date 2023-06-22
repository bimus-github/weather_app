import MovingCloud from "./MovingCloud";
import MovingMoon from "./MovingMoon";
import MovingRain from "./MovingRain";
import MovingSnow from "./MovingSnow";
import MovingSun from "./MovingSun";

interface Props {
  sun: boolean;
  cloud: boolean;
  rain: boolean;
  moon: boolean;
  snow: boolean;
}

export default function ({ sun, cloud, moon, rain, snow }: Props) {
  if (sun && cloud && rain && snow)
    return (
      <>
        <MovingSun /> <MovingCloud /> <MovingRain /> <MovingSnow />
      </>
    );

  if (sun && cloud && rain)
    return (
      <>
        <MovingSun />
        <MovingCloud />
        <MovingRain />
      </>
    );

  if (sun && cloud && snow)
    return (
      <>
        <MovingSun />
        <MovingCloud />
        <MovingSnow />
      </>
    );

  if (sun && cloud)
    return (
      <>
        <MovingSun />
        <MovingCloud />
      </>
    );

  if (sun && snow)
    return (
      <>
        <MovingSun />
        <MovingSnow />
      </>
    );

  if (sun)
    return (
      <>
        <MovingSun />
      </>
    );

  if (moon && cloud && rain && snow)
    return (
      <>
        <MovingMoon /> <MovingCloud /> <MovingRain /> <MovingSnow />
      </>
    );

  if (moon && cloud && rain)
    return (
      <>
        <MovingMoon />
        <MovingCloud />
        <MovingRain />
      </>
    );

  if (moon && cloud && snow)
    return (
      <>
        <MovingMoon />
        <MovingCloud />
        <MovingSnow />
      </>
    );

  if (moon && snow)
    return (
      <>
        <MovingMoon />
        <MovingSnow />
      </>
    );

  if (moon && cloud)
    return (
      <>
        <MovingMoon />
        <MovingCloud />
      </>
    );

  if (moon)
    return (
      <>
        <MovingMoon />
      </>
    );

  return <>NO ICONS</>;
}
