export interface BFHLRequest {
  data: string[];
}

export interface BFHLResponse {
  is_success: boolean;
  user_id: string;
  email: string;
  roll_number: string;
  odd_numbers: string[];
  even_numbers: string[];
  alphabets: string[];
  special_characters: string[];
  sum: string;
  concat_string: string;
}

export interface ErrorResponse {
  is_success: boolean;
  error: string;
  message: string;
  timestamp?: string;
}

export interface ProcessedData {
  oddNumbers: string[];
  evenNumbers: string[];
  alphabets: string[];
  specialCharacters: string[];
  sum: number;
  concatString: string;
}
