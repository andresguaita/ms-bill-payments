import { BillPaymentsRepository } from '../../../src/adapter/out/database/bill-payments.repository';
import { IBillPaymentsRepository } from '../interface/bill-payments.repository';



class GetBillPaymentsByServiceUseCase {
    constructor(
        private billPaymentsRepository: IBillPaymentsRepository
    ) {}

    async apply(user_id: string, service_account_id: string) {
        console.log('LLEGO al service use case')
        const bill_payments = await this.billPaymentsRepository.find(user_id, service_account_id);
        return bill_payments;
    }
}

export { GetBillPaymentsByServiceUseCase };

