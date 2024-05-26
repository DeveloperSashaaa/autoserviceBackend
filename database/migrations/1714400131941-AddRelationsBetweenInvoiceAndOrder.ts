import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsBetweenInvoiceAndOrder1714400131941 implements MigrationInterface {
    name = 'AddRelationsBetweenInvoiceAndOrder1714400131941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoices" ADD "orderId" uuid`);
        await queryRunner.query(`ALTER TABLE "invoices" ADD CONSTRAINT "UQ_a58a78a0e0031dd93a2f56f1e8e" UNIQUE ("orderId")`);
        await queryRunner.query(`ALTER TABLE "invoices" ADD CONSTRAINT "FK_a58a78a0e0031dd93a2f56f1e8e" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoices" DROP CONSTRAINT "FK_a58a78a0e0031dd93a2f56f1e8e"`);
        await queryRunner.query(`ALTER TABLE "invoices" DROP CONSTRAINT "UQ_a58a78a0e0031dd93a2f56f1e8e"`);
        await queryRunner.query(`ALTER TABLE "invoices" DROP COLUMN "orderId"`);
    }

}
