import { Injectable } from '@nestjs/common';
import { decomposeNumber } from '../utils/decompose-number'
import { checkPrime } from 'src/utils/prime-numbers';

@Injectable()
export class NumberToCheckService {
  async findOne(id: number) {
    const decomposed = await decomposeNumber(id);

    let primeNumbers: number[] = [];

    for (const number of decomposed){
      const isPrime = await checkPrime(number)     
  
      if (isPrime){
        primeNumbers.push(number)
      }
    }

    return {decomposed, primeNumbers}
  }
}
