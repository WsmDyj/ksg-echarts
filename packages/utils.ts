import { App, isRef, unref } from 'vue';
import { Injection, WithInstall } from './types';

type Attrs = {
  [key: string]: any;
};
export const withInstall = <T>(comp: T): WithInstall<T> & Plugin => {
  const c = comp as any;
  c.install = (app: App) => {
    app.component(c.name, c);
  };

  return c;
};

const onRE = /^on[^a-z]/;
export const isOn = (key: string): boolean => onRE.test(key);

export function omitOn(attrs: Attrs): Attrs {
  const result: Attrs = {};
  for (const key in attrs) {
    if (!isOn(key)) {
      result[key] = attrs[key];
    }
  }

  return result;
}

export function unwrapInjected<T, V>(injection: Injection<T>, defaultValue: V): T | V | { value: T } {
  const value = isRef(injection) ? unref(injection) : injection;

  if (value && typeof value === 'object' && 'value' in value) {
    return value.value || defaultValue;
  }
  return value || defaultValue;
}