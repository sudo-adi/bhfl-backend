import { Request, Response, NextFunction } from 'express';
import { BFHLRequest, BFHLResponse, ErrorResponse } from '../models/types';
import { DataProcessorService } from '../services/dataProcessor';
import config from '../utils/config';

export class BFHLController {

  static async processBFHLData(
    req: Request<{}, BFHLResponse | ErrorResponse, BFHLRequest>,
    res: Response<BFHLResponse | ErrorResponse>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { data } = req.body;
      
      console.log(`Processing request with ${data.length} items`);
      

      const processedData = DataProcessorService.processData(data);
      

      const userId = DataProcessorService.generateUserId();
      

      const response: BFHLResponse = {
        is_success: true,
        user_id: userId,
        email: config.userDetails.email,
        roll_number: config.userDetails.rollNumber,
        odd_numbers: processedData.oddNumbers,
        even_numbers: processedData.evenNumbers,
        alphabets: processedData.alphabets,
        special_characters: processedData.specialCharacters,
        sum: processedData.sum.toString(),
        concat_string: processedData.concatString,
      };
      
      console.log('Request processed successfully');
      res.status(200).json(response);
      
    } catch (error) {
      console.error('Error processing BFHL data:', error);
      next(error);
    }
  }


  static async healthCheck(req: Request, res: Response): Promise<void> {
    res.status(200).json({
      status: 'healthy',
      service: 'BFHL API',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  }
}
