import { BillPayments } from '../model/bill-payments.entity';
export interface IBillPaymentsRepository {
  save(billPayment: BillPayments): Promise<BillPayments>;
}