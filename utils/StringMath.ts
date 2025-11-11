
export const countCharactersWithSpaces = (text: string): number => {
  return text.length;
};

export const countCharactersWithoutSpaces = (text: string): number => {
  return text.replace(/\s/g, '').length;
};

export const countWords = (text: string): number => {
  if (text.trim() === '') {
    return 0;
  }
  // This regex splits on one or more whitespace characters
  return text.trim().split(/\s+/).length;
};

export const countSentences = (text: string): number => {
  if (text.trim() === '') {
    return 0;
  }
  // This regex looks for one or more characters followed by a . ! ? and potential whitespace
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
  return sentences ? sentences.length : 0;
};

export const countLines = (text: string): number => {
  if (text === '') {
    return 0;
  }
  // This regex splits on any common newline character sequence
  return text.split(/\r\n|\r|\n/).length;
};
   