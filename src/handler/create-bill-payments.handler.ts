import {HttpStatus, Inject, Injectable} from '@nestjs/common';
import {SUCCESS_STATES_MESSAGES} from '../common/response-states/success-states.messages';
import {HTTPResponse} from '../model/dto/http-response.model';
import {CreateBillPaymentsUseCase} from '../../domain/src/usecase/create-bill-payments.usecase'
import { CreateBillPaymentBody } from '../model/dto/bill-payment.type';
@Injectable()
export class HandlerCreateBillPayments {
  constructor(
    @Inject('CreateBillPaymentsUseCase')
    private readonly createBillPaymentsUseCase: CreateBillPaymentsUseCase
  ) {}
  async execute(
    billpaymentData : CreateBillPaymentBody
  ): Promise<HTTPResponse> {

    const user = await this.createBillPaymentsUseCase.apply(billpaymentData);

    return new HTTPResponse(
      HttpStatus.OK,
      SUCCESS_STATES_MESSAGES.Success.code,
      SUCCESS_STATES_MESSAGES.Success.message,
      user,

    );
  }
}
