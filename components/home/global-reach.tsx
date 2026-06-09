import { Globe2, MapPin } from "lucide-react";

export function GlobalReach() {
  return (
    <section className="relative overflow-hidden bg-[#FCFBF8] px-4 py-6 sm:px-6 md:py-8">
      {/* Background World Map graphic or gradient pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/moksha/hero2.png')] bg-cover bg-center grayscale pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF8] via-transparent to-[#FCFBF8] opacity-80 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#F0D9C1] bg-[#FFF1E8] px-3 py-1 text-xs font-semibold tracking-wide text-[#D1842F] uppercase">
            <Globe2 className="h-3.5 w-3.5" /> Global Footprint
          </span>
          <h2 className="font-serif text-3xl font-medium text-[#17202A] sm:text-4xl">
            Bringing Loved Ones Home, <br className="hidden sm:block" />From Anywhere in the World.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[#5C6570]">
            Our extensive network spans across major international hubs, enabling us to safely and respectfully repatriate remains across borders with full compliance.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { region: "North America", countries: "USA, Canada", hubs: "New York, Toronto" },
            { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar", hubs: "Dubai, Doha" },
            { region: "Europe & UK", countries: "UK, Germany, France", hubs: "London, Frankfurt" },
            { region: "Asia Pacific", countries: "Australia, Singapore", hubs: "Sydney, Singapore" }
          ].map((area) => (
            <div key={area.region} className="group relative overflow-hidden rounded-xl border border-[#EDE6DD] bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#D1842F]/40">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#D1842F] to-[#E7C19A] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="h-4 w-4 shrink-0 text-[#D1842F]" />
                  <h3 className="font-serif text-[15px] font-semibold text-[#17202A]">{area.region}</h3>
                </div>
                <p className="text-[12px] font-semibold text-[#C77B21] pl-6">{area.countries}</p>
                <p className="mt-1 text-[11px] font-medium text-[#5C6570] pl-6">Hubs: <span className="text-[#17202A]">{area.hubs}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
