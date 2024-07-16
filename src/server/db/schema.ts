import { sql } from 'drizzle-orm';
import {
  pgTable,
  pgEnum,
  pgTableCreator,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `pelakad_${name}`);

export const requestStatusEnum = pgEnum('request_status', [
  'menunggu',
  'diproses',
  'dikembalikan',
  'selesai',
]);

export const ktpRequest = pgTable('pelakad_ktp_request', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID())
    .notNull(),
  full_name: varchar('full_name', { length: 256 }).notNull(),
  phone_number: varchar('phone_number', { length: 256 }).notNull(),
  nik_id: varchar('nik_id', { length: 256 }).notNull(),
  kk_id: varchar('kk_id', { length: 256 }).notNull(),
  reason: text('reason').notNull(),
  request_status: requestStatusEnum('request_status').notNull(),
  feedback: text('reason'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});
