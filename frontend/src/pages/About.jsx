import React from "react";
import { Shield, Truck, Headphones, ThumbsUp, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About E-Shop
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted online shopping destination for quality products at
            unbeatable prices with fast delivery and excellent customer
            service.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2020, E-Shop started with a simple mission: to make
              online shopping accessible, trustworthy, and enjoyable for
              everyone. What began as a small startup has grown into a trusted
              marketplace serving thousands of happy customers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in providing quality products, transparent pricing, and
              exceptional customer support. Every order we fulfill is a testament
              to our commitment to your satisfaction.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=400&fit=crop"
              alt="Our Story"
              className="rounded-xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              To revolutionize online shopping by providing a seamless,
              trustworthy platform where customers can find quality products at
              fair prices.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Trusted Quality</h3>
              <p className="text-gray-600 text-sm">
                Every product is hand-picked and tested for quality assurance
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Quick and reliable shipping to get your orders on time
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock customer support to assist you anytime
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">
                Hassle-free return policy for a worry-free shopping experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-10 h-10 mx-auto mb-3 text-green-400" />
              <div className="text-3xl font-bold mb-1">10K+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div>
              <Award className="w-10 h-10 mx-auto mb-3 text-green-400" />
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-gray-400">Products</div>
            </div>
            <div>
              <Truck className="w-10 h-10 mx-auto mb-3 text-green-400" />
              <div className="text-3xl font-bold mb-1">15K+</div>
              <div className="text-gray-400">Orders Delivered</div>
            </div>
            <div>
              <Shield className="w-10 h-10 mx-auto mb-3 text-green-400" />
              <div className="text-3xl font-bold mb-1">4.8</div>
              <div className="text-gray-400">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-5 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose E-Shop?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-xl mb-3 text-green-600">
              Best Prices
            </h3>
            <p className="text-gray-600">
              We offer competitive pricing on all our products, ensuring you get
              the best value for your money with regular discounts and deals.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-xl mb-3 text-green-600">
              Secure Shopping
            </h3>
            <p className="text-gray-600">
              Your security is our priority. We use industry-standard encryption
              to protect your personal and payment information.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-xl mb-3 text-green-600">
              Easy Returns
            </h3>
            <p className="text-gray-600">
              Not satisfied? Return any product within 30 days for a full
              refund. No questions asked, no hassle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-500 py-12">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-white text-lg mb-6">
            We're here to help! Reach out to our support team anytime.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
