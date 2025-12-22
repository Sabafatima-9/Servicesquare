import { MapPin, Phone } from 'lucide-react';

const PHONE = '7842595947';

const areas = [
  'Banjara Hills',
  'Jubilee Hills',
  'Masab Tank',
  'Ameerpet',
  'Suncity',
  'Attapur',
  'Lingamaplly',
  'Tellapur',
  'Gopanpally',
  'Shamshabad',
  'Moinabad',
  'Chandanagar',
  'BHEL',
  'Kukatpally',
  'Nizampet',
  'Ramachanrapuram',
  'Nallagandla',
  'Film Nagar',
  'Rajendar Nagar',
  'Kismatpur',
  'Kali Mandir',
  'Katedhan',
  'Borabanda',
  'Yousufguda',
  'Lakdi Ka Pul',
  'Mallepally',
  'Somajiguda',
  'Begumpet',
  'Khairatabad',
  'Balkampet',
  'Gachibowli',
  'Panjagutta',
  'Hitech City',
  'Kondapur',
  'Bachupally',
  'Manikonda',
  'Miyapur',
  'Narsingi',
  'Kokapet',
  'Bandlaguda Jagir',
  'Shaikpet',
  'Tolichowki',
  'Rai Durg',
  'Near me',
  'Near Hyderabad, Telangana',
  'Hyderabad',
];

const serviceData: Record<string, string[]> = {
  'Fridge Repair & Service': areas,
  'Commercial Fridge Repair & Service': areas,
  'Deep Freezer Repair & Service': areas,
  'Washing Machine Repair & Service': areas,
  'AC Repair & Service': areas,
  'Oven Repair & Service': areas,
};



export default function ServiceAreas() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Service Areas</h2>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
            Tap a number to call us directly for the service you need in your area.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(serviceData).map(([service, svcAreas]) => (
            <div key={service} className="bg-white rounded-xl shadow-sm overflow-hidden transform-gpu" style={{ perspective: 1000 }}>
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#2E5AAC]/10 rounded-md">
                    <MapPin size={20} className="text-[#1e3f7a]" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">{service}</h3>
                </div>

                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 bg-[#1e3f7a] text-white text-sm px-3 py-2 rounded-md shadow-sm hover:bg-[#2E5AAC] transition-colors"
                >
                  <Phone size={14} />
                  Call {PHONE}
                </a>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                  {svcAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 shadow-sm transform-gpu transition-transform duration-200 hover:scale-105 hover:shadow-md"
                    >
                      <span className="w-2 h-2 bg-[#2E5AAC] rounded-full inline-block" />
                      <span className="text-sm text-slate-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
