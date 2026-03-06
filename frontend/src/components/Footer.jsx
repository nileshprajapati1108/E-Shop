


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between gap-10">
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-semibold">E‑Shop</div>
          <p className="text-sm text-gray-400 max-w-xs">
            Your one-stop shop for quality products, fast shipping and great support.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17.1 5.92 21.18 10.78 21.98v-6.99H8.26v-2.92h2.52V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.92h-2.3V22C18.08 21.18 22 17.1 22 12.07z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M22 5.92c-.63.28-1.3.47-2.01.56a3.5 3.5 0 0 0-6 3.19A9.93 9.93 0 0 1 3.16 4.7a3.5 3.5 0 0 0 1.08 4.67 3.47 3.47 0 0 1-1.59-.44v.04a3.5 3.5 0 0 0 2.8 3.43c-.5.14-1.02.17-1.56.06a3.5 3.5 0 0 0 3.27 2.43A7.01 7.01 0 0 1 2 18.58a9.9 9.9 0 0 0 5.36 1.57c6.43 0 9.95-5.33 9.95-9.95v-.45A7.1 7.1 0 0 0 22 5.92z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-2.6a1.12 1.12 0 1 1-1.12-1.12A1.12 1.12 0 0 1 18.4 5.6z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-medium mb-3">Shop</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">All Products</a></li>
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Support</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Company</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-sm w-full">
          <h4 className="font-medium mb-3">Subscribe to our newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Get updates on deals and new arrivals.</p>
          <form className="flex gap-2">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <span>© {new Date().getFullYear()} E‑Commerce. All rights reserved.</span>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;