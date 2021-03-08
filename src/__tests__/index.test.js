import getHealthyPerson from '../index';

test.each([
  [{
    name: 'Маг',
    health: 90,
  }, 'healthy'],
  [{
    name: 'Войн',
    health: 51,
  }, 'healthy'],
  [{
    name: 'Эльф',
    health: 50,
  }, 'wounded'],
  [{
    name: 'Гном',
    health: 15,
  }, 'wounded'],
  [{
    name: 'Орк',
    health: 14,
  }, 'critical'],
])(('should compare health of person with expected'), (person, expected) => {
  const result = getHealthyPerson(person);
  expect(result).toBe(expected);
});
