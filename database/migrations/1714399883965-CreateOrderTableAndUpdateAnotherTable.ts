import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrderTableAndUpdateAnotherTable1714399883965 implements MigrationInterface {
    name = 'CreateOrderTableAndUpdateAnotherTable1714399883965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."orders_progress_enum" AS ENUM('waiting', 'in_progress', 'completed', 'canceled')`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "totalPrice" numeric(10,2) NOT NULL, "progress" "public"."orders_progress_enum" NOT NULL DEFAULT 'waiting', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "clientId" uuid, "employeeId" uuid, "serviceId" uuid, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "invoices" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "totalPrice" numeric(10,2) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_668cef7c22a427fd822cc1be3ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "salary"`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "salary" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1457f286d91f271313fded23e53" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_59fadea46c0451b6663017f4c51" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_7962eb4dc054a83128d4a2fab72" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_7962eb4dc054a83128d4a2fab72"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_59fadea46c0451b6663017f4c51"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1457f286d91f271313fded23e53"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "salary"`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "salary" integer NOT NULL`);
        await queryRunner.query(`DROP TABLE "invoices"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TYPE "public"."orders_progress_enum"`);
    }

}
