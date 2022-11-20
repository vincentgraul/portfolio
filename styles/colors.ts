export interface Colors {
  primary: string;
  dark: {
    primary: string;
    secondary: string;
  };
  light: {
    primary: string;
    secondary: string;
  };
}

const colors: Colors = {
  primary: "#55E6C1",
  dark: {
    primary: "#2C3A47",
    secondary: "#000000",
  },
  light: {
    primary: "#FFFFFF",
    secondary: "#F0F0F0",
  },
};

export default colors;
