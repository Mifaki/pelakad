ALTER TABLE "pelakad_ktp_request" ALTER COLUMN "reason" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "pelakad_ktp_request" ALTER COLUMN "request_status" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "pelakad_ktp_request" ADD COLUMN "contact" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "pelakad_ktp_request" ADD COLUMN "family_card_url" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "pelakad_ktp_request" ADD COLUMN "birth_certificate_url" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "pelakad_ktp_request" ADD COLUMN "foreign_move_cert_url" varchar(256);--> statement-breakpoint
ALTER TABLE "pelakad_ktp_request" ADD COLUMN "damaged_ktp_url" varchar(256);--> statement-breakpoint
ALTER TABLE "pelakad_ktp_request" ADD COLUMN "police_report_url" varchar(256);--> statement-breakpoint
ALTER TABLE "pelakad_ktp_request" DROP COLUMN IF EXISTS "phone_number";