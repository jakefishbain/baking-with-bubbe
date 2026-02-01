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
        <div className="px-4 py-8">
          <div className="mx-auto max-w-sm">
            <div className="rounded-2xl border-2 border-warm-pink bg-white p-8 text-center shadow-lg animate-fade-in">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage-green/30">
                <CheckCircle className="h-8 w-8 text-sage-green" />
              </div>
              <h2
                className="text-2xl text-chocolate"
                style={{ fontFamily: "'Brush Script MT', cursive" }}
              >
                Message Sent!
              </h2>
              <p className="mt-3 font-serif text-chocolate/70">
                Thank you for reaching out! Bubbe will get back to you soon. 💝
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 rounded-full bg-gradient-to-r from-warm-pink to-soft-peach px-6 py-3 font-serif text-chocolate transition-transform active:scale-95"
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

      <div className="px-4 py-6">
        {/* Page title */}
        <div className="mb-6 text-center">
          <h1
            className="text-2xl text-chocolate"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            Get In Touch
          </h1>
          <p className="mt-1 font-serif text-sm text-chocolate/60">
            Bubbe loves hearing from you!
          </p>
        </div>

        {/* Contact info card */}
        <div className="mb-6 rounded-2xl border-2 border-warm-pink bg-white p-5 shadow-lg">
          <div className="space-y-4">
            <a
              href="mailto:bubbe@bakingwithbubbe.com"
              className="flex items-center gap-3 font-serif text-chocolate transition-colors hover:text-cinnamon"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-pink/30">
                <Mail className="h-5 w-5 text-cinnamon" />
              </div>
              <span>bubbe@bakingwithbubbe.com</span>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-serif text-chocolate transition-colors hover:text-cinnamon"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lavender/50">
                <Instagram className="h-5 w-5 text-cinnamon" />
              </div>
              <span>@-</span>
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border-2 border-warm-pink bg-white p-5 shadow-lg"
        >
          <h2
            className="mb-4 text-xl text-chocolate"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            Send a Message
          </h2>

          {/* Name field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-1 block font-serif text-sm text-chocolate"
            >
              Name <span className="text-warm-pink">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-xl border-2 bg-cream px-4 py-3 font-serif text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:ring-2 focus:ring-cinnamon/20 transition-all ${
                errors.name ? 'border-red-400' : 'border-warm-pink/50 focus:border-cinnamon'
              }`}
              placeholder="Your name"
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-1 block font-serif text-sm text-chocolate"
            >
              Email <span className="text-warm-pink">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-xl border-2 bg-cream px-4 py-3 font-serif text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:ring-2 focus:ring-cinnamon/20 transition-all ${
                errors.email ? 'border-red-400' : 'border-warm-pink/50 focus:border-cinnamon'
              }`}
              placeholder="your@email.com"
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject field */}
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="mb-1 block font-serif text-sm text-chocolate"
            >
              Subject <span className="text-chocolate/40">(optional)</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-xl border-2 border-warm-pink/50 bg-cream px-4 py-3 font-serif text-chocolate placeholder:text-chocolate/40 focus:border-cinnamon focus:outline-none focus:ring-2 focus:ring-cinnamon/20 transition-all"
              placeholder="What's this about?"
            />
          </div>

          {/* Message field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-1 block font-serif text-sm text-chocolate"
            >
              Message <span className="text-warm-pink">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full resize-none rounded-xl border-2 bg-cream px-4 py-3 font-serif text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:ring-2 focus:ring-cinnamon/20 transition-all ${
                errors.message ? 'border-red-400' : 'border-warm-pink/50 focus:border-cinnamon'
              }`}
              placeholder="Tell Bubbe what's on your mind..."
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-warm-pink to-soft-peach py-4 font-serif text-chocolate shadow-md transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-50"
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
        <p className="mt-6 text-center font-serif text-sm text-chocolate/50 italic">
          Made with love by Bubbe 💝
        </p>
      </div>
    </main>
  );
}
