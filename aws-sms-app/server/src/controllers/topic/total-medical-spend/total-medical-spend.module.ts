import { Module } from '@nestjs/common';
import { TotalMedicalSpendService } from './total-medical-spend.service';
import { TotalMedicalSpendController } from './total-medical-spend.controller';

@Module({
  controllers: [TotalMedicalSpendController],
  providers: [TotalMedicalSpendService],
  exports: [TotalMedicalSpendService]
})
export class TotalMedicalSpendModule {}
