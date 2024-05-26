import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEmployeeTable1714398001719 implements MigrationInterface {
    name = 'CreateEmployeeTable1714398001719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."employees_position_enum" AS ENUM('admin', 'moderator', 'employee')`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "contactNumber" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, "position" "public"."employees_position_enum" NOT NULL DEFAULT 'employee', "salary" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TYPE "public"."employees_position_enum"`);
    }

}
