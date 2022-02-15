import {MigrationInterface, QueryRunner} from "typeorm";

export class files1644856150037 implements MigrationInterface {
    name = 'files1644856150037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`student\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`nationality\` varchar(255) NOT NULL, \`dob\` date NOT NULL, \`status\` int NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`family\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`relation_to_student\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`dob\` date NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`studentIdId\` int NULL, UNIQUE INDEX \`REL_17823cbf8531c711f4a2db7216\` (\`studentIdId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`family\` ADD CONSTRAINT \`FK_17823cbf8531c711f4a2db7216a\` FOREIGN KEY (\`studentIdId\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`family\` DROP FOREIGN KEY \`FK_17823cbf8531c711f4a2db7216a\``);
        await queryRunner.query(`DROP INDEX \`REL_17823cbf8531c711f4a2db7216\` ON \`family\``);
        await queryRunner.query(`DROP TABLE \`family\``);
        await queryRunner.query(`DROP TABLE \`student\``);
    }

}
