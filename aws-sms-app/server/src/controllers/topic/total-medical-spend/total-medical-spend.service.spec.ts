import { Test, TestingModule } from '@nestjs/testing';
import { TotalMedicalSpendService } from './total-medical-spend.service';

describe('TotalMedicalSpendService', () => {
  let service: TotalMedicalSpendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TotalMedicalSpendService],
    }).compile();

    service = module.get<TotalMedicalSpendService>(TotalMedicalSpendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
