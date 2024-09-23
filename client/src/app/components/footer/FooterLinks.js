/** @format */

// components/FooterLinks.tsx
const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {/* Support */}
      <div>
        <h4 className="font-semibold mb-4">Support</h4>
        {/* <p className="text-sm text-gray-600">
          685 Market Street, Las Vegas, LA 95820, United States.
        </p> */}
        <p className="text-sm text-gray-600">685 Market Street, <br/>
                                Las Vegas, LA 95820, <br/>
                                United States.
                                </p>
        <p className="text-sm text-gray-600 my-3">example@domain.com</p>
        <p className="text-sm text-gray-600">(+01) 850-315-5862</p>
      </div>
      {/* Account */}
      <div>
        <h4 className="font-semibold mb-4">Account</h4>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-500 ">
              My Account
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Login / Register
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Cart
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Wishlist
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Shop
            </a>
          </li>
        </ul>
      </div>
      {/* Quick Links */}
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul>
          <li  className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Privacy Policy
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Terms of Use
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              FAQ
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Download App */}
      <div>
        <h3 className="font-semibold mb-4">Download App</h3>
        <p className="text-sm text-gray-600 mb-4">
          Save $3 with App & New User only
        </p>
        <div className="flex space-x-4">
          <img src="/app-store.png" alt="App Store" className="w-32" />
          <img src="/google-play.png" alt="Google Play" className="w-32" />
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
