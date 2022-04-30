export const decomposeNumber = async (numberToBeDecomposed: number): Promise<number[]> => {
  let dividers: number[] = [];

  for(let i = 1; i <= numberToBeDecomposed; i++){
    if(numberToBeDecomposed % i == 0){
      dividers.push(i)
    }
  }

  return dividers;  
}
  