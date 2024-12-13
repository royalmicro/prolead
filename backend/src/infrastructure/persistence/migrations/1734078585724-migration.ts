import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1734078585724 implements MigrationInterface {
  name = 'Migration1734078585724';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`licences\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` enum ('BASIC', 'PREMIUM') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );

    // Insert rows for BASIC and PREMIUM
    await queryRunner.query(
      `INSERT INTO \`licences\` (\`type\`) VALUES ('BASIC'), ('PREMIUM')`,
    );

    await queryRunner.query(`ALTER TABLE \`users\` ADD \`licenceId\` int NULL`);
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_09ec4c790d0b64178fdc78b8530\` FOREIGN KEY (\`licenceId\`) REFERENCES \`licences\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );

    // Set `licenceId` to BASIC (1) for existing users
    await queryRunner.query(
      `UPDATE \`users\` SET \`licenceId\` = 1 WHERE \`licenceId\` IS NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_09ec4c790d0b64178fdc78b8530\``,
    );
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`licenceId\``);
    await queryRunner.query(`DROP TABLE \`licences\``);
  }
}
