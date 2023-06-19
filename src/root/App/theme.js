const common = {
  breakpoints: {
    mobileMax: "767px",
    tabletMax: "1450px",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
    hardBold: 900,
  },
  boxShadow: "0px 0px 12px 0px rgba(7, 5, 7, 0.34);",
};

const colorName = {
  black: "#000000",
  mineShaft: "#222222",
  white: "#fff",
  mercury: "#E8E8E8",
  swirl: "#D5D0C8",
  willowGrove: "#6B6E68",
};

export const light = {
  ...common,
  colors: {
    background: colorName.mercury,
    headerBar: {
      background: colorName.white,
      hoverIcon: colorName.willowGrove,
    },
    menu: {
      background: colorName.black,
      font: colorName.white,
      hoverListItem: colorName.mercury,
      hoverFontListItem: colorName.black,
    },
    content: {
      background: colorName.white,
    },
    footer: {
      background: colorName.black,
      icon: colorName.white,
      font: colorName.white,
    },
    profile: {
      background: colorName.mercury,
      fontColor: colorName.black,
      border: colorName.black,
      hoverBackground: colorName.black,
      hoverFont: colorName.white,
    },
    button: {
      background: colorName.mineShaft,
      fontColor: colorName.white,
    },
  },
};

export const dark = {
  ...common,
  colors: {
    background: colorName.mercury,
  },
};
