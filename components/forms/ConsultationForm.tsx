"use client";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  Clock,
  Figma,
  FileText,
  Globe,
  Mail,
  Megaphone,
  Phone,
  Printer,
  Rocket,
  Server,
  User,
} from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { z } from "zod";
import { CardFooter } from "../ui/card";
import { toast } from "sonner";
import { Modal } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import Image from "next/image";
import { images } from "@/constants/images";

const formSchemaForConsultationForm = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  serviceType: z.string().min(1, "Please select a service"),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

const ConsultationForm = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchemaForConsultationForm>>({
    resolver: zodResolver(formSchemaForConsultationForm),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      description: "",
      serviceType: "",
      date: undefined,
      time: "",
    },
  });

  const serviceTypes = [
    {
      value: "Mobile App Development",
      icon: <Rocket className="h-4 w-4 mr-2" />,
    },
    {
      value: "Web Application Development",
      icon: <Globe className="h-4 w-4 mr-2" />,
    },
    { value: "Printing Services", icon: <Printer className="h-4 w-4 mr-2" /> },
    { value: "UI/UX Design", icon: <Figma className="h-4 w-4 mr-2" /> },
    {
      value: "Custom Software Systems",
      icon: <Server className="h-4 w-4 mr-2" />,
    },
    {
      value: "Digital Marketing",
      icon: <Megaphone className="h-4 w-4 mr-2" />,
    },
  ];

  const availableTimes = [
    "9:00 AM",
    "10:30 AM",
    "12:00 PM",
    "1:30 PM",
    "3:00 PM",
    "4:30 PM",
  ];

  const onSubmit = async (
    values: z.infer<typeof formSchemaForConsultationForm>
  ) => {
    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("serviceType", values.serviceType);
      formData.append("date", format(values.date, "PPP"));
      formData.append("time", values.time);
      formData.append("description", values.description);

      formData.append("_subject", "Future X - New Consultation Request");
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      formData.append("_from", "Future X Consultation <no-reply@futurex.com>");
      formData.append("_replyto", values.email);
      formData.append(
        "_autoresponse",
        "Thank you for booking a consultation with Future X! We'll get back to you soon to confirm your appointment."
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
        toast.success("Consultation booked successfully!");
        form.reset();
        setIsModalOpen(true);
      } else {
        throw new Error(result.message || "Failed to book consultation");
      }
    } catch (error) {
      toast.error("Failed to book consultation", {
        description:
          error instanceof Error ? error.message : "Please try again later",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Success Modal */}
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
              src={images.consolution2}
              height={44}
              width={44}
              className="size-56 mx-auto mb-4"
              alt="contact"
            />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Consultation Booked Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your consultation request has been received. We'll contact you
              within 24 hours to confirm your appointment details. Thank you!
            </p>
          </div>
        </Modal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Full Name Field */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-gray-700 dark:text-gray-300">
                    <User className="h-4 w-4 mr-2" />
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-gray-50 border-gray-200 dark:bg-slate-800 dark:border-zinc-700 focus-visible:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-gray-700 dark:text-gray-300">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      {...field}
                      className="bg-gray-50 border-gray-200 dark:bg-slate-800 dark:border-zinc-700 focus-visible:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Phone Field */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-gray-700 dark:text-gray-300">
                    <Phone className="h-4 w-4 mr-2" />
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <PhoneInput
                      international
                      defaultCountry="JO"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Enter phone number"
                      className={cn(
                        "py-2 px-3 text-sm dark:text-white bg-gray-50 dark:bg-slate-800 border dark:border-zinc-700 focus-within:!border-primary-color1"
                      )}
                      numberInputProps={{
                        className:
                          "bg-gray-50 dark:bg-slate-800 focus:border-none focus:outline-none",
                        style: { outline: "none", border: "none" },
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Service Type Field */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-gray-700 dark:text-gray-300">
                    <FileText className="h-4 w-4 mr-2" />
                    Service Type
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-700 dark:bg-slate-800 dark:border-zinc-700 dark:text-gray-300">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white border-gray-200 shadow-lg dark:bg-slate-800 dark:border-zinc-700">
                      {serviceTypes.map((service) => (
                        <SelectItem
                          key={service.value}
                          value={service.value}
                          className="hover:bg-gray-100 dark:hover:bg-zinc-700 focus:bg-gray-100 dark:focus:bg-zinc-700"
                        >
                          <div className="flex items-center">
                            {service.icon}
                            {service.value}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Date Picker */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex items-center text-gray-700 dark:text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    Appointment Date
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-slate-800 dark:border-zinc-700 dark:text-gray-300 dark:hover:bg-zinc-700",
                            !field.value && "text-gray-400 dark:text-gray-500"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white border-gray-200 shadow-lg dark:bg-slate-800 dark:border-zinc-700"
                      align="start"
                    >
                      <CalendarPicker
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                        className="bg-white dark:bg-slate-800"
                        classNames={{
                          day_selected:
                            "bg-blue-500 text-white hover:bg-blue-600 dark:bg-indigo-600 dark:text-white",
                          day_today:
                            "bg-gray-100 dark:bg-zinc-700 dark:text-white",
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Time Select */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-gray-700 dark:text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    Preferred Time
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-700 dark:bg-slate-800 dark:border-zinc-700 dark:text-gray-300">
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white border-gray-200 shadow-lg dark:bg-slate-800 dark:border-zinc-700">
                      {availableTimes.map((time) => (
                        <SelectItem
                          key={time}
                          value={time}
                          className="hover:bg-gray-100 dark:hover:bg-zinc-700 focus:bg-gray-100 dark:focus:bg-zinc-700"
                        >
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>
        </div>

        {/* Description Field */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">
                  Brief Description of Your Needs
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe what you'd like to discuss during the consultation..."
                    className="min-h-[120px] bg-gray-50 border-gray-200 dark:bg-slate-800 dark:border-zinc-700 focus-visible:ring-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 dark:text-red-400" />
              </FormItem>
            )}
          />
        </motion.div>

        <CardFooter className="px-0 pb-0 flex justify-end">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="px-8 rounded-[4px] bg-primary-color1 hover:bg-primary-color1/90 shadow-lg"
            >
              {isSubmitting ? "Booking..." : "Book Consultation"}
            </Button>
          </motion.div>
        </CardFooter>
      </form>
    </Form>
  );
};

export default ConsultationForm;
