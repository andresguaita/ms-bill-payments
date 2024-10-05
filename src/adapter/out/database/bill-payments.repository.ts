import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillPayments } from '../../../../domain/src/model/bill-payments.entity';
import { IBillPaymentsRepository } from '../../../../domain/src/interface/bill-payments.repository';

@Injectable()
export class BillPaymentsRepository implements IBillPaymentsRepository {
  constructor(
    @InjectRepository(BillPayments)
    private readonly repository: Repository<BillPayments>,
  ) {}

  async save(billPayment: BillPayments): Promise<BillPayments> {
    return this.repository.save(billPayment);
  }

  async findByUserIdAndServiceAccountId(user_id: string, service_account_id: string): Promise<BillPayments[]> {
    return this.repository.find({ where: { user_id, service_account_id } });
  }


}
