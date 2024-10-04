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
import { HandlerGetBillPayments } from '../../../handler/get-bill-payments.handler';
  
  

  @Controller('bill-payments')
  export class BillPaymentsController {
    constructor(
      private readonly handlerGetBillPayments: HandlerGetBillPayments,
    ) {}
  

    @Get('user/services')
    async getBillPayments(
    ): Promise<HTTPResponse> {
      return await this.handlerGetBillPayments.execute('hola');
    }
  }