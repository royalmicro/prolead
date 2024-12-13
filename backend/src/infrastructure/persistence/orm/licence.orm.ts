import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('licences')
export class LicenceOrm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ['BASIC', 'PREMIUM'] })
  type: 'BASIC' | 'PREMIUM';
}
