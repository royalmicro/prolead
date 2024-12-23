import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1734958891980 implements MigrationInterface {
  name = 'Migration1734958891980';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`services\` DROP FOREIGN KEY \`FK_034b52310c2d211bc979c3cc4e8\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` DROP FOREIGN KEY \`FK_9abf0beead7287121db63e186ce\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` DROP COLUMN \`categoryId\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` DROP COLUMN \`portalId\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` ADD \`category_id\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` ADD \`portal_id\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`service_categories\` ADD \`color\` varchar(7) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`service_categories\` ADD \`portal_id\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` ADD CONSTRAINT \`FK_1f8d1173481678a035b4a81a4ec\` FOREIGN KEY (\`category_id\`) REFERENCES \`service_categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` ADD CONSTRAINT \`FK_6a5199a75687fe698eeb3093a3d\` FOREIGN KEY (\`portal_id\`) REFERENCES \`portals\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`service_categories\` ADD CONSTRAINT \`FK_3455345dee25a03f90dc0b5d148\` FOREIGN KEY (\`portal_id\`) REFERENCES \`portals\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`service_categories\` DROP FOREIGN KEY \`FK_3455345dee25a03f90dc0b5d148\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` DROP FOREIGN KEY \`FK_6a5199a75687fe698eeb3093a3d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` DROP FOREIGN KEY \`FK_1f8d1173481678a035b4a81a4ec\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`service_categories\` DROP COLUMN \`portal_id\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`service_categories\` DROP COLUMN \`color\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` DROP COLUMN \`portal_id\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` DROP COLUMN \`category_id\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` ADD \`portalId\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` ADD \`categoryId\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` ADD CONSTRAINT \`FK_9abf0beead7287121db63e186ce\` FOREIGN KEY (\`portalId\`) REFERENCES \`portals\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`services\` ADD CONSTRAINT \`FK_034b52310c2d211bc979c3cc4e8\` FOREIGN KEY (\`categoryId\`) REFERENCES \`service_categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
