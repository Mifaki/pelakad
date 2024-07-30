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

// Schema
export const ktpRequest = createTable('ktp_request', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID())
    .notNull(),
  contact: varchar('contact', { length: 256 }).notNull(),
  full_name: varchar('full_name', { length: 256 }).notNull(),
  nik_id: varchar('nik_id', { length: 256 }).notNull(),
  kk_id: varchar('kk_id', { length: 256 }).notNull(),
  reason: varchar('reason', { length: 50 }).notNull(),
  request_status: varchar('request_status', { length: 50 }).notNull(),
  feedback: text('feedback'),
  family_card_url: varchar('family_card_url', { length: 256 }).notNull(),
  birth_certificate_url: varchar('birth_certificate_url', {
    length: 256,
  }).notNull(),
  foreign_move_cert_url: varchar('foreign_move_cert_url', { length: 256 }),
  damaged_ktp_url: varchar('damaged_ktp_url', { length: 256 }),
  police_report_url: varchar('police_report_url', { length: 256 }),
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
    out_of_wedlock_letter_url: varchar('out_of_wedlock_letter_url', {
      length: 256,
    }),
    request_status: requestStatusEnum('request_status').notNull(),
    marriage_certificate_url: varchar('marriage_certificate_url', {
      length: 256,
    }).notNull(),
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
  'witness_identity_card_images',
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

export const familyCardRequest = createTable('family_card_request', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID())
    .notNull(),
  full_name: varchar('full_name', { length: 256 }).notNull(),
  phone_number: varchar('phone_number', { length: 256 }).notNull(),
  nik_id: varchar('nik_id', { length: 256 }).notNull(),
  kk_id: varchar('kk_id', { length: 256 }).notNull(),
  reason: varchar('reason', {
    length: 256,
  }).notNull(),
  new_card_reason: varchar('new_card_reason', {
    length: 256,
  }),
  father_identity_card_url: varchar('father_identity_card_url', {
    length: 256,
  }),
  mother_identity_card_url: varchar('mother_identity_card_url', {
    length: 256,
  }),
  husband_family_card_url: varchar('husband_family_card_url', {
    length: 256,
  }),
  wife_family_card_url: varchar('wife_family_card_url', {
    length: 256,
  }),
  husband_birth_certificate_url: varchar('husband_birth_certificate_url', {
    length: 256,
  }),
  wife_birth_certificate_url: varchar('wife_birth_certificate_url', {
    length: 256,
  }),
  old_family_card_url: varchar('old_family_card_url', {
    length: 256,
  }),
  element_change_statement_letter_url: varchar(
    'element_change_statement_letter_url',
    {
      length: 256,
    },
  ),
  broken_family_card_url: varchar('broken_family_card_url', {
    length: 256,
  }),
  original_family_card_url: varchar('original_family_card_url', {
    length: 256,
  }),
  police_loss_report_url: varchar('police_loss_report_url', {
    length: 256,
  }),
  request_status: requestStatusEnum('request_status').notNull(),
  feedback: text('feedback'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const supportingDocuments = createTable('supporting_documents', {
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

// Relations
export const birthCertificateRequestRelations = relations(
  birthCertificateRequest,
  ({ many }) => ({
    familyCardImages: many(familyCardImages),
    marriageBookImages: many(marriageBookImages),
  }),
);

//KTP
export const ktpRequestRelations = relations(
  birthCertificateRequest,
  ({ many }) => ({
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

export const marriageBookImagesRelationsBirthCertificate = relations(
  marriageBookImages,
  ({ one }) => ({
    request: one(birthCertificateRequest, {
      fields: [marriageBookImages.request_id],
      references: [birthCertificateRequest.id],
    }),
  }),
);
