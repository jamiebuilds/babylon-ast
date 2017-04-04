export function arrayOf(validator) {
  return {
    validator: 'arrayOf',
    arrayOf: validator
  };
}

export function objectOf(object) {
  return {
    validator: 'objectOf',
    objectOf: object
  };
}

export function oneOf(...values) {
  return {
    validator: 'oneOf',
    oneOf: values
  };
}

export function nodeOf(node) {
  return {
    validator: 'nodeOf',
    nodeOf: node,
  };
}

export function typeOf(type) {
  return {
    validator: 'typeOf',
    typeOf: type
  };
}
