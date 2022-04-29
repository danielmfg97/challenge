export const consoleApplication = async (): Promise<void> => {
  const argumento = process.argv.slice(2)

  const [nome] = argumento
  console.log(nome)
}
