DO $$ BEGIN
 CREATE TYPE "public"."request_status" AS ENUM('menunggu', 'diproses', 'dikembalikan', 'selesai');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pelakad_ktp_request" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"phone_number" varchar(256) NOT NULL,
	"nik_id" varchar(256) NOT NULL,
	"kk_id" varchar(256) NOT NULL,
	"reason" text NOT NULL,
	"request_status" "request_status" NOT NULL,
	"feedback" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
