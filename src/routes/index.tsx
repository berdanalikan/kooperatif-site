import { createFileRoute } from "@tanstack/react-router";
import koopLogo from "@/assets/eczaci-yatirim-logo.jpeg";
import { RegistrationForm } from "@/components/RegistrationForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eczacı Yatırım Kooperatifi — Ön Talep Formu" },
      {
        name: "description",
        content:
          "Eczacılara özel Eczacı Yatırım Konut Yapı Kooperatifi ön talep formu — ilk bilgilendirilenler arasında yer alın.",
      },
      { property: "og:title", content: "Eczacı Yatırım Kooperatifi — Ön Kayıt" },
      {
        property: "og:description",
        content:
          "Eczacılara özel yatırım kooperatifi kuruluş sürecinden ilk haberdar olanlar arasında yer alın.",
      },
    ],
  }),
  component: KooperatifPage,
});

function KooperatifPage() {
  return (
    <main className="min-h-screen bg-background">
      <section
        className="relative overflow-hidden border-b"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--koop) 14%, transparent), color-mix(in oklab, var(--koop-accent) 14%, transparent))",
        }}
      >
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:py-20">
          <img src={koopLogo} alt="Eczacı Yatırım Kooperatifi" className="mx-auto max-h-40 object-contain" />
          <h1 className="mt-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--koop)" }}>
            Eczacılara Özel Yatırım Kooperatifi — İlk Bilgilendirilenler Arasında Yer Alın
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Kooperatifin kuruluş süreci tamamlandığında proje detaylarını sizinle paylaşalım.
          </p>
          <Button asChild size="lg" className="mt-6" style={{ backgroundColor: "var(--koop)", color: "white" }}>
            <a href="#kayit">Ön Kayıt Ol</a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Eczacı Yatırım Konut Yapı Kooperatifi — Bilgilendirme Ön Talep Formu
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Eczacılara özel olarak planlanan <strong>Eczacı Yatırım Konut Yapı Kooperatifi</strong>{" "}
            kurulma sürecindedir.
          </p>
          <p>
            Bu form, kooperatifin kuruluş süreci tamamlandığında sizleri bilgilendirmek, proje
            detaylarını paylaşmak ve ön talep oluşturmak amacıyla hazırlanmıştır.
          </p>
          <p>
            Bilgilerinizi paylaşmanız halinde, yalnızca bu kapsamda sizinle iletişime geçilecektir.
          </p>
          <p>Siz de bu sürecin ilk haberdar olanları arasında yer alabilirsiniz.</p>
        </div>
      </section>

      <section id="kayit" className="mx-auto max-w-2xl scroll-mt-8 px-4 pb-12">
        <RegistrationForm />
        <style>{`#kayit button[type="submit"]{background-color: var(--koop);}`}</style>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <Accordion type="single" collapsible className="rounded-2xl border bg-card px-4 sm:px-6">
          <AccordionItem value="kvkk" className="border-0">
            <AccordionTrigger className="text-left text-base font-semibold">
              KVKK Aydınlatma ve Açık Rıza Metni
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-sm leading-relaxed text-foreground/85">
              <p>
                Kurulma sürecinde olan <strong>Eczacı Yatırım Konut Yapı Kooperatifi</strong>{" "}
                kapsamında, kooperatifin kuruluş süreci ve sonrasında yapılacak bilgilendirmeler
                için; ad-soyad, telefon numarası ve e-posta bilgileriniz talep edilmektedir.
              </p>
              <p>
                Paylaştığınız kişisel verileriniz, yalnızca bilgilendirme ve iletişim amacıyla
                işlenecek olup üçüncü kişilerle paylaşılmayacaktır.
              </p>
              <p>Bilgileriniz, talebiniz halinde silinecek olup, güvenli şekilde saklanacaktır.</p>
              <p>
                Bu formu doldurarak kişisel verilerinizin yukarıda belirtilen kapsamda işlenmesine
                açık rıza verdiğinizi kabul etmiş olursunuz.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Eczacı Yatırım Konut Yapı Kooperatifi — Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
