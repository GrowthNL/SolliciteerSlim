# Database schema

## Conventies
- PostgreSQL via Supabase.
- Primaire sleutels zijn `uuid` met `gen_random_uuid()`, tenzij gekoppeld aan `auth.users`.
- Timestamps zijn `timestamptz`, standaard `now()` en opgeslagen in UTC.
- `users.id` verwijst naar `auth.users.id` met cascade delete.
- Elke gebruikerstabel heeft Row Level Security en policies op `auth.uid() = user_id`.
- JSON wordt gebruikt voor flexibel CV-documentmodel; relationele metadata blijft querybaar.

## Tabellen
### users
| Kolom | Type | Opmerking |
|---|---|---|
| id | uuid PK/FK | `auth.users.id` |
| email | text | Uniek, waar mogelijk gesynchroniseerd vanuit auth |
| full_name | text | Optioneel bij registratie |
| plan | text | `free`, `starter`, `pro`; one-time is een entitlement, geen blijvend plan |
| stripe_customer_id | text | Uniek, nullable |
| created_at / updated_at | timestamptz | Auditvelden |

### resumes
`id`, `user_id`, `title`, `language` (standaard `nl`), `template_id`, `data_json` (`jsonb`), `ai_summary`, `created_at`, `updated_at`.

### cover_letters
`id`, `user_id`, `resume_id`, `job_post_id`, `title`, `content`, `tone`, `created_at`, `updated_at`. Foreign keys naar cv en vacature zijn nullable zodat concepten mogelijk blijven; ownership wordt ook in applicatielogica gecontroleerd.

### job_posts
`id`, `user_id`, `company`, `job_title`, `job_text`, `extracted_keywords_json` (`jsonb`), `created_at`, `updated_at`.

### applications
`id`, `user_id`, `job_post_id`, `resume_id`, `cover_letter_id`, `status`, `deadline` (`date`), `notes`, `created_at`, `updated_at`. Deze tabel wordt pas productmatig benut wanneer eenvoudige tracking wordt toegevoegd.

### ai_usage_logs
`id`, `user_id`, `action_type`, `input_tokens`, `output_tokens`, `cost_estimate` (`numeric`), `created_at`. Deze tabel bevat nadrukkelijk geen prompt, cv-inhoud of modeloutput.

### subscriptions
`id`, `user_id`, `stripe_subscription_id`, `status`, `plan`, `current_period_end`, `created_at`, `updated_at`. Stripe-webhooks zijn bron van waarheid.

## CV JSON-model
```json
{
  "version": 1,
  "personalDetails": {
    "firstName": "",
    "lastName": "",
    "professionalTitle": "",
    "email": "",
    "phone": "",
    "city": "",
    "linkedinUrl": "",
    "websiteUrl": ""
  },
  "profileSummary": "",
  "workExperience": [{
    "id": "uuid",
    "jobTitle": "",
    "company": "",
    "location": "",
    "startDate": "YYYY-MM",
    "endDate": "YYYY-MM",
    "isCurrent": false,
    "bullets": [""]
  }],
  "education": [],
  "skills": [],
  "languages": [],
  "certificates": [],
  "courses": [],
  "interests": [],
  "references": [],
  "customSections": []
}
```
Ieder item in een herhaalbare sectie krijgt een stabiel ID. Migraties van het JSON-model gebruiken het versienummer.

## Indexen
- `resumes(user_id, updated_at desc)`
- `cover_letters(user_id, updated_at desc)`
- `job_posts(user_id, updated_at desc)`
- `applications(user_id, status, deadline)`
- `ai_usage_logs(user_id, created_at desc)`
- Unieke indexen op niet-null `stripe_customer_id` en `stripe_subscription_id`.

## RLS-beleid
Voor `resumes`, `cover_letters`, `job_posts`, `applications`, `ai_usage_logs` en `subscriptions` gelden SELECT/INSERT/UPDATE/DELETE-policies op de ingelogde gebruiker. Gerelateerde IDs moeten aanvullend via constraints of servervalidatie tot dezelfde gebruiker behoren. Usage logs worden normaal alleen server-side ingevoegd; gebruikers kunnen eventueel geaggregeerd verbruik lezen.

## Retentie en verwijdering
Accountverwijdering wordt later als expliciete, bevestigde workflow gebouwd. Persoonlijke records cascaderen waar veilig; financiële records kunnen vanwege wettelijke verplichtingen geanonimiseerd of apart bewaard moeten worden. Definitieve termijnen worden voor livegang juridisch vastgesteld.
