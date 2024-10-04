import { EventBridgeClient, EventBridgeClientConfig } from '@aws-sdk/client-eventbridge';

let clientConfig: EventBridgeClientConfig = {};

if (process.env.APP_ENV?.toLowerCase() === 'local') {
  clientConfig = {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      sessionToken: process.env.AWS_SESSION_TOKEN,
    },
    region: process.env.AWS_REGION,
  };
} else {
  clientConfig = {
    region: process.env.AWS_REGION,
  };
}

const eventBridgeClient = new EventBridgeClient(clientConfig);

export { eventBridgeClient };
