import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Injection Molds", href: "#services" },
    { name: "Die Casting Molds", href: "#services" },
    { name: "CNC Machining", href: "#services" },
    { name: "Mold Repair", href: "#services" },
  ],
  resources: [
    { name: "Case Studies", href: "#" },
    { name: "Technical Specs", href: "#" },
    { name: "Quality Standards", href: "#" },
    { name: "FAQs", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">M</span>
              </div>
              <span className="font-display text-xl font-semibold text-foreground tracking-wide">
                MOLD<span className="text-primary">PRO</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Industry leader in precision mold manufacturing since 1998. 
              Engineering excellence for global clients.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MoldPro Manufacturing. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
