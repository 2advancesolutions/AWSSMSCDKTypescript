import { Controller,Post, Body, HttpException, HttpStatus} from '@nestjs/common';
import { TotalMedicalSpendService } from './total-medical-spend.service';

@Controller('totalmedicalspend')
export class TotalMedicalSpendController {
  
  constructor(private readonly _totalMedicalSpendService: TotalMedicalSpendService) {}

  @Post()
  async create(@Body() req: any) {

    console.log("TotalMedicalSpendController.create: " + JSON.stringify(req));
   
    try {
      const subscription = await this._totalMedicalSpendService.subscribeToTopic(req.email);
      return subscription;
    } catch (error) {
      throw new HttpException('Failed to send email', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
}

