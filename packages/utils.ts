import { App, isRef, unref } from 'vue';
import { Injection, WithInstall } from './types';

export const withInstall = <T>(comp: T): WithInstall<T> & Plugin => {
  const c = comp as any;
  c.install = (app: App) => {
    app.component(c.name, c);
  };

  return c;
};

export function unwrapInjected<T, V>(injection: Injection<T>, defaultValue: V): T | V | { value: T } {
  const value = isRef(injection) ? unref(injection) : injection;

  if (value && typeof value === 'object' && 'value' in value) {
    return value.value || defaultValue;
  }
  return value || defaultValue;
}