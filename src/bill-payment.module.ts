import {Logger, Module} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import { BillPaymentsController } from './adapter/in/http/bill-payments.controller';
import { HandlerGetBillPayments } from './handler/get-bill-payments.handler';
import { GetBillPaymentsUseCase } from 'domain/src/usecase/get-bill-payments.usecase';
import { BillPayments } from 'domain/src/model/bill-payments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  controllers: [BillPaymentsController],
  imports: [
    TypeOrmModule.forFeature([BillPayments])
  ],
  providers: [ConfigService,    {
    provide: 'GetBillPaymentsUseCase',
    useFactory: (
    ) => {
      return new GetBillPaymentsUseCase();
    },
    inject: [
    ],
  },HandlerGetBillPayments],

})
export class BillPaymentModule {} 