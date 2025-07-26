"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-orange-500">Street Connect</h1>
          <nav className="flex gap-6 text-gray-700">
            <a href="#">Home</a>
            <a href="#">Suppliers</a>
            <a href="#">Orders</a>
            <a href="#" className="text-orange-500 font-semibold">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto flex-1 p-6">
        <h2 className="text-3xl font-bold text-center mb-2">Get in Touch with Street Connect</h2>
        <p className="text-center text-gray-600 mb-10">
          We’re here to support your street food business. Reach out to us for any questions or assistance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Send Message */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <p className="text-sm text-gray-500">
                We’re here to help! Please fill out the form below with details about your request.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="vendor@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input placeholder="Brief summary of your request" value={subject} onChange={(e) => setSubject(e.target.value)} />
              <Textarea placeholder="Please provide more details..." value={description} onChange={(e) => setDescription(e.target.value)} />
              <Input type="file" onChange={handleFileChange} />
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Submit Request</Button>
            </CardContent>
          </Card>

          {/* Immediate Help */}
          <Card>
            <CardHeader>
              <CardTitle>Need Immediate Help?</CardTitle>
              <p className="text-sm text-gray-500">You can also reach us through the following channels.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-gray-600 text-sm">For urgent matters, call our support line: <br /><span className="text-orange-500 font-bold">+1 (800) 555-0199</span></p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-gray-600 text-sm">Send us an email: <br /><span className="text-orange-500">support@streetconnect.com</span></p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Quick Answers</h3>
                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                  Check our FAQ
                </Button>
              </div>
              <div className="flex gap-4 text-gray-600 mt-4">
                <a href="#">🌐</a>
                <a href="#">🐦</a>
                <a href="#">📸</a>
                <a href="#">🔗</a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Banner */}
        <div className="mt-10">
          <img src="/banner.jpg" alt="Happy vendor" className="w-full h-48 object-cover rounded-lg" />
        </div>
      </main>

      <footer className="bg-gray-100 text-center py-4 text-gray-600">
        © 2023 Street Connect
      </footer>
    </div>
  );
}
