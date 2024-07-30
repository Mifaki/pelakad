CREATE TABLE IF NOT EXISTS "pelakad_family_card_request" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"phone_number" varchar(256) NOT NULL,
	"nik_id" varchar(256) NOT NULL,
	"kk_id" varchar(256) NOT NULL,
	"reason" varchar(256) NOT NULL,
	"new_card_reason" varchar(256),
	"father_identity_card_url" varchar(256),
	"mother_identity_card_url" varchar(256),
	"husband_family_card_url" varchar(256),
	"wife_family_card_url" varchar(256),
	"husband_birth_certificate_url" varchar(256),
	"wife_birth_certificate_url" varchar(256),
	"old_family_card_url" varchar(256),
	"element_change_statement_letter_url" varchar(256),
	"broken_family_card_url" varchar(256),
	"original_family_card_url" varchar(256),
	"police_loss_report_url" varchar(256),
	"request_status" "request_status" NOT NULL,
	"feedback" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pelakad_supporting_documents" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"image_url" varchar(256) NOT NULL,
	"request_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);