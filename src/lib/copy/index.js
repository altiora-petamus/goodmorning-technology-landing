// src/lib/copy/index.js
import en from './en.js';
import { createDictionary } from '../dictionary.js';

export const i18n = createDictionary(en);
export const t = (path, vars) => i18n.t(path, vars);
export const has = (path) => i18n.has(path);
