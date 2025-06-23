"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, stagger, useAnimate } from "framer-motion";
import { Clock, Mail, MapPin } from "lucide-react";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FacebookIcon, LinkedinIcon, WhatsappIcon } from "react-share";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function ContactPage() {
  const [scope, animate] = useAnimate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  // Animation on mount
  useEffect(() => {
    animate(
      ".contact-item",
      { opacity: 1, y: 0 },
      { delay: stagger(0.1), duration: 0.5 }
    );
  }, []);

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16 max-w-6xl"
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left Column - Form */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-item opacity-0 translate-y-5">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#183459]">
              Let's Connect
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Get in touch for quotes, collaborations, or just to say hello!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 contact-item opacity-0 translate-y-5"
          >
            <div>
              <Label htmlFor="name" className="block mb-2 font-medium">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                className="w-full h-12 bg-gray-100 dark:bg-gray-800"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.name.message as string}
                </motion.p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="block mb-2 font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="w-full h-12 border bg-gray-100 dark:bg-gray-800 "
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.email.message as string}
                </motion.p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="block mb-2 font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                className="w-full min-h-[120px] bg-gray-100 dark:bg-gray-800"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.message.message as string}
                </motion.p>
              )}
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full h-12 text-lg bg-primary-color1 hover:bg-primary-color1/90"
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div
          className="space-y-4 -mt-12"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-item flex items-center justify-center opacity-0 translate-y-5">
            <img
              src="/gif/contact_us2.gif"
              alt="Contact illustration"
              className=" inset-0 h-56 "
            />
          </div>

          <div className="space-y-3 -mt-32 contact-item opacity-0 ">
            <div className="flex items-start gap-4 p-3 bg-zinc-50 dark:bg-gray-900 rounded-lg">
              <div className="p-2 bg-primary-color1/10 rounded-full">
                <Mail className="w-5 h-5 text-primary-color1" />
              </div>
              <div>
                <h3 className="font-medium text-gray-500 dark:text-gray-400">
                  Email
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                  futxtech@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-zinc-50 dark:bg-gray-900 rounded-lg">
              <div className="p-2 bg-primary-color1/10 rounded-full">
                <MdOutlinePhoneIphone className="w-5 h-5 text-primary-color1" />
              </div>
              <div>
                <h3 className="font-medium text-gray-500 dark:text-gray-400">
                  Phone
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                  +962 780 185 759
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-zinc-50 dark:bg-gray-900 rounded-lg">
              <div className="p-2 bg-primary-color1/10 rounded-full">
                <MapPin className="w-5 h-5 text-primary-color1" />
              </div>
              <div>
                <h3 className="font-medium text-gray-500 dark:text-gray-400">
                  Location
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                  Amman, Jordan
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="flex gap-4 contact-item opacity-0 translate-y-5"
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.a
              href="#"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all"
            >
              <WhatsappIcon size={40} round />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all"
            >
              <LinkedinIcon size={40} round />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all"
            >
              <FacebookIcon size={40} round />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
