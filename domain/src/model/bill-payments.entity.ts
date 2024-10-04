import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bill_payments') // Nombre de la tabla en la base de datos
export class BillPayments {

  @PrimaryGeneratedColumn('uuid')
  id: string; // UUID como identificador primario

  @Column({ type: 'varchar' })
  user_id: string; // UUID del usuario que hizo el pago

  @Column({ type: 'varchar', length: 255 })
  service_company_name: string; // Nombre de la compañía de servicios (e.g., Edenor, Metrogas)

  @Column({ type: 'varchar', length: 255 })
  service_account_id: string; // Número de cuenta del servicio

  @Column({ type: 'varchar', length: 255 })
  reference: string; // Referencia única para la transacción

  @Column({ type: 'decimal', precision: 18, scale: 2 })
  amount: number; // Monto del pago

  @Column({ type: 'varchar', length: 10 })
  currency: string; // Moneda del pago (e.g., USD, EUR)

  @Column({ type: 'varchar', length: 50 })
  payment_method: string; // Método de pago (e.g., tarjeta, transferencia)

  @Column({ type: 'varchar', length: 255, nullable: true })
  transaction_hash: string; // Hash de la transacción, si es aplicable

  @Column({ type: 'varchar', length: 50 })
  status: string; // Estado del pago (e.g., COMPLETED, PENDING, FAILED)

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date; // Fecha en que se creó el pago

  @Column({ type: 'timestamp', nullable: true })
  completed_at: Date; // Fecha en que se completó el pago

  @Column({ type: 'jsonb', nullable: true })
  extra: object; // Campo JSON para almacenar información extra (opcional)
}
