import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Req,
    UseGuards,
  } from '@nestjs/common';
  import {
    ApiBearerAuth,
    ApiBody,
    ApiParam,
    ApiQuery,
    ApiTags,
  } from '@nestjs/swagger';
  import {HTTPResponse} from '../../../model/dto/http-response.model';
import { HandlerCreateBillPayments } from '../../../handler/create-bill-payments.handler';
import { CreateBillPaymentBody } from '../../../model/dto/bill-payment.type';
import { HandlerGetBillPaymentsByService } from '../../../handler/get-bill-payments-by-service.handler';
  
  

  @Controller('bill-payments')
  export class BillPaymentsController {
    constructor(
      private readonly handlerCreateBillPayments: HandlerCreateBillPayments,
      private readonly handlerGetBillPaymentsByService: HandlerGetBillPaymentsByService,
    ) {}
  
    @Get('user/:user_id/services/:service_account_id')
    public async getBillPaymentsByService(
      @Param('user_id') user_id: string,
      @Param('service_account_id') service_account_id: string,
    ) {
      return await this.handlerGetBillPaymentsByService.execute(user_id, service_account_id);
    }

    @Post('create')
    async createBillPayments(
      @Body() body: CreateBillPaymentBody
    ): Promise<HTTPResponse> {
      return await this.handlerCreateBillPayments.execute(body);
    }
  }