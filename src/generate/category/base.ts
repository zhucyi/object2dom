import { IBaseType } from '@/types';
import {
  isUndefined,
  isNull,
  isNumber,
  isBoolean,
  isString,
  isSymbol,
} from 'lodash-es';

export const baseLine = (value: IBaseType): string => String(value);

// undefined null boolean number string symbol
export const isBaseType = (value: unknown): boolean =>
  isUndefined(value) ||
  isNull(value) ||
  isNumber(value) ||
  isBoolean(value) ||
  isString(value) ||
  isSymbol(value);
