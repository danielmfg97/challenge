import {decomposeNumber} from '../../utils/decompose-number'
import {checkPrime} from '../../utils/prime-numbers'

export const decomposeAndCheckForPrimeNumbers = async (): Promise<void> => {
  const [parameter] = process.argv.slice(2)

  const numeroASerDividido = Number(parameter);
  
  if (isNaN(numeroASerDividido) || numeroASerDividido <= 0) {
    console.error('Entrada inválida, gentileza fornecer um NÚMERO maior que 0');
    process.exit()
  }
  let primeNumbers: number[] = [];

  const decomposed = await decomposeNumber(numeroASerDividido);

  for (const number of decomposed){
    const isPrime = await checkPrime(number)

    if (isPrime){
      console.log('teste')
      primeNumbers.push(number)
    }
  }

  console.log(primeNumbers);
}
