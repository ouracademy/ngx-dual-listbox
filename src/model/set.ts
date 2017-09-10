export function belongs(item: any, array: any[], key: string) {
  return !!array.find(i => i[key] === item[key]);
}
export function difference(arrayOne: any[], arrayTwo: any[], key: string) {
  return arrayOne.filter(i => {
    return !belongs(i, arrayTwo, key);
  });
}
