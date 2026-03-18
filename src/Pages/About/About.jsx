import React, { useState } from 'react';
import { Camera, Smartphone, Laptop, Bolt, Tag, Users, Microchip, CircleCheck, Truck, Star, ArrowLeft } from 'lucide-react';

const SmartDealsAbout = () => {
  const [categories] = useState([
    {
      title: 'Cameras',
      icon: Camera,
      color: 'from-blue-500 to-cyan-400',
      bgLight: 'bg-blue-50',
      products: [
        { name: 'Sony A7 IV', discount: '23% off', price: '$2,498', tag: 'top rated', rating: 4.9 },
        { name: 'Canon EOS R6', discount: '18% off', price: '$1,999', tag: 'free lens', rating: 4.8 },
        { name: 'Fujifilm X-T5', discount: '15% off', price: '$1,599', tag: 'compact', rating: 4.7 }
      ]
    },
    {
      title: 'Smartphones',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      bgLight: 'bg-purple-50',
      products: [
        { name: 'iPhone 15 Pro', discount: '12% off', price: '$999', tag: 'fast shipping', rating: 4.9 },
        { name: 'Samsung S24 Ultra', discount: '20% off', price: '$1,149', tag: '256GB', rating: 4.8 },
        { name: 'Google Pixel 8', discount: '25% off', price: '$599', tag: 'best camera', rating: 4.7 }
      ]
    },
    {
      title: 'Laptops',
      icon: Laptop,
      color: 'from-emerald-500 to-teal-400',
      bgLight: 'bg-emerald-50',
      products: [
        { name: 'MacBook Pro 14"', discount: '10% off', price: '$1,799', tag: 'M3 pro', rating: 4.9 },
        { name: 'Dell XPS 15', discount: '22% off', price: '$1,549', tag: 'OLED', rating: 4.8 },
        { name: 'Lenovo ThinkPad X1', discount: '30% off', price: '$1,299', tag: 'ultra light', rating: 4.7 }
      ]
    }
  ]);

  const stats = [
    { value: '150K+', label: 'tech lovers', icon: Users, change: '+28%' },
    { value: '847', label: 'daily deals', icon: Bolt, change: 'updated' },
    { value: '32%', label: 'avg. savings', icon: Tag, change: 'best rate' },
    { value: '2.1M', label: 'gadgets sold', icon: Microchip, change: '✨' }
  ];

  const features = [
    { icon: CircleCheck, text: '100% authentic products', color: 'text-green-500' },
    { icon: Truck, text: 'Free shipping on tech', color: 'text-blue-500' },
    { icon: ArrowLeft, text: '30-day returns', color: 'text-purple-500' }
  ];

  const team = [
    { name: 'Alex Chen', role: 'Tech Curator', specialty: 'Cameras', avatar: '📸' },
    { name: 'Mia Rodriguez', role: 'Deal Negotiator', specialty: 'Phones', avatar: '📱' },
    { name: 'Jordan Kim', role: 'Gadget Expert', specialty: 'Laptops', avatar: '💻' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12 bg-gray-50">
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Top Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"></div>

        {/* Hero Section */}
        <div className="px-6 md:px-10 lg:px-14 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left: Title & Badge */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100">
                  ⚡ since 2021
                </span>
                <span className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-gray-600 text-sm ml-1">(4.9)</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  smart deals
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mt-3 flex items-center gap-2">
                <Bolt className="w-5 h-5 text-yellow-400" />
                <span>curated tech · cameras, phones, laptops · insane savings</span>
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 mt-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
                    <feature.icon className={`w-4 h-4 ${feature.color}`} />
                    <span className="text-sm text-gray-600">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Icon Grid */}
            <div className="flex gap-3">
              {[Camera, Smartphone, Laptop].map((Icon, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-2xl shadow-md border border-gray-100">
                  <Icon className="w-8 h-8 text-gray-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <stat.icon className="w-5 h-5 text-blue-500" />
                  <span className="text-xs text-green-600 font-medium">{stat.change}</span>
                </div>
                <div className="mt-2">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="px-6 md:px-10 lg:px-14 mt-4">
          <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 md:p-8 rounded-3xl border border-indigo-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
              We exist to kill overpriced electronics.
            </h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl">
              Tired of paying full price for the latest mirrorless camera, flagship phone, or ultrabook? 
              So were we. <span className="font-semibold text-blue-600">Smart Deals</span> negotiates directly with 
              brands and authorized resellers — then passes the bulk discount to you. No fake MSRP games.
            </p>
          </div>
        </div>

        {/* Product Categories */}
        <div className="px-6 md:px-10 lg:px-14 mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              today's smart deals
            </h3>
            <span className="text-sm text-blue-600 font-medium hover:underline cursor-pointer">
              view all deals →
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} px-5 py-4`}>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-xl p-2">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-lg">{category.title}</h4>
                      <span className="ml-auto text-white/80 text-xs bg-white/20 px-2 py-1 rounded-full">
                        3 deals
                      </span>
                    </div>
                  </div>

                  {/* Product List */}
                  <div className="p-5 space-y-4">
                    {category.products.map((product, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-gray-800">{product.name}</p>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                              {product.tag}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-xs text-gray-500">
                              ★ {product.rating}
                            </span>
                            <span className="text-xs font-medium text-green-600">
                              {product.discount}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-gray-900">{product.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category Footer */}
                  <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                    <button className="w-full text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1">
                      browse all {category.title.toLowerCase()} <span>→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="px-6 md:px-10 lg:px-14 mt-12 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            the people behind the deals
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-2xl">
                  {member.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <span className="text-xs text-blue-600">{member.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="px-6 md:px-10 lg:px-14 py-8 bg-gradient-to-r from-gray-900 to-gray-800 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <h4 className="text-xl font-bold">Ready to save big on tech?</h4>
              <p className="text-gray-300 text-sm mt-1">Join 150,000+ smart shoppers saving daily</p>
            </div>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg">
              <Bolt className="w-5 h-5" />
              unlock smart deals
            </button>
          </div>
        </div>

        {/* Footer Trust Badges */}
        <div className="px-6 md:px-10 lg:px-14 py-4 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between text-xs text-gray-500">
          <div className="flex gap-4">
            <span>🔒 secure checkout</span>
            <span>⚡ instant savings</span>
            <span>📦 free returns</span>
          </div>
          <div className="flex gap-3 text-lg">
            <span>💳</span>
            <span>📱</span>
            <span>💻</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartDealsAbout;