import {Logger, Module} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import { BillPaymentsController } from './adapter/in/http/bill-payments.controller';
import { BillPayments } from 'domain/src/model/bill-payments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateBillPaymentsUseCase } from 'domain/src/usecase/create-bill-payments.usecase';
import { HandlerCreateBillPayments } from './handler/create-bill-payments.handler';
import { BillPaymentsRepository } from './adapter/out/database/bill-payments.repository';
import { EventBridgeAdapter } from './adapter/out/event-bridge/event-bridge.adapter';
import { GetBillPaymentsByServiceUseCase } from '../domain/src/usecase/get-bill-payments-by-service.usecase';
import { HandlerGetBillPaymentsByService } from './handler/get-bill-payments-by-service.handler';



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
      'BillPaymentsRepository'
    ]},
    {
      provide: 'GetBillPaymentsByServiceUseCase',
      useFactory: (
        billPaymentsRepository: BillPaymentsRepository,
      ) => {
        return new GetBillPaymentsByServiceUseCase(
          billPaymentsRepository
        );
      },
      inject: [
        'BillPaymentsRepository'
      ]}
      ,HandlerCreateBillPayments,HandlerGetBillPaymentsByService],

})
export class BillPaymentModule {} 