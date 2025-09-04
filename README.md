# TattooAI - React Native App

A professional iOS app for AI-powered tattoo design and try-on features, built with React Native and Expo.

## 🎯 Features

- **AI Tattoo Generator**: Create unique designs with artificial intelligence
- **Tattoo Try-On**: See how tattoos look on your body
- **Subscription System**: Two-tier pricing with credit management
- **Modern UI**: Clean, professional interface with dark/light mode
- **Apple IAP Ready**: Full subscription integration for App Store

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run on iOS simulator
npm run ios

# Run on Android
npm run android

# Run on web
npm run web
```

## 📱 Building for TestFlight

1. **Install EAS CLI**:
   ```bash
   npm install -g eas-cli
   eas login
   ```

2. **Configure build**:
   ```bash
   eas build:configure
   ```

3. **Build for iOS**:
   ```bash
   eas build --platform ios
   ```

4. **Submit to TestFlight**:
   ```bash
   eas submit --platform ios
   ```

## 💰 Subscription Plans

- **Free**: 5 credits, 3 exports
- **Quick Spark**: $4.99/week, 30 credits
- **Deep Dive**: $12.99/month, 120 credits

## 🛠 Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **React Navigation** for routing
- **AsyncStorage** for local data
- **Supabase** for backend
- **Expo Linear Gradient** for UI

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/       # App screens
├── services/      # Business logic
├── types/         # TypeScript types
└── utils/         # Utilities
```

## 🔧 Development

The app is fully configured and ready for development. All major features are implemented:

- ✅ Navigation system
- ✅ Subscription management
- ✅ Credit system
- ✅ Theme system
- ✅ Screen components
- ✅ Service layer

## 📱 Screenshots

The app includes:
- Home dashboard
- Create tools selection
- Saved designs
- AI generator
- Tattoo try-on
- Settings

## 🎨 Design

- Modern, clean interface
- Dark/light mode support
- Responsive design
- Native iOS feel
- Smooth animations

## 🔐 Security

- Encrypted data storage
- Secure API calls
- Privacy compliant
- Apple IAP integration

## 📊 Analytics

Ready for:
- User behavior tracking
- Subscription metrics
- Credit usage analytics
- Error monitoring

## 🚀 Deployment

The app is configured for:
- iOS App Store
- TestFlight distribution
- EAS Build system
- Automatic code signing

## 📞 Support

For questions or issues, check the `BUILD_GUIDE.md` file for detailed instructions.

## 🎉 Ready for Launch!

Your app is now ready for TestFlight submission. The subscription system follows Apple's guidelines and provides a professional user experience.

Good luck with your launch! 🚀
