import {Logger, Module} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import { BillPaymentsController } from './adapter/in/http/bill-payments.controller';
import { BillPayments } from 'domain/src/model/bill-payments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateBillPaymentsUseCase } from 'domain/src/usecase/create-bill-payments.usecase';
import { HandlerCreateBillPayments } from './handler/create-bill-payments.handler';
import { BillPaymentsRepository } from './adapter/out/database/bill-payments.repository';
import { EventBridgeAdapter } from './adapter/out/event-bridge/event-bridge.adapter';



@Module({
  controllers: [BillPaymentsController],
  imports: [
    TypeOrmModule.forFeature([BillPayments])
  ],
  providers: [ConfigService,    {
    provide: 'CreateBillPaymentsUseCase',
    useFactory: (
      billPaymentsRepository: BillPaymentsRepository,
      eventBridgeAdapter: EventBridgeAdapter
    ) => {
      return new CreateBillPaymentsUseCase(
        billPaymentsRepository,
        eventBridgeAdapter
      );
    },
    inject: [
    ],
  },HandlerCreateBillPayments],

})
export class BillPaymentModule {} 