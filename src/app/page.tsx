"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { CheckCircle, Clock, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="grid"
        cardStyle="solid"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="AR Electrician Work"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="AR Electrician Work"
      description="24/7 Trusted Electrical Solutions in Indore. Reliable, professional, and certified service whenever you need it."
      buttons={[
        {
          text: "Call +91 97534 18737",
          href: "tel:+919753418737",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-uniform-working-switchboard-electricity_169016-67894.jpg",
          imageAlt: "Electrician Service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/electrical-tools-dark-table_23-2147743045.jpg",
          imageAlt: "Electrician Service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-uniform-working-switchboard-electricity_169016-67663.jpg",
          imageAlt: "Electrician Service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-uniform-working-switchboard-electricity_169016-67963.jpg",
          imageAlt: "Electrician Service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/service-maintenance-worker-repairing_23-2149176685.jpg",
          imageAlt: "Electrician Service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/different-electrical-tools-digital-tablet-wooden-background-flat-lay_169016-24603.jpg",
          imageAlt: "Electrician Service",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="About Vinod Patidar"
      description="With years of experience serving Greater Brijeshwari and across Indore, I provide high-quality, 24/7 emergency electrical services. From complex home wiring to simple switch repairs, your safety is my priority."
      imageSrc="http://img.b2bpic.net/free-photo/electrician-builder-work-installation-lamps-height-professional-overalls-with-drill-background-repair-site_169016-7325.jpg"
      imageAlt="Vinod Patidar - Lead Electrician"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Circuit Breaker Setup",
          tags: [
            "MCB",
            "Safety",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-man-clicking-bell_23-2148593096.jpg",
        },
        {
          id: "f2",
          title: "Fan & Light Repair",
          tags: [
            "Fixture",
            "Repair",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/man-servant-doing-chores-around-house_23-2149508115.jpg",
        },
        {
          id: "f3",
          title: "Meter Installation",
          tags: [
            "Smart",
            "Meter",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/hands-electrician-installing-electrical-outlet-new-house-assembly-electrical-network-room-installation-electrical-network_166373-2204.jpg",
        },
      ]}
      title="Professional Electrical Services"
      description="Comprehensive electrical solutions for your home and office."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "p1",
          name: "24/7 Availability",
          price: "Always",
          features: [
            "Emergency response",
            "Night & Day",
            "Public Holidays",
          ],
          buttons: [
            {
              text: "Contact Now",
            },
          ],
        },
        {
          id: "p2",
          name: "Expert Certified",
          price: "Verified",
          features: [
            "Professional tools",
            "Skilled repairs",
            "Safe handling",
          ],
          buttons: [
            {
              text: "Book Appointment",
            },
          ],
        },
      ]}
      title="Why Choose Us"
      description="Excellence in service, every single time."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Ankit Verma",
          handle: "@ankitv",
          testimonial: "Excellent service, prompt arrival for my fan repair.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-spending-time-together-experiencing-time-expansion_23-2151338278.jpg",
        },
        {
          id: "t2",
          name: "Riya Sharma",
          handle: "@riyas",
          testimonial: "Very professional and safe wiring installation.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-bald-call-center-man-wearing-headset-sitting-desk-with-work-tools-pointing-front-isolated-white-wall_141793-94404.jpg",
        },
        {
          id: "t3",
          name: "Amit Gupta",
          handle: "@amitg",
          testimonial: "The best electrician I found near Shalimar Palms.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-male-call-center-operator-wearing-headset-sitting-desk-with-office-tools-looking-laptop-showing-thumb-up-okay-gesture_141793-121302.jpg",
        },
        {
          id: "t4",
          name: "Neha Jaiswal",
          handle: "@nehaj",
          testimonial: "Fixed my switchboard issues within minutes.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-smiling-cute-barista-girl-pouring-filter-coffee-making-order-cafe-client_1258-203375.jpg",
        },
        {
          id: "t5",
          name: "Rahul Dixit",
          handle: "@rahuld",
          testimonial: "Highly recommend for any emergency electrical repair.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/greetings-joyful-man-woman-standing-with-back-camera-shaking-hands_259150-58289.jpg",
        },
      ]}
      showRating={true}
      title="Customer Reviews"
      description="Trusted by 160+ customers in Indore."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          icon: CheckCircle,
          title: "Successful Jobs",
          value: "1500+",
        },
        {
          id: "m2",
          icon: Star,
          title: "Customer Rating",
          value: "4.9",
        },
        {
          id: "m3",
          icon: Clock,
          title: "Response Time",
          value: "<30m",
        },
      ]}
      title="Our Impact"
      description="Delivering quality service to our Indore community."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Are you available 24/7?",
          content: "Yes, I offer emergency electrician services at any time of the day or night in Indore.",
        },
        {
          id: "q2",
          title: "Do you offer doorstep service?",
          content: "Yes, I provide professional door-step electrical repair and maintenance.",
        },
        {
          id: "q3",
          title: "How to book an appointment?",
          content: "You can reach me via phone or WhatsApp at +91 97534 18737.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Contact Us"
      title="Need Help Today?"
      description="Call or WhatsApp us for instant emergency electrical services."
      buttonText="Send Request"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="AR Electrician Work"
      columns={[
        {
          title: "Contact",
          items: [
            {
              label: "+91 97534 18737",
              href: "tel:+919753418737",
            },
            {
              label: "Greater Brijeshwari, Indore",
              href: "#",
            },
          ],
        },
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2024 AR Electrician Work (Vinod Patidar). All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
