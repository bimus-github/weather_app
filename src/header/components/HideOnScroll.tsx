import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

interface Props {
  children: any;
}

export default function HideOnScroll(props: Props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
