import { Product } from './product';
import lodash from 'lodash';

export class UnderlinePen implements Product {
  constructor(private ulChar: string) {}

  use(str: string): void {
    const length: number = encodeURIComponent(str).replace(/%../g,"x").length;
    console.log(`*${str}*`);
    process.stdout.write(' ');
    for(let i = 0; i < length; i++) {
      process.stdout.write(this.ulChar);
    }
    console.log('');
  }

  createClone(): Product {
    return lodash.cloneDeep(this);
  }
}
