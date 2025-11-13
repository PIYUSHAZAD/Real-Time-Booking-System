# Travel & Tourism Website

A responsive travel and tourism website with integrated booking and payment functionality.

## Features

- 🏠 **Homepage** with video backgrounds and interactive navigation
- 📦 **Travel Packages** for various destinations (Mumbai, Hawaii, Sydney, Paris, Tokyo, Egypt)
- 💳 **Payment Gateway** supporting multiple payment methods:
  - Credit Card
  - Debit Card
  - Net Banking
  - PayPal
- 📸 **Gallery** showcasing travel destinations
- ⭐ **Customer Reviews** section
- 📞 **Contact Form** for inquiries
- 📱 **Responsive Design** for all devices

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript, jQuery
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (ready for integration)
- **Deployment:** Vercel

## Local Development

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd travel-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Deployment to Vercel

### Method 1: Vercel CLI

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push

### Method 3: Drag & Drop

1. Visit [vercel.com](https://vercel.com)
2. Drag and drop your project folder
3. Vercel will automatically detect and deploy

## Environment Variables

For production deployment, set these environment variables in Vercel:

- `NODE_ENV=production`
- `MONGODB_URI=your_mongodb_connection_string` (if using database features)

## Project Structure

```
├── app.js              # Main server file
├── index.html          # Homepage
├── payment.html        # Payment gateway page
├── successPage.html    # Payment success page
├── styles.css          # Main stylesheet
├── script.js           # Main JavaScript file
├── css/                # Additional stylesheets
├── js/                 # JavaScript libraries
├── images/             # Image assets
├── Images/             # Additional image assets
├── models/             # Database models
├── routes/             # API routes
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies and scripts
```

## Live Demo

Once deployed, your website will be available at: `https://your-project-name.vercel.app`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.
