import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo } from "../assets";
import { sociallinks, footerlinks } from "../constants"

const Footer = () => {
    return (
        <footer className="w-full bg-primary flex flex-col justify-between items-center py-8 px-4">
            <div className="w-full max-w-6xl flex flex-col gap-8">
                <div className="flex justify-center">
                    <img src={logo} alt="Logo" className="h-[50px]" />
                </div>
                    <div className="flex flex-col items-center gap-4 text-center text-white">
                        <h3 className="text-xl font-bold">🚨&nbsp;Sports News ➡️ Emailed Daily</h3>
                        <p className="text-sm mt-2">
                By entering your email address, you agree to the Bleacher Report{" "}
                <a
                href="https://bleacherreport.com/pages/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#967DFC] font-medium"
                >
                Terms of Use
                </a>{" "}
                and{" "}
                <a
                href="https://wbdprivacy.com/policycenter/b2c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#967DFC] font-medium"
                >
                Privacy Policy
                </a>
                . You understand Bleacher Report and its{" "}
                <a
                href="https://www.warnermediaprivacy.com/policycenter/b2c/affiliateslist/#affiliates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#967DFC] font-medium"
                >
                Affiliates
                </a>{" "}
                may use your email to provide updates, ads, and offers.{" "}
                <a
                href="https://wbdprivacy.com/opt-out"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#967DFC] font-medium"
                >
                Learn more or opt out here
                </a>
                .
            </p>
                    <div className="flex gap-2 w-full max-w-md">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                        />
                        <button className="px-6 py-2 bg-[#967DFC] rounded hover:bg-accent/80 transition-colors">
                            Join
                        </button>
                    </div>
                </div>
                <div className="flex justify-center gap-6">
                    {sociallinks.map((social, index) => (
                        <a 
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            dangerouslySetInnerHTML={{ __html: social.svg }}
                            className="hover:opacity-80 transition-opacity"
                        />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-white">
                    {footerlinks.map((link, index) => (
                        <div key={link.name} className="flex items-center">
                            <a 
                                href={link.link} 
                                className="text-sm hover:text-accent transition-colors px-2"
                            >
                                {link.name}
                            </a>
                            {index !== footerlinks.length - 1 && (
                                <span className="text-white/40">|</span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center text-white/60 text-sm mt-8">
                    <span>
                        Copyright © 2025 Bleacher Report, Inc. A Warner Bros. Discovery Company. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;