import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function NewsletterSubscription() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="max-w-md">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">COILLETIO COLLECTIONS</h2>
                <p  className="mt-4 text-foreground/80">Ilmdibo odu orat p ast joioreo thoar beroobovalny. Bas boq ltas litey cong thes duon thuhq prfaiorcerno sesremo of oll. erectocmiten tilovanmo thecduno.</p>
                <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                        <span className="text-accent font-bold text-2xl">*</span>
                        <div>
                            <h3 className="font-bold text-primary">DMLJIO SOJAHE</h3>
                            <p className="text-muted-foreground">Ruerabovod Deciintice Pleather</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <span className="text-accent font-bold text-2xl">*</span>
                        <div>
                            <h3 className="font-bold text-primary">KENNET SORILKY</h3>
                            <p className="text-muted-foreground">Fooetno Stneel Noarterfer Bearts</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <span className="text-accent font-bold text-2xl">*</span>
                        <div>
                            <h3 className="font-bold text-primary">SLINTE.INFANE</h3>
                            <p className="text-muted-foreground">Nsaea pecaianoe Ocubola theeits</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-md w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Subscribe to Our Newsletter</h2>
              <p className="mt-4 text-base text-foreground/80">
                Receive updates on new collections, exclusive offers, and ethnic fashion trends directly to your inbox.
              </p>
              <form className="mt-8 flex flex-col gap-4">
                <Input 
                  type="text" 
                  placeholder="Name" 
                  className="bg-card border-border"
                  aria-label="Name"
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-card border-border"
                  aria-label="Email Address"
                />
                <Button type="submit" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  SUBSCRIBE
                </Button>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
}
