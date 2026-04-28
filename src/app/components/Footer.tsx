import { businessData } from "../../data/business";
import { DynamicIcon } from "./shared/DynamicIcon";

export function Footer() {
  const { business, socialLinks, footer } = businessData;

  const socialItems = [
    socialLinks.facebook
      ? {
          href: socialLinks.facebook,
          iconName: "Facebook" as const,
          label: "Facebook",
        }
      : null,
    socialLinks.instagram
      ? {
          href: socialLinks.instagram,
          iconName: "Instagram" as const,
          label: "Instagram",
        }
      : null,
    socialLinks.twitter
      ? {
          href: socialLinks.twitter,
          iconName: "Twitter" as const,
          label: "Twitter",
        }
      : null,
  ].filter(Boolean) as {
    href: string;
    iconName: "Facebook" | "Instagram" | "Twitter";
    label: string;
  }[];

  return (
    <footer className="bg-[#1a3324] text-white pt-20 pb-28 md:pb-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div>
            <div className="flex-shrink-0 flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#C5A880] rounded flex items-center justify-center text-[#1F3D2B] font-['Playfair_Display',serif] font-bold text-xl">
                {business.logoInitials}
              </div>
              <span className="font-['Playfair_Display',serif] font-bold text-2xl text-white">
                {business.shortName}
              </span>
            </div>

            <p className="text-[#F5F5F2]/70 font-['Inter',sans-serif] leading-relaxed mb-6">
              {footer.summary}
            </p>

            <div className="flex space-x-4">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C5A880] hover:text-[#1F3D2B] transition-colors"
                >
                  <DynamicIcon name={item.iconName} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 font-['Playfair_Display',serif] text-[#C5A880]">
              Quick Links
            </h4>
            <ul className="space-y-4 font-['Inter',sans-serif] text-[#F5F5F2]/80">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 font-['Playfair_Display',serif] text-[#C5A880]">
              Services
            </h4>
            <ul className="space-y-4 font-['Inter',sans-serif] text-[#F5F5F2]/80">
              {footer.serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 font-['Playfair_Display',serif] text-[#C5A880]">
              Contact Us
            </h4>
            <ul className="space-y-4 font-['Inter',sans-serif] text-[#F5F5F2]/80">
              <li className="flex items-start gap-3">
                <DynamicIcon
                  name="MapPin"
                  className="text-[#C5A880] flex-shrink-0 mt-1"
                  size={20}
                />
                <span>
                  {business.addressLine1}
                  <br />
                  {business.cityStateZip}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <DynamicIcon
                  name="Phone"
                  className="text-[#C5A880] flex-shrink-0"
                  size={20}
                />
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {business.phoneFormatted}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <DynamicIcon
                  name="Mail"
                  className="text-[#C5A880] flex-shrink-0"
                  size={20}
                />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-white transition-colors"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#F5F5F2]/50 font-['Inter',sans-serif]">
          <p>
            &copy; {new Date().getFullYear()} {business.copyrightName}. All
            rights reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            {footer.legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
