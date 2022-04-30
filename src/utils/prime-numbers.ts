export const checkPrime = async (decomposedNumber: number): Promise<boolean> => {
  for (let i = 2; i <= decomposedNumber; i++){
    if(decomposedNumber % i === 0){
      return false
    }
    return decomposedNumber > 1;
  }
}
    