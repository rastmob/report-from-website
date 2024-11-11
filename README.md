
# Report From Website

[![npm version](https://badge.fury.io/js/report-from-website.svg)](https://badge.fury.io/js/report-from-website)

**Report From Website** Angular uygulamaları için kullanıcıların yaşadıkları hataları ve ekran görüntülerini belirli bir sunucuya göndermelerine olanak tanır. Bu kütüphane, kullanıcılardan alınan geri bildirimleri ve hataları görsel olarak yakalayarak geliştirici ekiplere daha detaylı bilgi sunar. Basit bir `report button` bileşeni sunar ve bu bileşen sayesinde kullanıcılar sorun yaşadıkları anı kolayca raporlayabilir.

## Özellikler

- **Ekran Görüntüsü Alma**: Kullanıcıların mevcut ekranlarının görselini otomatik olarak yakalar.
- **Log Toplama**: Konsol logları, URL ve kullanıcı bilgilerini toplar.
- **Sunucuya Gönderim**: Belirli bir URL'ye tüm verileri JSON formatında gönderir.
- **Esneklik**: Kendi sunucunuz için log URL'si ve header bilgilerini dinamik olarak geçebilirsiniz.

## Kurulum

```bash
npm install report-from-website
```

## Kullanım

Kütüphaneyi Angular uygulamanıza entegre etmek için aşağıdaki adımları izleyin.

### Modülü İçe Aktarın

`AppModule` veya bu bileşeni kullanacağınız herhangi bir modülde `ReportFromWebsiteModule`’u içe aktarın.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReportFromWebsiteModule } from 'report-from-website';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReportFromWebsiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Bileşeni Kullanın

`ReportButtonComponent` bileşenini uygulamanızda kullanarak kullanıcıların ekran görüntülerini ve log verilerini sunucunuza göndermelerini sağlayabilirsiniz.

#### `app.component.html`

```html
<app-report-button
  [logUrl]="'https://yourserver.com/api/report/log'"
  [headers]="{
    'Authorization': 'Bearer YOUR_TOKEN_HERE',
    'Content-Type': 'application/json'
  }"
  (reportResult)="handleReportResult($event)">
</app-report-button>
```

#### `app.component.ts`

Rapor gönderiminin sonucunu almak için `handleReportResult` metodunu aşağıdaki gibi tanımlayabilirsiniz:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handleReportResult(result: { status: string, response?: any, error?: any }) {
    if (result.status === 'success') {
      console.log('Report sent successfully:', result.response);
      // Başarılı bildirim gösterebilir veya kullanıcıya mesaj verebilirsiniz
    } else if (result.status === 'error') {
      console.error('Report sending failed:', result.error);
      // Hata durumunda kullanıcıya uygun mesaj gösterilebilir
    }
  }
}
```

### Özelleştirilebilir Giriş Parametreleri

- **`logUrl`** (zorunlu): Sunucunuzdaki log toplama URL'sini belirtir. Örneğin: `https://yourserver.com/api/report/log`
- **`headers`** (isteğe bağlı): HTTP isteğinde kullanılacak header bilgilerini içerir. Genellikle `Authorization` ve `Content-Type` bilgilerini içerir.

### Geri Dönüş Verileri

- **`status`**: İşlem başarılıysa `success`, hata alındıysa `error` döner.
- **`response`**: İşlem başarılıysa sunucudan dönen yanıtı içerir.
- **`error`**: İşlem başarısız olduysa hata detaylarını içerir.

## Örnek Kullanım Senaryosu

Bu kütüphane, özellikle kullanıcıların yaşadıkları sorunları hızlı bir şekilde bildirip geliştirici ekiplerin hataları daha çabuk çözmesine yardımcı olur. Kullanıcılar sadece bir butona tıklayarak yaşadıkları sorunu ekran görüntüsü ve log detaylarıyla beraber sunucuya gönderebilirler. Bu, kullanıcı memnuniyetini artırır ve hataların belirlenmesini kolaylaştırır.

## Bağımlılıklar

Kütüphane, ekran görüntüsü almak için `html2canvas` kütüphanesini kullanmaktadır. Bu bağımlılık `package.json` içinde tanımlıdır ve otomatik olarak yüklenir.

## Katkıda Bulunma

Bu projeye katkıda bulunmak için lütfen [GitHub repo](https://github.com/rastmob/report-from-website) adresine göz atın ve PR gönderin.

## İletişim ve Destek

- **Geliştirici**: [@mobilerast](http://rastmobile.com/en)
- **İletişim**: mehmet.alp@rastmobile.com
- **Telefon**: +905310211446

## Lisans

MIT

---

Bu kütüphanenin entegrasyonunu yaptıktan sonra kullanıcılarınız, karşılaştıkları hataları ekran görüntüleriyle beraber sunucunuza kolayca iletebilirler. Bu sayede geliştirme süreci hızlanır ve kullanıcı deneyimi iyileşir.