---
name: loop-dongusu
description: Self-correcting development loop that automatically writes code, runs tests, analyzes errors, and iterates until all tests pass — zero human intervention required during the cycle.
---

# Loop Dongusu (Self-Correcting Development Loop)

Bu skill, her kod degisikliginde otomatik olarak uygulanir. Insan mudahalesi olmadan hata tespit -> analiz -> duzeltme -> dogrulama dongusunu calistirir.

## Dongu Akisi

1. GIRDI (Prompt) -> Kullanici ozellik/hata tanimi
2. KOD URETIMI -> AI kodu yazar, dosyaya kaydeder
3. OTOMATIK TEST -> Sisteme uygun test komutu calistirilir
4. HATA ANALIZI -> Tam hata loglarini oku, stack trace analiz et, root cause belirle
5. KENDI KENDINI DUZELTME -> Hatayi duzelt, kodu guncelle, Adim 3'e geri don

## Zorunlu Kurallar

### Kural 1: Her Kod Degisikliginden Sonra Dogrula
- Kod yazdiktan sonra HER ZAMAN uygun dogrulama komutunu calistir
- Dogrulama olmadan hicbir gorevi tamamlanmis sayma

### Kural 2: Test Otomatik Algilama
Proje yapisina gore dogru test/build komutunu sec:
| Dosya/Proje Tipi | Dogrulama Komutu |
|---|---|
| package.json var | npm test veya npm run build |
| .py dosyasi | python <dosya> veya pytest |
| Cargo.toml var | cargo build && cargo test |
| .go dosyasi | go build ./... && go test ./... |
| Tek HTML/JS | Browser'da ac, DOM + konsol kontrol |
| JSX (bu proje) | node --check <dosya> syntax dogrulama |

### Kural 3: Hata Loglarini TAM Oku
- Hata ciktisini ASLA kirpma veya atlama
- Tam stack trace, satir numaralari ve hata mesajlarini analiz et
- manage_task -> status ile arka plan gorev loglarini kontrol et

### Kural 4: Maksimum Iterasyon Limiti
- Ayni hata icin en fazla 5 iterasyon dene
- 5 denemeden sonra hala cozulemediyse:
  - Denenen yaklasimlari ozetle
  - Root cause analizini paylas
  - Kullanicidan yonlendirme iste

### Kural 5: Regresyon Korumasi
- Bir hatayi duzeltirken baska bir seyi bozma
- Her duzeltmeden sonra sadece kirilan testi degil, TUM TESTLERI calistir
- Onceki calisan islevselligi dogrula

### Kural 6: Sessiz Geri Besleme
- Loop calisirken gereksiz aciklama yapma
- Sadece hata ve duzeltme detaylarini kisa tut
- Dongu basariyla tamamlandiginda sonucu raporla

## Bu Projeye Ozel Uygulama (Antigravity JSX)

Bu proje tek dosyalik bir JSX uygulamasi oldugu icin loop soyle calisir:

1. Kod Yaz -> anti.1.0.x.jsx dosyasini duzenle
2. Syntax Dogrula -> node --check anti.1.0.x.jsx (temel syntax)
3. Browser Test -> Dev server varsa konsol hatalarini kontrol et
4. Hata varsa -> Loglari oku, duzelt, tekrar dogrula
5. Basarili -> app.js'e kopyala, versiyon artir, git commit & push

## Aktivasyon

Bu skill asagidaki durumlarda OTOMATIK aktive olur:
- Herhangi bir kod degisikligi yapildiginda
- Bir bug fix talep edildiginde
- Yeni ozellik eklendiginde
- Refactoring yapildiginda
- Kullanici loop, dongu, test et, dogrula, duzelt dediginde
