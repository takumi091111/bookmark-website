import { Theme } from '~/interfaces/Theme'

const light: Theme = {
  colors: {
    background: '#F4F4E8',
    text: '#393A30',
    highlight: '#E6E6DA',
    border: '#E3E3D8'
  }
}

const dark: Theme = {
  colors: {
    background: '#393A30',
    text: '#B3B3AA',
    highlight: '#32332A',
    border: '#58594A'
  }
}

export { light, dark }
