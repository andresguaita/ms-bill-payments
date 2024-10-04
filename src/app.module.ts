import {Module} from '@nestjs/common';
import { ConfigModule } from './config.module';
import { BillPaymentModule } from './bill-payment.module';
import { DataSource } from './adapter/database/data-source';


@Module({
    imports: [
        ConfigModule,
        BillPaymentModule,
        DataSource
      ]
})
export class AppModule {}