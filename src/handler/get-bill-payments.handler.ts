import {HttpStatus, Inject, Injectable} from '@nestjs/common';
import {SUCCESS_STATES_MESSAGES} from '../common/response-states/success-states.messages';
import {HTTPResponse} from '../model/dto/http-response.model';
import {GetBillPaymentsUseCase} from '../../domain/src/usecase/get-bill-payments.usecase'
@Injectable()
export class HandlerGetBillPayments {
  constructor(
    @Inject('GetBillPaymentsUseCase')
    private readonly getUserUC: GetBillPaymentsUseCase
  ) {}
  async execute(param: string): Promise<HTTPResponse> {

    const user = await this.getUserUC.apply('hola');

    return new HTTPResponse(
      HttpStatus.OK,
      SUCCESS_STATES_MESSAGES.Success.code,
      SUCCESS_STATES_MESSAGES.Success.message,
      user,

    );
  }
}
