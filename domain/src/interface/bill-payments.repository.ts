import { BillPayments } from '../model/bill-payments.entity';
export interface IBillPaymentsRepository {
  create(billPayment: BillPayments): Promise<BillPayments>;
}