import { ProcessedData } from '../models/types';
import config from '../utils/config';

export class DataProcessorService {

  static processData(data: string[]): ProcessedData {
    const oddNumbers: string[] = [];
    const evenNumbers: string[] = [];
    const alphabets: string[] = [];
    const specialCharacters: string[] = [];
    let sum = 0;

    for (const item of data) {
      const trimmedItem = item.trim();
      
      if (this.isNumeric(trimmedItem)) {
        const num = parseInt(trimmedItem, 10);
        sum += num;
        
        if (num % 2 === 0) {
          evenNumbers.push(trimmedItem);
        } else {
          oddNumbers.push(trimmedItem);
        }
      }

      else if (this.isAlphabetic(trimmedItem)) {
        alphabets.push(trimmedItem.toUpperCase());
      }

      else {
        specialCharacters.push(trimmedItem);
      }
    }


    const concatString = this.generateConcatString(alphabets);

    return {
      oddNumbers,
      evenNumbers,
      alphabets,
      specialCharacters,
      sum,
      concatString,
    };
  }


  private static isNumeric(value: string): boolean {
    return /^\d+$/.test(value) && !isNaN(parseInt(value, 10));
  }

  private static isAlphabetic(value: string): boolean {
    return /^[a-zA-Z]+$/.test(value);
  }

  private static generateConcatString(alphabets: string[]): string {
    if (alphabets.length === 0) {
      return '';
    }


    const allChars = alphabets.join('');
    const reversedChars = allChars.split('').reverse().join('');

    let result = '';
    for (let i = 0; i < reversedChars.length; i++) {
      if (i % 2 === 0) {
        result += reversedChars[i].toUpperCase();
      } else {
        result += reversedChars[i].toLowerCase();
      }
    }

    return result;
  }


  static generateUserId(): string {
    return `${config.userDetails.fullName}_${config.userDetails.birthDate}`;
  }
}
