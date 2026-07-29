# 🚀 OTONOM - AI Powered Media & Social Publishing Studio

OTONOM, yapay zeka destekli otomatik içerik üretimi, haber analizi, video sentezi ve sosyal medya (Buffer & LinkedIn API) yayın otomasyonu sunan gelişmiş bir stüdyo uygulamasıdır.

## 🌟 Özellikler

- **AI İçerik Üretimi & Analizi**: Gemini AI ile metin, haber ve gazete manşetlerinden otomatik senaryo ve görsel promtları oluşturma.
- **Otomatik Sosyal Medya Paylaşımı**: Buffer GraphQL API ve doğrudan LinkedIn REST API desteği ile Twitter/X, Instagram, TikTok ve LinkedIn'e tek tıkla canlı yayın.
- **Medya & Video Sentezi**: Sahneler için yapay zeka görselleri, seslendirme (TTS), atmosfer müzikleri ve MP4 video çıktısı.
- **Gazete Takip**: Günlük gazete manşetlerini çekme, kırpma (crop) ve içerik analizine aktarma.
- **Form & Tercih Kalıcılığı**: Seçilen tüm durasyon, stil, çözünürlük, dil ve sosyal medya ayarlarının `localStorage` üzerinde otomatik saklanması.

## 🛠️ Kurulum & Çalıştırma

### 1. Gereksinimler
- Python 3.10+
- Node.js & npm (İsteğe bağlı web dev server için)

### 2. Bağımlılıklar
```bash
pip install requests pyopenssl
```

### 3. Ortam Değişkenleri (`.env`)
Proje kök dizininde `.env` dosyası oluşturun:
```env
BUFFER_API_KEY=your_buffer_key
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
LOCAL_PROXY_SECRET=your_local_proxy_secret
```

### 4. Arka Plan Sunucusunu Başlatma
```bash
python linkedin_server.py
```

---
*Geliştirici: Şeref Keser*
