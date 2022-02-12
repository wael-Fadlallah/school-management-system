import {MigrationInterface, QueryRunner} from "typeorm";

export class files1644690707695 implements MigrationInterface {
    name = 'files1644690707695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`dob\``);
        await queryRunner.query(`ALTER TABLE \`student\` ADD \`dob\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`student\` ADD \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`family\` DROP FOREIGN KEY \`FK_17823cbf8531c711f4a2db7216a\``);
        await queryRunner.query(`ALTER TABLE \`family\` DROP COLUMN \`dob\``);
        await queryRunner.query(`ALTER TABLE \`family\` ADD \`dob\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`family\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`family\` ADD \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`family\` CHANGE \`studentIdId\` \`studentIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`family\` ADD CONSTRAINT \`FK_17823cbf8531c711f4a2db7216a\` FOREIGN KEY (\`studentIdId\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`family\` DROP FOREIGN KEY \`FK_17823cbf8531c711f4a2db7216a\``);
        await queryRunner.query(`ALTER TABLE \`family\` CHANGE \`studentIdId\` \`studentIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`family\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`family\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`family\` DROP COLUMN \`dob\``);
        await queryRunner.query(`ALTER TABLE \`family\` ADD \`dob\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`family\` ADD CONSTRAINT \`FK_17823cbf8531c711f4a2db7216a\` FOREIGN KEY (\`studentIdId\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`student\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`dob\``);
        await queryRunner.query(`ALTER TABLE \`student\` ADD \`dob\` datetime NOT NULL`);
    }

}
