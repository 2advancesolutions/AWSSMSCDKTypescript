import { Test, TestingModule } from '@nestjs/testing';
import { TotalMedicalSpendController } from './total-medical-spend.controller';
import { TotalMedicalSpendService } from './total-medical-spend.service';

describe('TotalMedicalSpendController', () => {
  let controller: TotalMedicalSpendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TotalMedicalSpendController],
      providers: [TotalMedicalSpendService],
    }).compile();

    controller = module.get<TotalMedicalSpendController>(TotalMedicalSpendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
