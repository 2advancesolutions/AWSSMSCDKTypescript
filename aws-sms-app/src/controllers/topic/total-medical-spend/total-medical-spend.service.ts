import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import * as AWS from 'aws-sdk';

interface SubscribeRequest {
  email: string;
}

@Injectable()
export class TotalMedicalSpendService {

  private sns: AWS.SNS;

  constructor() {
    // TODO: move logic to config file
    this.sns = new AWS.SNS({
      accessKeyId: 'AKIAW3PWZKVIPU3YXW53',
      secretAccessKey: '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',
      region: 'us-east-1'
    });
  }

  async subscribeToTopic(email: string) {

    // TODO: move logic to config file
    const topicArn = 'arn:aws:sns:us-east-1:471353349456:ProvidersPMPMTotalSpend';

    const params = {
      Protocol: 'email',
      TopicArn: topicArn,
      Endpoint: email
    }

    try {
      const subscription = await this.sns.subscribe(params).promise();
      return subscription;
    } catch (error) {
      console.error(`Failed to subscribe to topic ${topicArn} with email ${email}`, error);
      throw new HttpException('Failed to subscribe to SNS Topic', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
