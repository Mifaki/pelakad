CREATE TABLE IF NOT EXISTS "pelakad_death_certificate_request" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"phone_number" varchar(256) NOT NULL,
	"nik_id" varchar(256) NOT NULL,
	"kk_id" varchar(256) NOT NULL,
	"family_card_image" varchar(256) NOT NULL,
	"reporter_identity_card_url" varchar(256) NOT NULL,
	"deceased_identity_card_url" varchar(256) NOT NULL,
	"death_certificate_url" varchar(256) NOT NULL,
	"sptjm_url" varchar(256) NOT NULL,
	"statement_letter_of_true_death_data_url" varchar(256) NOT NULL,
	"request_status" "request_status" NOT NULL,
	"feedback" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
