import lodash from 'lodash';
import { Product } from './product';

export class MessageBox implements Product {
  constructor(private decochar: string) {}

  use(str: string): void {
    const length: number = encodeURIComponent(str).replace(/%../g,"x").length;
    for(let i = 0; i < length + 4; i++) {
      process.stdout.write(this.decochar);
    }
    console.log('');
    console.log(`${this.decochar} ${str} ${this.decochar}`);
    for(let i = 0; i < length + 4; i++) {
      process.stdout.write(this.decochar);
    }
    console.log('');
  }

  createClone(): Product {
    return lodash.cloneDeep(this);
  }
}