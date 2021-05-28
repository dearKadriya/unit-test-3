import getLevel from './myFunc';
import fetchData from './http';

jest.mock('./http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('test getLevel raw ', () => {
  fetchData.mockReturnValue({ response: { level: 1 } });
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('fetchData called only once', () => {
  fetchData.mockReturnValue({ response: { level: 1 } });
  getLevel(1);
  expect(fetchData).toBeCalledTimes(1);
});

test('getLevel respons', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });
  const result = getLevel(1);
  expect(result).toEqual('Ваш текущий уровень: 1');
});
