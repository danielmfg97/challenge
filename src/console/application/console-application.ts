import {decomposeNumber} from '../../utils/decompose-number'
import {checkPrime} from '../../utils/prime-numbers'

export const decomposeAndCheckForPrimeNumbers = async (): Promise<void> => {
  const [parameter] = process.argv.slice(2)

  const numbertoBeChecked = Number(parameter);
  
  if (isNaN(numbertoBeChecked) || numbertoBeChecked <= 0) {
    console.error('Entrada inválida, gentileza fornecer um NÚMERO maior que 0');
    process.exit()
  }
  let primeNumbers: number[] = [];

  const decomposed = await decomposeNumber(numbertoBeChecked);

  for (const number of decomposed){
    const isPrime = await checkPrime(number)

    if (isPrime){
      console.log('teste')
      primeNumbers.push(number)
    }
  }

  console.log(`Número de entrada: ${numbertoBeChecked}`);
  console.log(`Números divisores: ${decomposed}`);
  console.log(`Números primos: ${primeNumbers}`);
}
