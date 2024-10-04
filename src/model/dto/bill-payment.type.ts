import { IsNotEmpty, IsString, IsNumber, IsOptional, IsUUID, IsDateString } from 'class-validator';

export class CreateBillPaymentBody {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  serviceCompanyName: string;

  @IsString()
  @IsNotEmpty()
  serviceAccountId: string;

  @IsString()
  @IsNotEmpty()
  reference: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsString()
  @IsNotEmpty()
  paymentMethod: string;

  @IsString()
  @IsOptional()
  transactionHash?: string;  // Opcional, si no se genera inicialmente

  @IsString()
  @IsOptional()
  status?: string = 'PENDING';  // Valor por defecto: 'PENDING'

  @IsDateString()
  @IsOptional()
  createdAt?: string;  // Si no se especifica, se puede generar automáticamente en el servicio
}
