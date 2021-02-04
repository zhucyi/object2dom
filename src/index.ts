// // import { getFoldedLine } from './generate/index';
// import './test.less';
// const getFoldedLine = 1;

// export default getFoldedLine;

// import { template } from 'lodash-es';
import flod from '@/template/flod.html';
import { template } from '@/util/tool';

console.log(template(flod, { user: 1 }));