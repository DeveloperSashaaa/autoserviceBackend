import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTypeAndServiceEntity1714394022794 implements MigrationInterface {
    name = 'CreateTypeAndServiceEntity1714394022794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "description" character varying, "typeId" integer, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "types" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_33b81de5358589c738907c3559b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_7b4c9f63b9f73bf5fc65fbda327" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_7b4c9f63b9f73bf5fc65fbda327"`);
        await queryRunner.query(`DROP TABLE "types"`);
        await queryRunner.query(`DROP TABLE "services"`);
    }

}
