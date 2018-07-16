const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 16,
  regular: 14,
  medium: 12,
  small: 10,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
    backgroundColor: 'transparent'
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
    backgroundColor: 'transparent'
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
    backgroundColor: 'transparent'
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
    backgroundColor: 'transparent'
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
    backgroundColor: 'transparent'
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
    backgroundColor: 'transparent'
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
    backgroundColor: 'transparent'
  },
  light: {
    fontFamily: type.emphasis,
    fontSize: size.regular,
    backgroundColor: 'transparent'
  },
  description: {
    fontFamily: type.base,
    fontSize: size.regular,
    backgroundColor: 'transparent'
  }
}

export default {
  type,
  size,
  style
}
