import { relations, sql } from 'drizzle-orm';
import {
  pgEnum,
  pgTableCreator,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `pelakad_${name}`);

// Enum
export const requestStatusEnum = pgEnum('request_status', [
  'menunggu',
  'diproses',
  'dikembalikan',
  'selesai',
  'tanda-tangan',
]);

// Table
export const ktpRequest = createTable('ktp_request', {
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
  feedback: text('feedback'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const birthCertificateRequest = createTable(
  'birth_certificate_request',
  {
    id: uuid('id')
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID())
      .notNull(),
    full_name: varchar('full_name', { length: 256 }).notNull(),
    phone_number: varchar('phone_number', { length: 256 }).notNull(),
    nik_id: varchar('nik_id', { length: 256 }).notNull(),
    kk_id: varchar('kk_id', { length: 256 }).notNull(),
    father_identity_card_url: varchar('father_identity_card_url', {
      length: 256,
    }),
    mother_identity_card_url: varchar('mother_identity_card_url', {
      length: 256,
    }).notNull(),
    out_of_wedlock_letter_url: varchar('out_of_wedlock_image_url', {
      length: 256,
    }),
    marriage_certificate_url: varchar('marriage_certificate_url', {
      length: 256,
    }).notNull(),
    request_status: requestStatusEnum('request_status').notNull(),
    feedback: text('feedback'),
    createdAt: timestamp('created_at', { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
);

export const deathCertificateRequest = createTable(
  'death_certificate_request',
  {
    id: uuid('id')
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID())
      .notNull(),
    full_name: varchar('full_name', {
      length: 256,
    }).notNull(),
    phone_number: varchar('phone_number', {
      length: 256,
    }).notNull(),
    nik_id: varchar('nik_id', {
      length: 256,
    }).notNull(),
    kk_id: varchar('kk_id', {
      length: 256,
    }).notNull(),
    family_card_image: varchar('family_card_image', {
      length: 256,
    }).notNull(),
    reporter_identity_card_url: varchar('reporter_identity_card_url', {
      length: 256,
    }).notNull(),
    deceased_identity_card_url: varchar('deceased_identity_card_url', {
      length: 256,
    }).notNull(),
    death_certificate_url: varchar('death_certificate_url', {
      length: 256,
    }).notNull(),
    sptjm_url: varchar('sptjm_url', {
      length: 256,
    }).notNull(),
    statement_letter_of_true_death_data_url: varchar(
      'statement_letter_of_true_death_data_url',
      {
        length: 256,
      },
    ).notNull(),
    request_status: requestStatusEnum('request_status').notNull(),
    feedback: text('feedback'),
    createdAt: timestamp('created_at', { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
);

export const familyCardImages = createTable('family_card_images', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID())
    .notNull(),
  name: varchar('full_name', { length: 256 }).notNull(),
  image_url: varchar('image_url', { length: 256 }).notNull(),
  request_id: uuid('request_id').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const marriageBookImages = createTable('marriage_book_images', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID())
    .notNull(),
  name: varchar('full_name', { length: 256 }).notNull(),
  image_url: varchar('image_url', { length: 256 }).notNull(),
  request_id: uuid('request_id').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const witnessIdentityCardImages = createTable(
  'witness_identity_card_image',
  {
    id: uuid('id')
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID())
      .notNull(),
    name: varchar('full_name', { length: 256 }).notNull(),
    image_url: varchar('image_url', { length: 256 }).notNull(),
    request_id: uuid('request_id').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
);

// Relations
export const birthCertificateRequestRelations = relations(
  birthCertificateRequest,
  ({ many }) => ({
    familyCardImages: many(familyCardImages),
    marriageBookImages: many(marriageBookImages),
  }),
);

export const familyCardImagesRelations = relations(
  familyCardImages,
  ({ one }) => ({
    request: one(birthCertificateRequest, {
      fields: [familyCardImages.request_id],
      references: [birthCertificateRequest.id],
    }),
  }),
);

export const marriageBookImagesRelations = relations(
  marriageBookImages,
  ({ one }) => ({
    request: one(birthCertificateRequest, {
      fields: [marriageBookImages.request_id],
      references: [birthCertificateRequest.id],
    }),
  }),
);
