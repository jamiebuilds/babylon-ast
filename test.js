// @flow
import t from './';

t.classDeclaration(
  t.identifier("foo", t.numberTypeAnnotation()),
  null,
  t.classBody([]),
  []
);
