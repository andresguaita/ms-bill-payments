import { BillPayments } from '../model/bill-payments.entity';
export interface IBillPaymentsRepository {
  save(billPayment: BillPayments): Promise<BillPayments>;
  find(user_id: string, service_account_id: string): Promise<BillPayments[]>;
}