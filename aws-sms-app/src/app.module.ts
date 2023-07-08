import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TotalMedicalSpendModule } from './controllers/topic/total-medical-spend/total-medical-spend.module';

@Module({
  imports: [TotalMedicalSpendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
