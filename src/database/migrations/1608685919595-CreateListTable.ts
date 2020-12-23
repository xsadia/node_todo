import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateListTable1608685919595 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'lists',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      }));

      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('lists')
    }
}
