import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calculator, TrendingUp, Zap, IndianRupee, Home } from 'lucide-react';

const CITIES = [
  { name: 'Delhi', sunHours: 5.2 },
  { name: 'Mumbai', sunHours: 5.5 },
  { name: 'Bangalore', sunHours: 5.8 },
  { name: 'Chennai', sunHours: 5.9 },
  { name: 'Kolkata', sunHours: 5.0 },
  { name: 'Hyderabad', sunHours: 5.7 },
  { name: 'Pune', sunHours: 5.6 },
  { name: 'Ahmedabad', sunHours: 6.0 },
  { name: 'Jaipur', sunHours: 6.2 },
  { name: 'Lucknow', sunHours: 5.3 },
];

const ROOF_AREA_MIN = 100;
const ROOF_AREA_MAX = 1000;
const MONTHLY_BILL_MIN = 1000;
const MONTHLY_BILL_MAX = 100000;

export function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [roofArea, setRoofArea] = useState(300);
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Helper function to clamp roof area value
  const clampRoofArea = (value: number): number => {
    if (isNaN(value) || value < ROOF_AREA_MIN) return ROOF_AREA_MIN;
    if (value > ROOF_AREA_MAX) return ROOF_AREA_MAX;
    return Math.round(value);
  };

  // Helper function to clamp monthly bill value
  const clampMonthlyBill = (value: number): number => {
    if (isNaN(value) || value < MONTHLY_BILL_MIN) return MONTHLY_BILL_MIN;
    if (value > MONTHLY_BILL_MAX) return MONTHLY_BILL_MAX;
    return Math.round(value);
  };

  // Calculations
  const electricityRate = 8; // ₹ per kWh
  const monthlyConsumption = monthlyBill / electricityRate; // kWh
  const systemSize = Math.min(Math.floor(roofArea / 100), Math.floor(monthlyConsumption / 120)); // kW
  const annualGeneration = systemSize * selectedCity.sunHours * 365; // kWh
  const monthlySavings = Math.min((annualGeneration / 12) * electricityRate, monthlyBill);
  const annualSavings = monthlySavings * 12;
  const systemCost = systemSize * 70000; // ₹70,000 per kW average
  const paybackPeriod = systemCost / annualSavings;
  const savings25Years = (annualSavings * 25) - systemCost;

  const handleCityChange = (cityName: string) => {
    const city = CITIES.find(c => c.name === cityName);
    if (city) setSelectedCity(city);
  };

  const handleRoofAreaSliderChange = (value: number[]) => {
    setRoofArea(clampRoofArea(value[0]));
  };

  const handleRoofAreaInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? ROOF_AREA_MIN : Number(e.target.value);
    setRoofArea(clampRoofArea(value));
  };

  const handleMonthlyBillSliderChange = (value: number[]) => {
    setMonthlyBill(clampMonthlyBill(value[0]));
  };

  const handleMonthlyBillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? MONTHLY_BILL_MIN : Number(e.target.value);
    setMonthlyBill(clampMonthlyBill(value));
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="calculator" className="py-12 md:py-16 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-solar-yellow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full mb-6">
            <Calculator className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent">
            Solar Savings Calculator
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Calculate your potential savings and see how solar can transform your energy costs
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <Card className="border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-glow h-full">
              <CardHeader>
                <CardTitle className="text-gold flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Your Details
                </CardTitle>
                <CardDescription>Enter your information to calculate savings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Monthly Bill */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-foreground font-semibold">Monthly Electricity Bill</Label>
                    <span className="text-gold font-bold text-lg flex items-center">
                      <IndianRupee className="w-4 h-4" />
                      {monthlyBill.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={[monthlyBill]}
                    onValueChange={handleMonthlyBillSliderChange}
                    min={MONTHLY_BILL_MIN}
                    max={MONTHLY_BILL_MAX}
                    step={500}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹1,000</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                {/* Roof Area */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-foreground font-semibold">Available Roof Area (sq ft)</Label>
                    <span className="text-gold font-bold text-lg flex items-center">
                      <Home className="w-4 h-4 mr-1" />
                      {roofArea}
                    </span>
                  </div>
                  <Slider
                    value={[roofArea]}
                    onValueChange={handleRoofAreaSliderChange}
                    min={ROOF_AREA_MIN}
                    max={ROOF_AREA_MAX}
                    step={50}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>100 sq ft</span>
                    <span>1,000 sq ft</span>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label className="text-foreground font-semibold">Your Location</Label>
                  <Select value={selectedCity.name} onValueChange={handleCityChange}>
                    <SelectTrigger className="border-gold/30 focus:border-gold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CITIES.map((city) => (
                        <SelectItem key={city.name} value={city.name}>
                          {city.name} ({city.sunHours} sun hours/day)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Manual Input Option */}
                <div className="pt-4 border-t border-gold/20">
                  <Label className="text-sm text-muted-foreground mb-2 block">Or enter exact values:</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="number"
                        value={monthlyBill}
                        onChange={handleMonthlyBillInputChange}
                        placeholder="Monthly Bill"
                        min={MONTHLY_BILL_MIN}
                        max={MONTHLY_BILL_MAX}
                        className="border-gold/30 focus:border-gold"
                      />
                    </div>
                    <div>
                      <Input
                        type="number"
                        value={roofArea}
                        onChange={handleRoofAreaInputChange}
                        placeholder="Roof Area"
                        min={ROOF_AREA_MIN}
                        max={ROOF_AREA_MAX}
                        className="border-gold/30 focus:border-gold"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <Card className="border-2 border-gold/20 bg-gradient-to-br from-gold/10 to-solar-yellow/10 hover-glow h-full">
              <CardHeader>
                <CardTitle className="text-gold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Your Solar Potential
                </CardTitle>
                <CardDescription>Estimated savings and system details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Recommended System Size */}
                <div className="bg-gradient-to-r from-gold to-solar-yellow p-6 rounded-lg text-black">
                  <p className="text-sm font-semibold mb-1">Recommended System Size</p>
                  <p className="text-4xl font-bold">{systemSize} kW</p>
                  <p className="text-sm mt-2 opacity-90">
                    Annual Generation: {annualGeneration.toLocaleString()} kWh
                  </p>
                </div>

                {/* Savings Breakdown */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-gold/20">
                    <div>
                      <p className="text-sm text-muted-foreground">Monthly Savings</p>
                      <p className="text-2xl font-bold text-gold flex items-center">
                        <IndianRupee className="w-5 h-5" />
                        {Math.round(monthlySavings).toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Annual Savings</p>
                      <p className="text-2xl font-bold text-gold flex items-center justify-end">
                        <IndianRupee className="w-5 h-5" />
                        {Math.round(annualSavings).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-card/50 rounded-lg border border-gold/20">
                    <p className="text-sm text-muted-foreground mb-1">Estimated System Cost</p>
                    <p className="text-xl font-bold text-foreground flex items-center">
                      <IndianRupee className="w-4 h-4" />
                      {systemCost.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      (After subsidy: ₹{(systemCost - Math.min(78000, systemSize * 30000)).toLocaleString()})
                    </p>
                  </div>

                  <div className="p-4 bg-card/50 rounded-lg border border-gold/20">
                    <p className="text-sm text-muted-foreground mb-1">Payback Period</p>
                    <p className="text-xl font-bold text-foreground">
                      {paybackPeriod.toFixed(1)} years
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg border border-green-500/30">
                    <p className="text-sm text-muted-foreground mb-1">Total Savings (25 years)</p>
                    <p className="text-3xl font-bold text-green-400 flex items-center">
                      <IndianRupee className="w-6 h-6" />
                      {Math.round(savings25Years).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Environmental Impact: {Math.round(annualGeneration * 25 * 0.0007)} tons CO₂ saved
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-gold to-solar-yellow hover:from-solar-yellow hover:to-gold text-black font-bold transition-all duration-300 hover:shadow-gold-glow"
                  size="lg"
                >
                  Get Detailed Quote
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  * Calculations are estimates based on average values. Actual savings may vary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
