'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { Mail, Instagram, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call - POST /api/contact
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen pb-20">
        <Header />
        <div className="px-4 md:px-6 lg:px-8 py-8">
          <div className="mx-auto max-w-md">
            <div className="rounded-2xl border-2 border-bubbe-green bg-white p-8 text-center comic-shadow animate-bounce-in">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bubbe-green/15">
                <CheckCircle className="h-8 w-8 text-bubbe-green" />
              </div>
              <h2 className="text-2xl md:text-3xl text-bubbe-dark font-display tracking-wide">
                Message Sent!
              </h2>
              <p className="mt-3 font-body text-bubbe-gray text-base md:text-lg">
                Thank you for reaching out! Bubbe will get back to you soon.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 rounded-full bg-bubbe-blue px-6 py-3 font-bold text-white transition-all hover:bg-bubbe-blue-dark active:scale-95"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-24">
      <Header />

      <div className="px-4 md:px-6 lg:px-8 py-6 max-w-2xl mx-auto">
        {/* Page title */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl text-bubbe-dark font-display tracking-wide">
            Get In Touch
          </h1>
          <p className="mt-2 font-body text-base md:text-lg text-bubbe-gray">
            Bubbe loves hearing from you!
          </p>
        </div>

        {/* Contact info card */}
        <div className="mb-6 rounded-2xl border-2 border-bubbe-blue bg-white p-5 md:p-6 comic-shadow">
          <div className="space-y-4">
            <a
              href="mailto:bubbe@bakingwithbubbe.com"
              className="flex items-center gap-3 font-body font-semibold text-bubbe-dark transition-colors hover:text-bubbe-blue"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bubbe-blue/15">
                <Mail className="h-6 w-6 text-bubbe-blue" />
              </div>
              <span>bubbe@bakingwithbubbe.com</span>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body font-semibold text-bubbe-dark transition-colors hover:text-bubbe-orange"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bubbe-orange/15">
                <Instagram className="h-6 w-6 text-bubbe-orange" />
              </div>
              <span>@bakingwithbubbe</span>
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border-2 border-bubbe-yellow bg-white p-5 md:p-6 comic-shadow"
        >
          <h2 className="mb-5 text-xl md:text-2xl text-bubbe-dark font-display tracking-wide">
            Send a Message
          </h2>

          {/* Name field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block font-body font-bold text-sm text-bubbe-dark"
            >
              Name <span className="text-bubbe-red">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-xl border-2 bg-bubbe-cream px-4 py-3 font-body text-bubbe-dark placeholder:text-bubbe-gray/50 focus:outline-none focus:ring-4 focus:ring-bubbe-blue/20 transition-all ${
                errors.name ? 'border-bubbe-red' : 'border-bubbe-blue/30 focus:border-bubbe-blue'
              }`}
              placeholder="Your name"
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-bubbe-red font-body">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block font-body font-bold text-sm text-bubbe-dark"
            >
              Email <span className="text-bubbe-red">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-xl border-2 bg-bubbe-cream px-4 py-3 font-body text-bubbe-dark placeholder:text-bubbe-gray/50 focus:outline-none focus:ring-4 focus:ring-bubbe-blue/20 transition-all ${
                errors.email ? 'border-bubbe-red' : 'border-bubbe-blue/30 focus:border-bubbe-blue'
              }`}
              placeholder="your@email.com"
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-bubbe-red font-body">
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject field */}
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="mb-2 block font-body font-bold text-sm text-bubbe-dark"
            >
              Subject <span className="text-bubbe-gray/50">(optional)</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-xl border-2 border-bubbe-blue/30 bg-bubbe-cream px-4 py-3 font-body text-bubbe-dark placeholder:text-bubbe-gray/50 focus:border-bubbe-blue focus:outline-none focus:ring-4 focus:ring-bubbe-blue/20 transition-all"
              placeholder="What's this about?"
            />
          </div>

          {/* Message field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block font-body font-bold text-sm text-bubbe-dark"
            >
              Message <span className="text-bubbe-red">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full resize-none rounded-xl border-2 bg-bubbe-cream px-4 py-3 font-body text-bubbe-dark placeholder:text-bubbe-gray/50 focus:outline-none focus:ring-4 focus:ring-bubbe-blue/20 transition-all ${
                errors.message ? 'border-bubbe-red' : 'border-bubbe-blue/30 focus:border-bubbe-blue'
              }`}
              placeholder="Tell Bubbe what's on your mind..."
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-bubbe-red font-body">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-bubbe-blue py-4 font-bold text-white transition-all hover:bg-bubbe-blue-dark active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin">🍪</span>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Decorative footer */}
        <p className="mt-8 text-center font-body text-sm text-bubbe-gray">
          Made with love by Bubbe
        </p>
      </div>
    </main>
  );
}
