# Vining - AI Photo Enhancement Platform

A cutting-edge web application that uses advanced AI technology to enhance and restore your photos instantly. Transform ordinary images into professional-quality photographs with just one click.

## Features

- **AI-Powered Enhancement**: Leverage Google's Gemini 2.0 Flash model for superior image processing
- **Professional Quality**: Automatic lighting, color, and sharpness optimization
- **Photo Restoration**: Remove scratches, stains, and age-related damage
- **Interactive Comparison**: Side-by-side slider to compare original and enhanced images
- **High-Resolution Support**: Process images up to 50MB while maintaining original dimensions
- **Real-time Progress**: Live progress tracking during image processing
- **Instant Download**: Download enhanced images immediately after processing
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## Quick Start

### Prerequisites

- [Bun.sh](https://bun.sh/) (Latest version)
- Google Gemini API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vining
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Gemini API key:
   ```
   VITE_APP_GEMINI_KEY=your_gemini_api_key_here
   ```

4. **Start development server**
   ```bash
   bun run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Getting a Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Navigate to API keys section
4. Create a new API key
5. Copy the key to your `.env` file

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center" style="display: flex; align-items: center; justify-content: space-between;">
   <p style="margin-left: 25rem; margin-top: 1.2rem;">Created by <a href="https://github.com/pimatis">Pimatis Labs</a></p>
   <img src="https://www.upload.ee/image/17796243/logo.png" alt="PiContent Logo" width="30" style="opacity: 0.2; position: absolute;">
</div>
