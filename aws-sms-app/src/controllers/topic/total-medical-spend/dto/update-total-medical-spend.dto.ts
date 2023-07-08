import { PartialType } from '@nestjs/mapped-types';
import { CreateTotalMedicalSpendDto } from './create-total-medical-spend.dto';

export class UpdateTotalMedicalSpendDto extends PartialType(CreateTotalMedicalSpendDto) {}
