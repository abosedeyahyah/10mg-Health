import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white py-10">
      <div className="px-4 md:px-8 lg:px-16">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Company
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help centre
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Vendors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lenders
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Suppliers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Health Care Providers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Developers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  API Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Docs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider - Now Full Width */}
        <div className="border-t-2 border-gray-700 w-full mx-0"></div>

        {/* Footer Bottom */}
        <div className="text-center md:text-left md:flex md:justify-start gap-10 mt-8">
          {/* Logo and Name */}
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <img
              src="/images/footerlogo.png"
              alt="10MG Health Logo"
              className="w-8 h-8 mr-2"
            />
            <span className="font-semibold text-lg">10MG Health</span>
          </div>

          {/* Legal Text */}
          <p className="text-[#FFFF] text-sm font-Onest">
            10MG is a financial technology platform, not a direct lender or
            bank. Lending and financial services are provided by licensed
            partners.
            <br />
            In Nigeria, 10MG operates through [Registered Partner Name],
            regulated by the Central Bank of Nigeria (CBN). Registered address:
            [Insert Address Here].
            <br />
            For other regions, 10MG partners with financial institutions
            compliant with local regulations to provide secure and reliable
            services.Copyright © 10MG 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
