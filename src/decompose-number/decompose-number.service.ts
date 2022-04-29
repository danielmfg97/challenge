import { Injectable } from '@nestjs/common';
import { CreateDecomposeNumberDto } from './dto/create-decompose-number.dto';
import { UpdateDecomposeNumberDto } from './dto/update-decompose-number.dto';
import { decomposeNumber } from '../utils/decompose-number'
import { checkPrime } from 'src/utils/prime-numbers';

@Injectable()
export class DecomposeNumberService {
  create(createDecomposeNumberDto: CreateDecomposeNumberDto) {
    return 'This action adds a new decomposeNumber';
  }

  findAll() {
    return `This action returns all decomposeNumber`;
  }

  async findOne(id: number) {
    const decomposed = await decomposeNumber(id);

    let primeNumbers: number[] = [];

    for (const number of decomposed){
      const isPrime = await checkPrime(number)     
  
      if (isPrime){
        console.log('teste')
        primeNumbers.push(number)
      }
    }

    return {decomposed, primeNumbers}
  }

  update(id: number, updateDecomposeNumberDto: UpdateDecomposeNumberDto) {
    return `This action updates a #${id} decomposeNumber`;
  }

  remove(id: number) {
    return `This action removes a #${id} decomposeNumber`;
  }
}
