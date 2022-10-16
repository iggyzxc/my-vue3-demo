// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

  export default createVuetify({
    theme: {
      defaultTheme: 'customTheme',
        themes: {
          customTheme: {
            dark: true,
            colors: {
              primary: '#FFFF00',
              secondary: '#00FFFF',
              // background: "#E9E9E9",
              tertiary: '#967E76',
              button: '#A9A9A9',
              result: '#00FFFF',
              rectangleColor:'#FF3131',
              squareColor:'#33db14',
              triangleColor:'#e3d61b',
              circleColor:'#1F51FF',
            },
          },
        },
    },
  });