import { DataSource } from 'typeorm';
import { dataSourceOptions } from './orm-config';

export const AppDataSource = new DataSource(dataSourceOptions);
