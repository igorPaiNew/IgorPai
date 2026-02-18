import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Lock, Truck, AlertCircle } from 'lucide-react';
import {
  CartSummary,
  CartLineItems,
  CartLineItemRepeater,
  CartTotalsPrice,
  CartTotalsDiscount,
  CartTotalsShipping,
  CartTotalsTax,
  CartTotalsTotal,
} from '@/components/ui/ecom/Cart';
import {
  LineItemImage,
  LineItemTitle,
  LineItemSelectedOptions,
  LineItemSelectedOptionRepeater,
  LineItemQuantity,
} from '@/components/ui/ecom/LineItem';
import {
  SelectedOptionText,
  SelectedOptionColor,
} from '@/components/ui/ecom/SelectedOption';
import { CommerceActionsCheckout } from '@/components/ui/ecom/Commerce';

export default function CheckoutPage() {
  const [activeTab, setActiveTab] = useState('shipping');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    shippingMethod: 'standard',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && 
                      formData.address && formData.city && formData.state && formData.zipCode;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 py-8 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            Checkout
          </h1>
          <p className="text-textlight">Complete your order securely</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="shipping" className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span className="hidden sm:inline">Shipping</span>
                  </TabsTrigger>
                  <TabsTrigger value="billing" className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Billing</span>
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span className="hidden sm:inline">Payment</span>
                  </TabsTrigger>
                </TabsList>

                {/* Shipping Information */}
                <TabsContent value="shipping" className="space-y-6">
                  <Card className="p-6 border border-bordersubtle bg-background">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                      Shipping Address
                    </h2>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-foreground mb-2 block">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            className="bg-primary border-bordersubtle text-foreground"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-foreground mb-2 block">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                            className="bg-primary border-bordersubtle text-foreground"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-foreground mb-2 block">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="bg-primary border-bordersubtle text-foreground"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-foreground mb-2 block">
                            Phone
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 000-0000"
                            className="bg-primary border-bordersubtle text-foreground"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address" className="text-foreground mb-2 block">
                          Address *
                        </Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123 Main Street"
                          className="bg-primary border-bordersubtle text-foreground"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city" className="text-foreground mb-2 block">
                            City *
                          </Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="New York"
                            className="bg-primary border-bordersubtle text-foreground"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state" className="text-foreground mb-2 block">
                            State/Province *
                          </Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="NY"
                            className="bg-primary border-bordersubtle text-foreground"
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode" className="text-foreground mb-2 block">
                            ZIP Code *
                          </Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="10001"
                            className="bg-primary border-bordersubtle text-foreground"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="country" className="text-foreground mb-2 block">
                          Country
                        </Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="United States"
                          className="bg-primary border-bordersubtle text-foreground"
                        />
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-bordersubtle">
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                        Shipping Method
                      </h3>
                      <div className="space-y-3">
                        {[
                          { id: 'standard', label: 'Standard Shipping', desc: '5-7 business days', price: 'FREE' },
                          { id: 'express', label: 'Express Shipping', desc: '2-3 business days', price: '+$15.00' },
                          { id: 'overnight', label: 'Overnight Shipping', desc: 'Next business day', price: '+$35.00' },
                        ].map(method => (
                          <label key={method.id} className="flex items-center p-3 border border-bordersubtle rounded-lg cursor-pointer hover:bg-primary/50 transition-colors">
                            <input
                              type="radio"
                              name="shippingMethod"
                              value={method.id}
                              checked={formData.shippingMethod === method.id}
                              onChange={handleInputChange}
                              className="w-4 h-4"
                            />
                            <div className="ml-3 flex-1">
                              <p className="font-medium text-foreground">{method.label}</p>
                              <p className="text-sm text-textlight">{method.desc}</p>
                            </div>
                            <span className="font-semibold text-secondary">{method.price}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => setActiveTab('billing')}
                      disabled={!isFormValid}
                      className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-primary font-semibold py-6"
                    >
                      Continue to Billing
                    </Button>
                  </Card>
                </TabsContent>

                {/* Billing Information */}
                <TabsContent value="billing" className="space-y-6">
                  <Card className="p-6 border border-bordersubtle bg-background">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                      Billing Address
                    </h2>

                    <div className="mb-6 p-4 bg-primary/50 border border-bordersubtle rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">
                        Billing address will be the same as shipping address
                      </p>
                    </div>

                    <div className="space-y-4 opacity-60 pointer-events-none">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-foreground mb-2 block">First Name</Label>
                          <Input
                            value={formData.firstName}
                            disabled
                            className="bg-primary border-bordersubtle text-foreground"
                          />
                        </div>
                        <div>
                          <Label className="text-foreground mb-2 block">Last Name</Label>
                          <Input
                            value={formData.lastName}
                            disabled
                            className="bg-primary border-bordersubtle text-foreground"
                          />
                        </div>
                      </div>

                      <div>
                        <Label className="text-foreground mb-2 block">Address</Label>
                        <Input
                          value={formData.address}
                          disabled
                          className="bg-primary border-bordersubtle text-foreground"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Input value={formData.city} disabled className="bg-primary border-bordersubtle text-foreground" />
                        <Input value={formData.state} disabled className="bg-primary border-bordersubtle text-foreground" />
                        <Input value={formData.zipCode} disabled className="bg-primary border-bordersubtle text-foreground" />
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-bordersubtle">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                        <p className="text-foreground font-medium">Billing address confirmed</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        onClick={() => setActiveTab('shipping')}
                        variant="outline"
                        className="flex-1 py-6"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => setActiveTab('payment')}
                        className="flex-1 bg-secondary hover:bg-secondary/90 text-primary font-semibold py-6"
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </Card>
                </TabsContent>

                {/* Payment Information */}
                <TabsContent value="payment" className="space-y-6">
                  <Card className="p-6 border border-bordersubtle bg-background">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                      Payment Method
                    </h2>

                    <div className="space-y-4 mb-8">
                      {[
                        { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                        { id: 'paypal', label: 'PayPal', icon: '🅿️' },
                        { id: 'apple', label: 'Apple Pay', icon: '🍎' },
                      ].map(method => (
                        <label key={method.id} className="flex items-center p-4 border border-bordersubtle rounded-lg cursor-pointer hover:bg-primary/50 transition-colors">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            defaultChecked={method.id === 'card'}
                            className="w-4 h-4"
                          />
                          <span className="ml-3 text-lg">{method.icon}</span>
                          <span className="ml-3 font-medium text-foreground">{method.label}</span>
                        </label>
                      ))}
                    </div>

                    <div className="p-4 bg-primary/50 border border-bordersubtle rounded-lg flex items-start gap-3 mb-8">
                      <Lock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">
                        Your payment information is encrypted and secure. We never store your full card details.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        onClick={() => setActiveTab('billing')}
                        variant="outline"
                        className="flex-1 py-6"
                      >
                        Back
                      </Button>
                      <CommerceActionsCheckout
                        label="Complete Purchase"
                        loadingState="Processing Payment..."
                        className="flex-1"
                      />
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sticky top-6"
            >
              <Card className="p-6 border border-bordersubtle bg-primary/30 backdrop-blur-sm">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Order Summary
                </h3>

                {/* Cart Items Preview */}
                <CartLineItems emptyState={EmptyOrderState}>
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    <CartLineItemRepeater>
                      <div className="flex gap-3 pb-4 border-b border-bordersubtle last:border-0">
                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-primary/50">
                          <LineItemImage />
                        </div>
                        <div className="flex-1 min-w-0">
                          <LineItemTitle className="text-sm font-medium text-foreground truncate" />
                          <LineItemQuantity steps={1}>
                            {({ quantity }) => (
                              <p className="text-xs text-textlight mt-1">Qty: {quantity}</p>
                            )}
                          </LineItemQuantity>
                        </div>
                      </div>
                    </CartLineItemRepeater>
                  </div>
                </CartLineItems>

                {/* Pricing Summary */}
                <div className="space-y-3 pt-6 border-t border-bordersubtle">
                  <div className="flex justify-between text-sm">
                    <span className="text-textlight">Subtotal</span>
                    <CartTotalsPrice className="text-foreground font-medium" />
                  </div>
                  <CartTotalsDiscount label="Discount" className="flex justify-between text-sm" />
                  <CartTotalsShipping label="Shipping" className="flex justify-between text-sm" />
                  <CartTotalsTax label="Tax" className="flex justify-between text-sm" />

                  <div className="pt-3 border-t border-bordersubtle">
                    <div className="flex justify-between items-center">
                      <span className="font-heading font-bold text-foreground">Total</span>
                      <CartTotalsTotal className="text-lg font-heading font-bold text-secondary" />
                    </div>
                  </div>
                </div>

                <CartSummary asChild>
                  {({ totalItems }) => (
                    <p className="text-xs text-textlight text-center mt-4">
                      {totalItems} {totalItems === 1 ? 'item' : 'items'} in order
                    </p>
                  )}
                </CartSummary>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const EmptyOrderState = () => {
  return (
    <div className="text-center py-8">
      <p className="text-textlight text-sm">Your cart is empty</p>
    </div>
  );
};
