// theme.ts

export interface Theme {
    colors: {
      primary: string;
      secondary: string;

    };
    spacing: {
      small: string;
      medium: string;
      large: string;

    };

  }
  
  export const defaultTheme: Theme = {
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
    },
    spacing: {
      small: '8px',
      medium: '16px',
      large: '24px',
    },

  };
  