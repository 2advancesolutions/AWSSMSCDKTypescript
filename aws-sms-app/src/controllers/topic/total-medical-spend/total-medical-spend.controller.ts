import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TotalMedicalSpendService } from './total-medical-spend.service';
import { CreateTotalMedicalSpendDto } from './dto/create-total-medical-spend.dto';
import { UpdateTotalMedicalSpendDto } from './dto/update-total-medical-spend.dto';

@Controller('totalmedicalspend')
export class TotalMedicalSpendController {
  constructor(private readonly totalMedicalSpendService: TotalMedicalSpendService) {}

  @Post()
  create(@Body() email: string) {

     let params = {
      Protocol: 'EMAIL', 
      TopicArn: 'arn:aws:sns:us-east-1:471353349456:ProvidersPMPMTotalSpend',       
      Endpoint: email
    }
    return params;
  //  return this.totalMedicalSpendService.create(createTotalMedicalSpendDto);
  }

  @Get()
  findAll() {
    return this.totalMedicalSpendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.totalMedicalSpendService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTotalMedicalSpendDto: UpdateTotalMedicalSpendDto) {
    return this.totalMedicalSpendService.update(+id, updateTotalMedicalSpendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.totalMedicalSpendService.remove(+id);
  }
}
