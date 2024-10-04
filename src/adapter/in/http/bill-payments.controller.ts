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
  
  

  @Controller('bill-payments')
  export class BillPaymentsController {
    constructor(
      private readonly handlerCreateBillPayments: HandlerCreateBillPayments,
    ) {}
  

    @Post('create')
    async createBillPayments(
      @Body() body: CreateBillPaymentBody
    ): Promise<HTTPResponse> {
      return await this.handlerCreateBillPayments.execute(body);
    }
  }