export const lightTheme = {
  PrimaryColor: "black",
  MainColor: "rgb(255, 255, 255)",
  Black80: "rgba(0 0 0 / 80%)",
  White: "#ffffff",
  Purple: "#9945ff",
  PurpleBold: "#7601D3",
  Disabled: "#17131b",
  Gray: "#c9c9c9",
  Green: "#14f195",
};

export const darkTheme = {
  PrimaryColor: "black",
  MainColor: "rgb(255, 255, 255)",
  Black80: "rgba(0 0 0 / 80%)",
  White: "#ffffff",
  Purple: "#9945ff",
  PurpleBold: "#7601D3",
  Disabled: "#17131b",
  Gray: "#c9c9c9",
  Green: "#14f195",
};

const sizeScreen = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const sizeScreenNumber = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(min-width: ${sizeScreen.mobileS})`,
  mobileM: `(min-width: ${sizeScreen.mobileM})`,
  mobileL: `(min-width: ${sizeScreen.mobileL})`,
  tablet: `(min-width: ${sizeScreen.tablet})`,
  laptop: `(min-width: ${sizeScreen.laptop})`,
  laptopL: `(min-width: ${sizeScreen.laptopL})`,
  desktop: `(min-width: ${sizeScreen.desktop})`,
  desktopL: `(min-width: ${sizeScreen.desktop})`,
};

export const deviceMax = {
  mobileS: `(max-width: ${sizeScreen.mobileS})`,
  mobileM: `(max-width: ${sizeScreen.mobileM})`,
  mobileL: `(max-width: ${sizeScreen.mobileL})`,
  tablet: `(max-width: ${sizeScreen.tablet})`,
  laptop: `(max-width: ${sizeScreen.laptop})`,
  laptopL: `(max-width: ${sizeScreen.laptopL})`,
  desktop: `(max-width: ${sizeScreen.desktop})`,
  desktopL: `(max-width: ${sizeScreen.desktop})`,
};
