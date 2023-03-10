export function push(self: any, key: string, item: any) {
  if (!key) throw new Error("[belin.db] Enter the name of the key");
  if (!item && item !== 0)
    throw new Error("[belin.db] Enter the name of the value");

  let array = [];

  if (self.get(key)) {
    if (typeof self.get(key) !== "object") {
      array = [];
    } else {
      array = self.get(key);
    }
  }

  array.push(item);

  self.set(key, array);

  return self.get(key);
}
