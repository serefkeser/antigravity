---
name: loop-dongusu
description: Self-correcting development loop that automatically writes code, runs tests, analyzes errors, and iterates until all tests pass — zero human intervention required during the cycle.
---

# Loop Döngüsü (Self-Correcting Development Loop)

Bu skill, her kod değişikliğinde otomatik olarak uygulanır. İnsan müdahalesi olmadan hata tespit → analiz → düzeltme → doğrulama döngüsünü çalıştırır.

## Döngü Akışı

```
┌─────────────────────────────────────────────────────┐
│  1. GİRDİ (Prompt)                                  │
│     Kullanıcı özellik/hata tanımı                   │
└──────────────────────┬──────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────┐
│  2. KOD ÜRETİMİ                                    │
│     AI kodu yazar → dosyaya kaydeder                │
└──────────────────────┬──────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────┐
│  3. OTOMATİK TEST (Doğrulama)                       │
│     Sisteme uygun test komutu çalıştırılır:         │
│     • Node/React: npm test / npm run build           │
│     • Python: pytest / python -m unittest            │
│     • Genel: lint, type-check, build komutu          │
│     • Browser: dev server başlat + DOM/konsol kontrol│
└──────────────────────┬──────────────────────────────┘
                       ▼
              ┌────────────────┐
              │  Test Geçti?   │
              └───┬────────┬───┘
                  │        │
              YES │        │ NO
                  ▼        ▼
        ┌──────────┐  ┌──────────────────────────────┐
        │ ✅ BAŞARI │  │  4. HATA ANALİZİ             │
        │  Tamamla  │  │  • Tam hata loglarını oku     │
        │  & Raporla│  │  • Stack trace analiz et       │
        └──────────┘  │  • Root cause belirle          │
                      └──────────────┬───────────────┘
                                     ▼
                      ┌──────────────────────────────┐
                      │  5. KENDİ KENDİNİ DÜZELTME   │
                      │  • Hatayı düzelt               │
                      │  • Kodu güncelle               │
                      │  • Adım 3'e geri dön ↩️        │
                      └──────────────────────────────┘
```

## Zorunlu Kurallar

### Kural 1: Her Kod Değişikliğinden Sonra Doğrula
- Kod yazdıktan sonra **her zaman** uygun doğrulama komutunu çalıştır
- Doğrulama olmadan hiçbir görevi tamamlanmış sayma

### Kural 2: Test Otomatik Algılama
Proje yapısına göre doğru test/build komutunu seç:
| Dosya/Proje Tipi | Doğrulama Komutu |
|---|---|
| `package.json` var | `npm test` veya `npm run build` |
| `.py` dosyası | `python <dosya>` veya `pytest` |
| `Cargo.toml` var | `cargo build && cargo test` |
| `.go` dosyası | `go build ./... && go test ./...` |
| Tek HTML/JS | Browser'da aç, DOM + konsol kontrol |
| JSX (bu proje) | `node --check <dosya>` syntax doğrulama |

### Kural 3: Hata Loglarını TAM Oku
- Hata çıktısını **asla kırpma veya atlama** 
- Tam stack trace, satır numaraları ve hata mesajlarını analiz et
- `manage_task` → `status` ile arka plan görev loglarını kontrol et

### Kural 4: Maksimum İterasyon Limiti
- Aynı hata için en fazla **5 iterasyon** dene
- 5 denemeden sonra hâlâ çözülemediyse:
  - Denenen yaklaşımları özetle
  - Root cause analizini paylaş
  - Kullanıcıdan yönlendirme iste

### Kural 5: Regresyon Koruması
- Bir hatayı düzeltirken **başka bir şeyi bozma**
- Her düzeltmeden sonra sadece kırılan testi değil, **tüm testleri** çalıştır
- Önceki çalışan işlevselliği doğrula

### Kural 6: Sessiz Geri Besleme
- Loop çalışırken gereksiz açıklama yapma
- Sadece hata ve düzeltme detaylarını kısa tut
- Döngü başarıyla tamamlandığında sonucu raporla

## Bu Projeye Özel Uygulama (Antigravity JSX)

Bu proje tek dosyalık bir JSX uygulaması olduğu için loop şöyle çalışır:

1. **Kod Yaz** → `anti.1.0.x.jsx` dosyasını düzenle
2. **Syntax Doğrula** → `node --check anti.1.0.x.jsx` (temel syntax)
3. **Browser Test** → Dev server varsa konsol hatalarını kontrol et
4. **Hata varsa** → Logları oku, düzelt, tekrar doğrula
5. **Başarılı** → `app.js`'e kopyala, versiyon artır, git commit & push

## Aktivasyon

Bu skill aşağıdaki durumlarda **otomatik** aktive olur:
- Herhangi bir kod değişikliği yapıldığında
- Bir bug fix talep edildiğinde
- Yeni özellik eklendiğinde
- Refactoring yapıldığında
- Kullanıcı "loop", "döngü", "test et", "doğrula", "düzelt" dediğinde
