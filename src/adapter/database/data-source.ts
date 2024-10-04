import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BillPaymentModule } from 'src/bill-payment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: process.env.DB_PORT? parseInt(process.env.DB_PORT): 4566,
        database: 'your_database',
        username: 'your_user',
        password: 'your_password',
        autoLoadEntities: true,
        synchronize: process.env.NODE_ENV === 'production' ? false : true,
        //logging: true
      }),
    BillPaymentModule
  ]
})
export class DataSource {}
