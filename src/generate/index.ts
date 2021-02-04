import flod from '@/template/flod.html';
import code from '@/template/code.html';
import { template } from '@/util/dom';
import { baseLine, isBaseType } from '@/generate/category/base';
import { String2Dom } from '../util/dom';

function gen(value: unknown, line?: string): unknown {
  let outer;
  if (!line) {
    // gen line
    outer = '';
  }
  const tpl = template(flod, { outer });
  const $line = String2Dom(tpl);
  // if(){}
  $line.querySelector('.obj-folder-outer').addEventListener('click', () => {
    console.log(1);
  });
  return $line;
}

gen();
