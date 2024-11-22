"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], style: "normal" });
const source_sans = Source_Sans_3({ subsets: ["latin"], style: "normal" });



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    messages: "",
    subscribed: false,
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("XXXXXXXX ", formData);
    setIsSubmitted(true);
    setLoading(false);
    // try {
    //   const { data } = await axios.post("/api/contact", formData);
    //   if (data.success) {
    //     toast.success("Message sent successfully!");
    //     setFormData({
    //       name: "",
    //       email: "",
    //       phone: "",
    //       topic: "",
    //       messages: "",
    //       subscribed: false,
    //     });
    //     setIsSubmitted(true);
    //   } else {
    //     toast.error("Failed to send message.");
    //     setIsSubmitted(true);
    //   }
    // } catch (error) {
    //   toast.error("Failed to send message.");
    //   console.error(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className={`${source_sans.className} -mt-[60px] sm:mt-[50px] sm:pb-[50px]`}>
      <div className="px-[20px] sm:px-20">
        {isSubmitted ? (
          <h4 className={`${playfair.className} text-[25px] md:text-5xl text-center font-bold uppercase`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#608BC1] to-[#22177A]">
              Thank You!
            </span>
            <span className="text-gray-400/80"> for reaching out</span>{" "}
          </h4>
        ) : (
          <h4 className={`${playfair.className} text-[25px] md:text-5xl text-center font-bold uppercase`}>
            <span className="text-gray-400/80">Get</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#608BC1] to-[#22177A]">
              in Touch
            </span>
          </h4>
        )}
        <div className="flex flex-col-reverse sm:flex sm:flex-row sm:mb-[60px] mt-[30px] sm:mt-[60px]">
          <div className="invisible sm:visible flex items-center w-1/2 ">
            <Image
              src={"/Homepage/contact-1.jpg"}
              alt={"Hero"}
              width={1920}
              height={1280}
              className="w-full"
            />
          </div>
          <div className="flex justify-center sm:w-1/2 ">
            <div className="w-[90%]">
              <form
                onSubmit={sendForm}
                className="w-full flex flex-col items-start gap-10 mt-10 sm:mb-10"
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full">
                  <Input
                    type="text"
                    placeholder="Your Name*"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    minLength={3}
                    maxLength={30}
                    className="h-12 w-full sm:w-1/2 bg-transparent rounded-xl border-2 border-gray-400 pl-6 text-gray-600 text-base placeholder:text-gray-400"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email*"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    minLength={3}
                    maxLength={30}
                    className="h-12 w-full sm:w-1/2 bg-transparent rounded-xl border-2 border-gray-400 pl-6 text-gray-600 text-base placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full">
                  <Input
                    type="tel"
                    placeholder="Your Phone (Optional)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    minLength={8}
                    maxLength={12}
                    className="h-12 w-full sm:w-1/2 bg-transparent rounded-xl border-2 border-gray-400 outline-none pl-6 text-gray-600 text-base placeholder:text-gray-400"
                  />
                  <Input
                    type="text"
                    placeholder="Topic (Optional)"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    minLength={3}
                    maxLength={30}
                    className="h-12 outline-none w-full sm:w-1/2 bg-transparent rounded-xl border-2 border-gray-400 pl-6 text-base text-gray-600 placeholder:text-gray-400"
                  />
                </div>
                <Textarea
                  placeholder="Your Message*"
                  name="messages"
                  value={formData.messages}
                  onChange={handleInputChange}
                  className="h-24 outline-none bg-transparent rounded-xl border-2 border-gray-400 pl-6 text-gray-600 text-base placeholder:text-gray-400"
                  required
                />
                <div className="flex items-start space-x-2 -mt-6 pl-8">
                  <Checkbox
                    name="subscribed"
                    checked={formData.subscribed}
                    onChange={handleInputChange}
                    className="h-4 w-4 bg-transparent border-2 border-gray-200"
                  />
                  <p className="text-xs mt- text-gray-400">
                    I have subscribed to receive emails to enhance my
                    experience.
                  </p>
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="borderGradient text-center justify-center mx-auto"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <span className="gradientText">Send Message</span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
