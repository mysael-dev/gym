import { globalStyle, style } from "@vanilla-extract/css";

export const lightTheme = style({
  backgroundColor: '#ffffff',
  color: '#000000',
});

export const darkTheme = style({
  backgroundColor: '#121212',
  color: '#ffffff',
});

export const myStyle = style({
    display: 'flex',
    paddingTop: '3px'
  });
  

globalStyle('body', {
    margin: 0
  });

// import { createGlobalTheme } from '@vanilla-extract/css';

// export const vars = createGlobalTheme(':root', {
//   color: {
//     brand: 'blue'
//   },
//   font: {
//     body: 'arial'
//   }
// });