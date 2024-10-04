import { IsNotEmpty, IsString, IsNumber, IsOptional, IsUUID, IsDateString } from 'class-validator';

export class CreateBillPaymentBody {
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  service_company_name: string;

  @IsString()
  @IsNotEmpty()
  service_account_id: string;

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
  payment_method: string;

  @IsString()
  @IsOptional()
  transaction_hash?: string;  // Opcional, si no se genera inicialmente

  @IsString()
  @IsOptional()
  status?: string = 'PENDING';  // Valor por defecto: 'PENDING'

  @IsDateString()
  @IsOptional()
  created_at?: string;  // Si no se especifica, se puede generar automáticamente en el servicio
}
