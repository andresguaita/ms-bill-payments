import { Injectable } from '@nestjs/common';
import { BillPaymentsRepository } from '../../../src/adapter/out/database/bill-payments.repository';



class GetBillPaymentsByServiceUseCase {
  constructor(private readonly billPaymentsRepository: BillPaymentsRepository) {}

  async apply(user_id: string, service_account_id: string) {
    return await this.billPaymentsRepository.findByUserIdAndServiceAccountId(user_id, service_account_id);
  }
}

export { GetBillPaymentsByServiceUseCase };

