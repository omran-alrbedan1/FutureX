"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  Users,
  MessageCircle,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Send,
  User,
  Info,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  MdOtherHouses,
  MdOutlinePhoneIphone,
  MdSocialDistance,
} from "react-icons/md";
import { cn } from "@/lib/utils";
import { SlSocialSteam } from "react-icons/sl";
import { classes } from "@/utils/classNames";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-4 py-12  relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#3b82f6"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 font-mono flex items-center justify-center gap-2">
            Contact Us
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, once: true }}
            className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400"
          >
            Have any questions about our products or services?
            <br />
            We're here to help. Chat with our friendly team and get the support
            you need.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-gray-100 dark:border-gray-800 bg-transparent  backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-primary-color1" />
                <h3 className="text-gray-800 dark:text-gray-300">
                  Send us a message
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="ml-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <Label
                    htmlFor="name"
                    className="flex items-center gap-1 mb-2"
                  >
                    <User className="w-4 h-4 text-primary-color1" />
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className={classes.classNameForContactUsFormInput}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {/* @ts-ignore */}
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="flex items-center gap-1 mb-2"
                  >
                    <Mail className="w-4 h-4 text-primary-color1" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className={classes.classNameForContactUsFormInput}
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
                      {/* @ts-ignore */}
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="flex items-center gap-1 mb-2"
                  >
                    <MessageCircle className="w-4 h-4 text-primary-color1" />
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Leave us a message..."
                    className={classes.classNameForContactUsFormInput}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {/* @ts-ignore */}
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full  bg-primary-color1 hover:bg-primary-color1/90  transition-all"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-gray-100 dark:border-gray-800 bg-transparent backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary-color1" />
                  <h3 className="text-gray-800 dark:text-gray-300">
                    Contact Information
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 ml-2">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 text-primary-color1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      futxtech@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MdOutlinePhoneIphone className="w-5 h-5 mt-0.5 text-primary-color1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +962 780 185 759
                    </p>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 text-primary-color1" />
                      <span>Available 9AM-10PM EST</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-100 dark:border-gray-800 bg-transparent  backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MdOtherHouses className="w-5 h-5 text-primary-color1" />
                  <h3 className="text-gray-800 dark:text-gray-300">
                    Other Ways to Reach Us
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 ml-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-primary-color1" />
                  <div>
                    <h3 className="font-medium">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Jordan - Amman
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex items-center justify-center text-primary-color1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Social Media</h3>
                    <div className="-ml-2 flex items-center justify-start gap-3 mt-2 flex-wrap">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 border-gray-300 dark:border-gray-600"
                      >
                        <FaWhatsapp className="w-4 h-4 text-primary-color1" />
                        Whatsapp
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 border-gray-300 dark:border-gray-600"
                      >
                        <Linkedin className="w-4 h-4 text-primary-color1" />
                        LinkedIn
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 border-gray-300 dark:border-gray-600"
                      >
                        <Facebook className="w-4 h-4 text-primary-color1" />
                        Facebook
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
