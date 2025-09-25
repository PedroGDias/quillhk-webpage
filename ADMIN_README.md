# Crafted Admin Panel

This admin panel allows you to manage companies and team members for the Ignite Lead Drive application. The interface features the same premium branding and design as the main Crafted application.

## Access

- **URL**: `/admin`
- **Password**: `gocraftedtech9911`

## Features

### Company Management
- Create new companies (company name only required)
- View all companies with creation date and team member count
- Delete companies (this will also delete all associated team members)

### Team Member Management
- Add team members to existing companies
- Required fields: Name, Email, WhatsApp Number (with searchable country code dropdown)
- Searchable country code dropdown with 200+ countries, flags, and full country names
- View all team members with their company association
- Delete individual team members

## Database Schema

### Companies Table
- `id` (UUID, Primary Key)
- `name` (Text, Required)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### Team Members Table
- `id` (UUID, Primary Key)
- `company_id` (UUID, Foreign Key to companies)
- `name` (Text, Required)
- `email` (Text, Required)
- `whatsapp_number` (Text, Required) - Format: "+1 1234567890"
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

## Setup

1. The database tables are created automatically when you first access the admin panel
2. If you need to manually apply the migration, run the SQL in `supabase/migrations/20241220000001_create_companies_table.sql`

## Security

- Password protection prevents unauthorized access
- All database operations use Supabase's built-in security features
- Row Level Security (RLS) is enabled on all tables

## Usage

1. Navigate to `/admin`
2. Enter the admin password: `gocraftedtech9911`
3. Use the interface to:
   - Add companies using the "Add Company" button
   - Add team members using the "Add Member" button
   - Delete companies or team members using the trash icon
   - View all data in a clean, organized layout

## Design Features

- **Premium Branding**: Matches the main Crafted application design
- **Animated Background**: Subtle LinkedIn icon animations and gradient effects
- **Glass Morphism**: Modern backdrop blur effects on cards and dialogs
- **Ultra-thick Typography**: Bold, impactful text styling
- **Smooth Animations**: Hover effects and transitions throughout
- **Responsive Design**: Works perfectly on all screen sizes
