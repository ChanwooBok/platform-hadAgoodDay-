CREATE TYPE "public"."event_type" AS ENUM('product_view', 'product_visit', 'profile_view');--> statement-breakpoint
CREATE TABLE "events" (
	"event_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"event_type" "event_type",
	"event_data" jsonb,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "team" ADD COLUMN "team_leader_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "team" ADD CONSTRAINT "team_team_leader_id_profiles_profile_id_fk" FOREIGN KEY ("team_leader_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;