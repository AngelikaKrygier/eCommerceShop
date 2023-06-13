const common = {
  breakpoints: {
    mobileMax: "767px",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
    hardBold: 900,
  },
  boxShadow: "0px 1px 5px 0px #D3D3D3",
};

const colorName = {
  black: "#000000",
  white: "#fff",
  mercury: "#E8E8E8",
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
    },
  },
};

export const dark = {
  ...common,
  colors: {
    background: colorName.mercury,
  },
};
