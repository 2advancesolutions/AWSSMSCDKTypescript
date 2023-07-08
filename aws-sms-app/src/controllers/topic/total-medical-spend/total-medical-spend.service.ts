import { Injectable } from '@nestjs/common';
import { CreateTotalMedicalSpendDto } from './dto/create-total-medical-spend.dto';
import { UpdateTotalMedicalSpendDto } from './dto/update-total-medical-spend.dto';

//import { AWS } from 'aws-sdk';

//const creds = new AWS.SharedInifileCredentials({profile: 'default'});
//const sns = new AWS.SNS({apiVersion: '2010-03-31', credentials: creds, region: 'us-east-1'});

@Injectable()
export class TotalMedicalSpendService {
 
  create(req: any, res: any) {
    let params = {
      Protocol: 'EMAIL', /* required */
      TopicArn: 'arn:aws:sns:us-east-1:471353349456:ProvidersPMPMTotalSpend', /* required */
                 
      Endpoint: req.body.email
    }
    return 'This action adds a new totalMedicalSpend';
  }

  findAll() {
    return `This action returns all totalMedicalSpend`;
  }

  findOne(id: number) {
    return `This action returns a #${id} totalMedicalSpend`;
  }

  update(id: number, updateTotalMedicalSpendDto: UpdateTotalMedicalSpendDto) {
    return `This action updates a #${id} totalMedicalSpend`;
  }

  remove(id: number) {
    return `This action removes a #${id} totalMedicalSpend`;
  }
}
