"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, stagger, useAnimate } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Modal } from "antd";
import Image from "next/image";
import { images } from "@/constants/images";
import { FacebookIcon, LinkedinIcon, WhatsappIcon } from "react-share";

export default function ContactPage() {
  const [scope, animate] = useAnimate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  useEffect(() => {
    animate(
      ".contact-item",
      { opacity: 1, y: 0 },
      { delay: stagger(0.1), duration: 0.5 }
    );
  }, []);

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", phone); // Add phone number to form data
      formData.append("message", data.message);

      formData.append("_subject", "Future X - New Contact Submission");
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      formData.append("_from", "Future X Contact Form <no-reply@futurex.com>");
      formData.append("_replyto", data.email);
      formData.append(
        "_autoresponse",
        "Thank you for contacting Future X! We'll get back to you soon."
      );
      formData.append("_next", `${window.location.origin}/thank-you`);

      const response = await fetch(
        "https://formsubmit.co/ajax/Waleedalbarghouthi2@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Message sent successfully!");
        reset();
        setPhone("");
        setIsModalOpen(true);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description:
          error instanceof Error ? error.message : "Please try again later",
      });
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16 max-w-6xl"
    >
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            onClick={handleOk}
            className="bg-primary-color1 hover:bg-primary-color1/90"
          >
            Got it!
          </Button>,
        ]}
        centered
      >
        <div className="text-center p-6">
          <Image
            src={images.contact}
            height={44}
            width={44}
            className="size-56 mx-auto mb-2"
            alt="contact"
          />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Thank You for Contacting Us!
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Your message has been successfully sent. We'll get back to you
            within 24 hours. We appreciate your patience!
          </p>
        </div>
      </Modal>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Form Column */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-item opacity-0 translate-y-5">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#183459] dark:text-white">
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message as string}
                </p>
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
                className="w-full h-12 bg-gray-100 dark:bg-gray-800"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            <div>
              <Label className="block mb-2 font-medium ">Phone Number</Label>
              <PhoneInput
                country={"jo"}
                value={phone}
                onChange={setPhone}
                buttonClass="bg-gray-100 dark:!bg-gray-800 !border-none dark:hover:!bg-gray-800"
                containerStyle={{
                  marginBottom: "8px",
                }}
                inputClass="!w-full !h-12 !bg-gray-100 dark:!bg-gray-800 !border-none"
                dropdownClass="bg-gray-100 dark:!bg-gray-800  !text-gray-500 dark:!text-gray-400"
              />
            </div>

            <div>
              <Label htmlFor="message" className="block mb-2 font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                className="w-full min-h-[120px] bg-gray-100 dark:bg-gray-800 !border-none"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message as string}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-lg bg-primary-color1 hover:bg-primary-color1/90"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>

        {/* Contact Info Column */}
        <motion.div
          className="space-y-8 "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-item flex items-center justify-center opacity-0 space-y-6 translate-y-5">
            <Image
              src={images.contactUs}
              height={44}
              width={44}
              className="size-56 mx-auto"
              alt="contact"
            />
          </div>

          <div className="space-y-6 -mt-32 contact-item opacity-0">
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
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
