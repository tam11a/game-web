import { red } from '@mui/material/colors';
import { experimental_extendTheme, PaletteColorOptions } from '@mui/material';

import type {} from "@mui/material/themeCssVarsAugmentation";

type AllVariant = "primary" | "gradientPrimary";


declare module "@mui/material/styles" {
    interface ColorSystem {
      customPalette: {
        common: Record<string, any>;
        variant: Record<AllVariant, PaletteColor>;
      };
    }
    interface ThemeVars {
      customPalette: {
        common: Record<string, any>;
        variant: Record<AllVariant, PaletteColor>;
      };
    }
  }
  
  declare module "@mui/material/styles/experimental_extendTheme.d" {
    interface ColorSystemOptions {
      customPalette?: {
        common: Record<string, any>;
        variant: Record<AllVariant, PaletteColorOptions>;
      };
    }
  }

// Create a theme instance.
const theme = experimental_extendTheme({
    colorSchemes: {
        light: {
            customPalette: {
                common: {
                  text: {
                    primary: "#000"
                  },
                  background: {
                    default: "#fff"
                  }
                },
                variant: {
                  primary: {
                    main: "#00f",
                    light: "#00d",
                    dark: "#00e",
                    contrastText: "#fff"
                  },
                  gradientPrimary: {
                    main: "linear-gradient(-39deg, #4991f8 0%, #4bc1ff 100%)",
                    light: "linear-gradient(135deg, #4aaffd 0%, #4992f8 100%)",
                    dark: "linear-gradient(135deg, #4cc2ff 0%, #4aa0fa 100%)",
                    contrastText: "#fff"
                  }
                }
              }
        }
    },
    typography: {
        fontFamily: 'Raleway, sans-serif'
    }
});

export default theme;

