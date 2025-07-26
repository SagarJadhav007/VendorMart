import * as React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { EyeOff, Eye, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';

// interface RegisterModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSwitchToLogin: () => void;
// }



function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [userType, setUserType] = useState<"client" | "consultant" | null>(null);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[398px] rounded-xl bg-white text-black">
        <DialogHeader>
          <div className="flex items-center justify-center mb-3 gap-5">
            <svg
              width="40"
              height="40"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32" cy="32" r="32" fill="#0112B6" fillOpacity="0.05" />
              <path
                d="M31.9999 20.08C34.1559 20.08 35.9199 21.844 35.9199 24C35.9199 26.156 34.1559 27.92 31.9999 27.92C29.8439 27.92 28.0799 26.156 28.0799 24C28.0799 21.844 29.8439 20.08 31.9999 20.08ZM31.9999 18.4C28.9199 18.4 26.3999 20.92 26.3999 24C26.3999 27.08 28.9199 29.6 31.9999 29.6C35.0799 29.6 37.5999 27.08 37.5999 24C37.5999 20.92 35.0799 18.4 31.9999 18.4ZM35.3599 32.4C38.1319 32.4 40.3999 34.668 40.3999 37.44V40.24C40.3999 41.164 39.6439 41.92 38.7199 41.92H25.2799C24.3559 41.92 23.5999 41.164 23.5999 40.24V37.44C23.5999 34.668 25.8679 32.4 28.6399 32.4H35.3599ZM35.3599 30.72H28.6399C24.9439 30.72 21.9199 33.744 21.9199 37.44V40.24C21.9199 42.088 23.4319 43.6 25.2799 43.6H38.7199C40.5679 43.6 42.0799 42.088 42.0799 40.24V37.44C42.0799 33.744 39.0559 30.72 35.3599 30.72Z"
                fill="#0212B5"
              />
            </svg>
            <DialogTitle className="text-2xl text-black">Create account</DialogTitle>
          </div>

          {/* User Type Toggle Always Visible */}
          <div className="flex justify-center gap-4 mb-2">
             <Button
              type="button"
              variant="outline"
              className={`rounded-full px-4 py-1 w-30 ${
                userType === "consultant"
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-black border-gray-400"
              }`}
              onClick={() => setUserType("consultant")}
            >
              Consultant
            </Button>

            <Button
              type="button"
              variant="outline"
              className={`rounded-full px-4 py-1 w-30 ${
                userType === "client"
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-black border-gray-400"
              }`}
              onClick={() => setUserType("client")}
            >
              Client
            </Button>
          </div>
        </DialogHeader>
          {userType && (
            <>
              <div className="space-y-3 mt-2">
                <Input type="email" placeholder="Email*" required className="rounded-full" />
                <Input type="text" placeholder="First Name*" required className="rounded-full" />
                <Input type="text" placeholder="Last Name*" required className="rounded-full" />

                <div className="w-full rounded-full  h-10 border  px-3 py-1 flex items-center focus-within:ring-2 focus-within:ring-gray-400">
                  <PhoneInput
                    defaultCountry="in"
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    inputClassName="w-full !border-none outline-none focus:ring-0"
                    className="w-full"
                  />
                </div>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password*"
                    required
                    className="rounded-full  pr-10"
                  />
                  <span
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </span>
                </div>

                <div className="relative">
                  <Input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm password*"
                    required
                    className="rounded-full  pr-10"
                  />
                  <span
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <Eye size={20} /> : <EyeOff size={20} />}
                  </span>
                </div>

                {userType === "consultant" && (
                  <>
                    <Select required>
                      <SelectTrigger className="w-full h-9 px-4 rounded-full  border-gray-600 !border-inherit">
                        <SelectValue placeholder="Select Professional Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="independent">Unknown</SelectItem>
                        <SelectItem value="freelancing_available">Freelancing and available</SelectItem>
                        <SelectItem value="freelancing_busy">Freelancing and busy</SelectItem>
                        <SelectItem value="ps_employeed">Employed</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="rounded-full  cursor-pointer"
                      placeholder="Resume"
                    />
                  </>
                )}

                <ReCAPTCHA
                  sitekey="6LfKiz8aAAAAANcSl2O0Ehz1CJLWo5Qb9PdoS7E3"
                  onChange={() => setCaptchaVerified(true)}
                  onExpired={() => setCaptchaVerified(false)}
                />

                <Button
                  type="submit"
                  disabled={!captchaVerified}
                  className="w-full rounded-full bg-black text-white hover:bg-blue-600"
                >
                  Register
                </Button>
              </div>
            </>
          )}
           <div
                className="text-center text-sm pt-4 border-t font-medium cursor-pointer"
                onClick={onSwitchToLogin}
              >
                Already have an account?
              </div>
      </DialogContent>
    </Dialog>
  );
}

export default RegisterModal;