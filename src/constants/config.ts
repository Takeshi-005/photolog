export const MIN_SCREEN_SIZE = 760;
export const CONTENT_WIDTH = 1020;

const obj = {
  value: '',
  tel: ''
};

type Obj = typeof obj;
const name = Object.keys(obj) as [keyof Obj];

const names = Object.fromEntries([name, name]);

console.log(names);
