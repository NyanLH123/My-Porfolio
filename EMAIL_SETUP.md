# Email Setup Guide - EmailJS Integration

This portfolio website uses **EmailJS** to send contact form emails directly to your inbox. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

## Step 2: Connect Your Email Service

1. From your EmailJS dashboard, click **"Add Service"**
2. Select your email provider:
   - **Gmail** (recommended for most users)
   - **Outlook**
   - **Yahoo**
   - Or other SMTP services
3. Follow the authorization steps
4. Copy the **Service ID** (you'll need this)

### For Gmail Users (Most Common):

If using Gmail:
- You may need to create an **App Password** instead of using your regular password
- Go to: https://myaccount.google.com/apppasswords
- Select "Mail" and "Windows Computer" (or your device)
- Copy the generated 16-character password and use that in EmailJS

## Step 3: Create Email Template

1. In EmailJS dashboard, go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use these settings:

**Template Name:** `portfolio_contact_form`

**Email Subject:**
```
New Message from {{from_name}} - {{inquiry_type}}
```

**Email Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0071e3;">New Contact Form Submission</h2>
  
  <div style="background-color: #f5f5f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>From:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Subject:</strong> {{subject}}</p>
    <p><strong>Inquiry Type:</strong> {{inquiry_type}}</p>
    <p><strong>Preferred Contact Method:</strong> {{contact_method}}</p>
  </div>
  
  <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e5e7; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #1d1d1f; margin-top: 0;">Message:</h3>
    <p style="color: #666666; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
  </div>
  
  <div style="text-align: center; color: #999999; font-size: 12px; margin-top: 20px; border-top: 1px solid #e5e5e7; padding-top: 20px;">
    <p>This email was sent from your portfolio website contact form</p>
  </div>
</div>
```

4. Copy the **Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account Settings** → **API Keys**
2. Copy your **Public Key**

## Step 5: Update Your Contact Page

Now open [d:\Personal\Study\porfolio\pages\contact.html](../pages/contact.html) and find this line (around line 235):

```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

Replace `YOUR_PUBLIC_KEY` with your actual public key from EmailJS.

Then find this line:

```javascript
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', templateParams)
```

Replace:
- `SERVICE_ID` with your Service ID
- `TEMPLATE_ID` with `portfolio_contact_form`

**Example:**
```javascript
emailjs.send('service_gmail_2024', 'portfolio_contact_form', templateParams)
```

## Step 6: Test Your Setup

1. Open your portfolio website locally or online
2. Fill out the contact form
3. Submit it
4. Check your inbox for the email

## Troubleshooting

### "Failed to send email" message:
- Check that you've correctly copied your Public Key and Service ID
- Make sure your Service is active in EmailJS dashboard
- Verify your email service is properly connected

### Email not arriving:
- Check your spam/junk folder
- Make sure you've set up the correct email template
- Verify the "to_email" in the form matches your actual email address

### EmailJS not loading:
- Check your internet connection
- Verify the script tag is loading correctly from CDN

## Free Tier Limits

EmailJS free tier includes:
- ✅ Up to **200 emails/month**
- ✅ Unlimited templates
- ✅ No credit card required
- ✅ Perfect for a portfolio

## Optional: Use Contact Form Email

If you want emails to come **from** the visitor's email address instead of a generic one:
- Upgrade to EmailJS Pro (paid plan)
- Or use alternative: Formspree, Basin, or Backend serverless functions

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

---

**Once configured, your portfolio will send you real emails when visitors submit the contact form! 🎉**
