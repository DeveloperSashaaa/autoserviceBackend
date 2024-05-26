import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImageColumnInServiceTable1716487618213 implements MigrationInterface {
    name = 'AddImageColumnInServiceTable1716487618213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" ADD "image" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "image"`);
    }

}
