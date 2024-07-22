CREATE TABLE IF NOT EXISTS "pelakad_birth_certificate_request" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"phone_number" varchar(256) NOT NULL,
	"nik_id" varchar(256) NOT NULL,
	"kk_id" varchar(256) NOT NULL,
	"father_identity_card_url" varchar(256),
	"mother_identity_card_url" varchar(256) NOT NULL,
	"out_of_wedlock_image_url" varchar(256),
	"request_status" "request_status" NOT NULL,
	"feedback" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pelakad_family_card_images" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"image_url" varchar(256) NOT NULL,
	"request_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pelakad_kua_marriage_book_images" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"image_url" varchar(256) NOT NULL,
	"request_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pelakad_marriage_book_images" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"image_url" varchar(256) NOT NULL,
	"request_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pelakad_witness_identity_card_images" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"image_url" varchar(256) NOT NULL,
	"request_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
