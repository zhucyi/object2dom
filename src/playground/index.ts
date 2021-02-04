// import { getFoldedLine } from './generate/index';
// import '../test.less';
// import { template } from 'lodash-es';
// import flod from '../template/flod.html';
// console.log(template(flod, { user: 1 }));
import flod from '@/template/flod.html';
import { template } from '@/util/tool';

console.log(template(flod, { user: 1 }));
