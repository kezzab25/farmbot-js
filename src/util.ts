import { FB } from "./interfaces/interfaces";

export function uuid() {
  let template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  let replaceChar = function (c: string) {
      let r = Math.random() * 16 | 0;
      let v = c === "x" ? r : r & 0x3 | 0x8;
      return v.toString(16);
  };
  return template.replace(/[xy]/g, replaceChar);
};

export function assign(target: FB.Dictionary<any>, ...others: FB.Dictionary<any>[]) {
  others.forEach((key: any, value: any) => target[key] = value);
  return target;
}