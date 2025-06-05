import { MapPin, Phone, Mail } from "lucide-react";

const addressList = [
  { title: "Murang'a Campus", detail: "P.O. BOX 625-10205 MARAGUA" },
  { title: "Thika Campus", detail: "P.O. Box 17-01015, Ithanga, Murang'a" },
  { title: "Nairobi Campus", detail: "P.O. BOX 33421, MURANG'A ROAD, OPPOSITE K.I.C.D, NAIROBI, KENYA." },
];

const phoneList = [
  { name: "Pioneer School", phone: "+25420 5038065" },
  { name: "St Paul Thomas", phone: "+254 20 5038097" },
  { name: "Pioneer Junior Academy", phone: "+254205038228" },
  { name: "Pioneer Girls High", phone: "+254205038079" },
  { name: "Pioneer Girls Junior", phone: "+25420 503 8234" },
  { name: "Pioneer International University", phone: "+25420 5038050" },
];

const emailList = [
  { name: "Pioneer School", email: "admissions@pioneerschools.ac.ke" },
  { name: "St Paul Thomas", email: "admissions@pioneerschools.ac.ke" },
  { name: "Pioneer Junior Academy", email: "admissions@pioneerschools.ac.ke" },
  { name: "Pioneer Girls High", email: "admissions@pioneerschools.ac.ke" },
  { name: "Pioneer Girls Junior", email: "admissions@pioneerschools.ac.ke" },
];

export default function ContactInfoSection() {
  return (
    <div className="w-full md:w-11/12 mx-auto p-6 md:p-10 bg-white rounded-t-2xl shadow-xl mt-10">
       <hr className="border-t-2 border-gray-300 mb-6 mx-20" />
      <h1 className="font-black text-4xl text-blue-800 text-center p-5">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Address Card */}
        <div className="bg-[#f9fafb] p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-blue-600" />
            <h3 className="text-lg font-bold text-[#223364]">Addresses</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            {addressList.map((addr) => (
              <li key={addr.title}>
                <span className="font-semibold">{addr.title}</span><br />
                <span>{addr.detail}</span>
              </li>
            ))}
          </ul>
          <a 
    href="/maps" // or use an external Google Maps link
    className="inline-block px-4 py-2 my-10 bg-orange-600 left-9 text-white rounded-full shadow hover:bg-orange-700 transition-all duration-200 text-xl"
  >
    Get Directions
  </a>
        </div>

        {/* Phone Card */}
        <div className="bg-[#f9fafb] p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-4">
            <Phone className="text-green-600" />
            <h3 className="text-lg font-bold text-[#223364]">Telephone</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            {phoneList.map(({ name, phone }) => (
              <li key={name}>
                <span className="font-semibold">{name}</span><br />
                <span>{phone}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Email Card */}
        <div className="bg-[#f9fafb] p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="text-red-600" />
            <h3 className="text-lg font-bold text-[#223364]">Email Us</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700 break-all">
            {emailList.map(({ name, email }) => (
              <li key={name}>
                <span className="font-semibold">{name}</span><br />
                <span>{email}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Office Hours */}
      <div className="mt-10 text-center">
        <p className="text-base font-bold text-orange-600">Office Hours:</p>
        <p>Mon - Fri: 8:00am - 5:00pm</p>
        <p>Sat & Sun: 9:00am - 3:00pm</p>

        <div className="mt-4 text-sm text-gray-600">
          Our Schools are boarding institutions for both Boys and Girls.<br />
          Boys are in Murang'a Campus while Girls are in Thika Campus.
        </div>
      </div>
    </div>
  );
}
