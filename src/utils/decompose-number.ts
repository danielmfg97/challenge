export const decomposeNumber = async (numeroDecomposto: number): Promise<number[]> => {
  let divisores: number[] = [];

  for(let i = 1; i < numeroDecomposto; i++){
    if(numeroDecomposto % i == 0){
      divisores.push(i)
    }
  }

  return divisores;  
}
  