import Validator from '../app';

test('Имя "Abs" должно пройти проверку', () => {
  const name = 'Abs';
  const validator = new Validator();
  const result = validator.validateUsername(name);
  expect(result).toBeTruthy();
});

test('Имя "A7777" не должно пройти проверку', () => {
  const name = 'A7777';
  const validator = new Validator();
  const result = validator.validateUsername(name);
  expect(result).toBeFalsy();
});

test('Имя "1ASD" не должно пройти проверку', () => {
  const name = '1ASD';
  const validator = new Validator();
  const result = validator.validateUsername(name);
  expect(result).toBeFalsy();
});

test('Имя "sdf-" не должно пройти проверку', () => {
  const name = 'sdf-';
  const validator = new Validator();
  const result = validator.validateUsername(name);
  expect(result).toBeFalsy();
});

test('Имя "_Adsd4400asdf--" не должно пройти проверку', () => {
  const name = '_Adsd4400asdf--';
  const validator = new Validator();
  const result = validator.validateUsername(name);
  expect(result).toBeFalsy();
});
