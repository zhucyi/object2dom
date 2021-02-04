import { isBaseType } from './base';

export const mapLine = (value: Map<unknown, unknown>): string => {
  const items = [];
  value.forEach((key, value) => {
    const k = isBaseType(key) ? String(key) : '{...}';
    const v = isBaseType(value) ? String(key) : '{...}';
    items.push(`${k}=>${v}`);
  });
  return `Map(${value.size}) {${items.join(',')}}`;
};

export const weakMapLine = (): string => 'WeakMap {}';

export const SetLine = (value: Set<unknown>): string => {
  const line = Array.from(value).map(item => {
    return isBaseType(value) ? String(item) : '{...}';
  });
  return `Set(${value.size}) {${line.join(',')}}`;
};

export const weakSetLine = (): string => 'WeakSet {}';
