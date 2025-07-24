# Contact Form Setup with Resend

## Prerequisites

1. Create a free account at [Resend](https://resend.com)
2. Get your API key from the [API Keys page](https://resend.com/api-keys)

## Environment Setup

1. Copy the environment example file:

   ```bash
   cp .env.example .env.local
   ```

2. Update the `.env.local` file with your actual values:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   FROM_EMAIL=contact@yourdomain.com  # Use your verified domain
   TO_EMAIL=your-email@example.com    # Where you want to receive messages
   ```

## Domain Verification (Recommended)

For production use, you should verify your domain:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain
3. Update the DNS records as instructed
4. Update the `FROM_EMAIL` in your `.env.local` to use your verified domain

## Testing

For testing purposes, you can use the default `onboarding@resend.dev` as the FROM_EMAIL, but this should not be used in production.

## Features

- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Email formatting (HTML + text)
- ✅ Responsive design
- ✅ Theme-aware styling
- ✅ Accessibility features
