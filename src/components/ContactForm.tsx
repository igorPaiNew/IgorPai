import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    telegram: '',
    issue: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate that name is provided
    if (!formData.name.trim()) {
      setSubmitMessage('Пожалуйста, введите ваше имя');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Here you would typically send the form data to a backend service
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Спасибо! Ваше сообщение отправлено.');
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        telegram: '',
        issue: '',
      });
    } catch (error) {
      setSubmitMessage('Ошибка при отправке. Пожалуйста, попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#1A1F1A] border-t border-[#5A6A4A]">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#C2B280] mb-4 font-bold">
            Свяжитесь со мной
          </h2>
          <p className="font-paragraph text-lg text-[#C9D6B9] mb-8">
            Заполните форму ниже, и я свяжусь с вами в ближайшее время.
          </p>
          <p className="font-paragraph text-base text-[#8A9A5B] mb-12 flex items-center gap-2">

            <a href="https://wa.me/972547608090" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#1fa857] transition-colors" title="WhatsApp">
              <MessageCircle size={18} className="text-white" />
            </a>
            <a href="http://t.me/igorPaiTransformationCoach/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0088cc] hover:bg-[#006ba3] transition-colors" title="Telegram">
              <Send size={18} className="text-white" />
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field - Required */}
            <div>
              <label htmlFor="name" className="font-paragraph text-base text-[#EDEDED] block mb-2">
                Имя <span className="text-[#DF3131]">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                required
                className="bg-[#2F3E2F] border-[#5A6A4A] text-[#EDEDED] placeholder:text-[#8A9A5B] focus:border-[#C2B280]"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="font-paragraph text-base text-[#EDEDED] block mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-[#2F3E2F] border-[#5A6A4A] text-[#EDEDED] placeholder:text-[#8A9A5B] focus:border-[#C2B280]"
              />
            </div>

            {/* WhatsApp Field */}
            <div>
              <label htmlFor="whatsapp" className="font-paragraph text-base text-[#EDEDED] block mb-2">
                WhatsApp
              </label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="bg-[#2F3E2F] border-[#5A6A4A] text-[#EDEDED] placeholder:text-[#8A9A5B] focus:border-[#C2B280]"
              />
            </div>

            {/* Telegram Field */}
            <div>
              <label htmlFor="telegram" className="font-paragraph text-base text-[#EDEDED] block mb-2">
                Telegram
              </label>
              <Input
                id="telegram"
                name="telegram"
                type="text"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="@yourhandle"
                className="bg-[#2F3E2F] border-[#5A6A4A] text-[#EDEDED] placeholder:text-[#8A9A5B] focus:border-[#C2B280]"
              />
            </div>

            {/* Issue Field */}
            <div>
              <label htmlFor="issue" className="font-paragraph text-base text-[#EDEDED] block mb-2">
                Вопрос или проблема
              </label>
              <Textarea
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                placeholder="Расскажите мне о вашем вопросе..."
                rows={5}
                className="bg-[#2F3E2F] border-[#5A6A4A] text-[#EDEDED] placeholder:text-[#8A9A5B] focus:border-[#C2B280] resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#8A9A5B] hover:bg-[#7A8A4B] text-[#FFFFFF] font-heading text-base font-semibold py-3 rounded-lg transition-colors"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </Button>

            {/* Submit Message */}
            {submitMessage && (
              <p className={`font-paragraph text-base text-center ${
                submitMessage.includes('Спасибо') ? 'text-[#8A9A5B]' : 'text-[#DF3131]'
              }`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
