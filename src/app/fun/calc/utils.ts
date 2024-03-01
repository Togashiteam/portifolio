export const evaluateExpressionSafely = (expression: string): number | undefined => {
  'use strict';
  let result: number | undefined;
  try {
    result = (function () {
      return eval(expression);
    })();
  } catch (error) {
    console.error('Erro ao avaliar a expressão:', error);
  }
  return result;
};

export function formatInput(expression: string) {

  // Remove espaços em branco
  expression = expression.replace(/\s/g, "");

  // Adiciona parênteses em torno de expressões negativas
  expression = expression.replace(/(?<!\d)(-\d+)(?!\d)/g, '($1)');

  // Adiciona '0' antes de um ponto se necessário
  expression = expression.replace(/(?<!\d)\.(?=\d)/g, '0.');

  // Adiciona '0' após um caractere matemático se necessário
  expression = expression.replace(/(?<=[*/+-])(?=\.)/g, '0');

  // Remove zeros à esquerda, exceto se for parte de um número decimal ou se for o único dígito
  expression = expression.replace(/(?<=^|[^0-9.])0+(?=\d+)/g, '');

  // Substitui '0' seguido por um número
  expression = expression.replace(/(?<!\.)0+(?=\d)/g, '');

  // Garante que não haja dois caracteres matemáticos seguidos
  expression = expression.replace(/[*/+-]{2,}/g, '');

  return adicionarEspacos(expression)
}

function adicionarEspacos(str: string) {
  const characters = ['/', '*', '-', '+'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (characters.includes(char)) {
      let spaceBefore = i > 0 && str[i - 1] !== ' ';
      let spaceAfter = i < str.length - 1 && str[i + 1] !== ' ';

      if (spaceBefore) result += ' ';
      result += char;
      if (spaceAfter) result += ' ';
    } else {
      result += char;
    }
  }
  return result;
}
