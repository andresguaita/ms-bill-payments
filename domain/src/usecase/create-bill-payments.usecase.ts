import { InjectRepository } from "@nestjs/typeorm";
import { BillPayments } from "../model/bill-payments.entity";
import { Repository } from "typeorm";
import { EventBridgeAdapter } from '../../../src/adapter/out/event-bridge/event-bridge.adapter';
import { IBillPaymentsRepository } from '../interface/bill-payments.repository';
import { BillPaymentsRepository } from '../../../src/adapter/out/database/bill-payments.repository';
import { CreateBillPaymentBody } from '../../../src/model/dto/bill-payment.type';


class CreateBillPaymentsUseCase {
  constructor(
    private billPaymentsRepository: BillPaymentsRepository,
    private readonly eventBridgeAdapter: EventBridgeAdapter,
  ) { }
  async apply(billPaymentData: any): Promise<BillPayments> {
  // Guardamos la transacción en la base de datos
  const newBillPayment = this.billPaymentsRepository.save(billPaymentData);
   // await this.billPaymentsRepository.create(newBillPayment);

    // Después de guardar la transacción, enviamos el evento a EventBridge
    // await this.eventBridgeAdapter.sendEvent(
    //   {
    //     paymentId: newBillPayment.id,
    //     userId: newBillPayment.userId,
    //     amount: newBillPayment.amount,
    //     currency: newBillPayment.currency,
    //     status: newBillPayment.status,
    //     createdAt: newBillPayment.createdAt,
    //   },
    //   'ms-bill-payment',  // Source del evento
    //   'BillPaymentCreated'  // Tipo de evento
    // );

   return newBillPayment;
}
}

export { CreateBillPaymentsUseCase };
