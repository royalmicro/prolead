import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1734390541137 implements MigrationInterface {
  name = 'Migration1734390541137';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`ownedPortalId\` int NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`REL_d5e792113a91811b5a9da2a317\` (\`ownedPortalId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`portals\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`licences\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` enum ('BASIC', 'PREMIUM') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user_portals\` (\`user_id\` int NOT NULL, \`portal_id\` int NOT NULL, INDEX \`IDX_636b029ec7bf5e2be8eb085ccf\` (\`user_id\`), INDEX \`IDX_9a103a4bb4707890d29861ed99\` (\`portal_id\`), PRIMARY KEY (\`user_id\`, \`portal_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_d5e792113a91811b5a9da2a317d\` FOREIGN KEY (\`ownedPortalId\`) REFERENCES \`portals\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_portals\` ADD CONSTRAINT \`FK_636b029ec7bf5e2be8eb085ccf3\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_portals\` ADD CONSTRAINT \`FK_9a103a4bb4707890d29861ed99b\` FOREIGN KEY (\`portal_id\`) REFERENCES \`portals\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user_portals\` DROP FOREIGN KEY \`FK_9a103a4bb4707890d29861ed99b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_portals\` DROP FOREIGN KEY \`FK_636b029ec7bf5e2be8eb085ccf3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_d5e792113a91811b5a9da2a317d\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_9a103a4bb4707890d29861ed99\` ON \`user_portals\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_636b029ec7bf5e2be8eb085ccf\` ON \`user_portals\``,
    );
    await queryRunner.query(`DROP TABLE \`user_portals\``);
    await queryRunner.query(`DROP TABLE \`licences\``);
    await queryRunner.query(`DROP TABLE \`portals\``);
    await queryRunner.query(
      `DROP INDEX \`REL_d5e792113a91811b5a9da2a317\` ON \`users\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``,
    );
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
