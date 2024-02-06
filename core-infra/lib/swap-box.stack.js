import { Stack, Duration } from 'aws-cdk-lib';
// const sqs = require('aws-cdk-lib/aws-sqs');

export class SwapBoxStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'SwapBoxQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
  }
}
