import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  // Brand assets

  base: "light",

  // barBg: "rgb(255,105,180)",
  // barTextColor: "white",
  // barSelectedColor: "rgb(211,211,211)s",
  // colorPrimary: "gray",

  brandTitle: "CircleWorld",
  brandImage: "circleworld-lightmode.png",
});

addons.setConfig({
  theme,
});
