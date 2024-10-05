import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { GetBillPaymentsByServiceUseCase } from 'domain/src/usecase/get-bill-payments-by-service.usecase';
import {SUCCESS_STATES_MESSAGES} from '../common/response-states/success-states.messages';
import { HTTPResponse } from '../model/dto/http-response.model';

@Injectable()
export class HandlerGetBillPaymentsByService {
    constructor(
        @Inject('GetBillPaymentsByServiceUseCase')
        private readonly getBillPaymentsByServiceUseCase: GetBillPaymentsByServiceUseCase
    ) { }

    async execute(
        user_id: string,
        service_account_id: string
    ): Promise<HTTPResponse> {
        const bill_payments = await this.getBillPaymentsByServiceUseCase.apply(user_id, service_account_id);

        return new HTTPResponse(
            HttpStatus.OK,
            SUCCESS_STATES_MESSAGES.Success.code,
            SUCCESS_STATES_MESSAGES.Success.message,
            bill_payments,
        );
    }
}

