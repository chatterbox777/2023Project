import { classNames } from './classNames';

describe('classNames', () => {
  test('with first parameter', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additionals parameter', () => {
    const expected = 'someClass class1 class2';

    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods parameter', () => {
    const expected = 'someClass class1 class2 hovered';

    expect(
      classNames('someClass', { hovered: true }, ['class1', 'class2'])
    ).toBe(expected);
  });

  test('with mods parameter equal false', () => {
    const expected = 'someClass class1 class2';

    expect(
      classNames('someClass', { hovered: false }, ['class1', 'class2'])
    ).toBe(expected);
  });
  test('with mods parameter equal undefined', () => {
    const expected = 'someClass class1 class2';

    expect(
      classNames('someClass', { hovered: undefined }, ['class1', 'class2'])
    ).toBe(expected);
  });
});
