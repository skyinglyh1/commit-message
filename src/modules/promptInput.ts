import { prompt } from 'inquirer'

export async function promptInput(question: string): Promise<string> {
  try {
    const { answer } = await prompt([{
      message: question,
      name: 'answer',
      type: 'input',
    }])

    return answer
  } catch (err) {
    throw err
  }
}
