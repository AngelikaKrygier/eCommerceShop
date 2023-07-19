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
  boxShadow: "0px 0px 9px 0px #B2B2B2",
};

const colorName = {
  black: "#000000",
  mineShaft: "#222222",
  white: "#fff",
  mercury: "#E8E8E8",
  swirl: "#7A7A7A",
  willowGrove: "#6B6E68",
};

export const light = {
  ...common,
  colors: {
    baseFont: colorName.mineShaft,
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
    form: {
      input: colorName.swirl,
      background: colorName.swirl,
      color: colorName.white,
    },
    loginWindow: {
      background: colorName.white,
      createAccountSpan: colorName.willowGrove,
    },
    tile: {
      background: colorName.white,
      priceBackground: colorName.mercury,
    },
  },
};

export const dark = {
  ...common,
  colors: {
    background: colorName.willowGrove,
  },
};
