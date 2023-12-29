"use client";

import styles from "./page.module.css";
import "@/app/global.css";
import "@/app/global.css";
import Link from "next/link";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

// Contact form

export default function Contact() {
  const form = useRef();
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_46g0xlm",
        "template_z3msfbk",
        form.current,
        "i88ka1lVlzUj01fH4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          setResult("Email sent Successful");
          //router.push("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const formHandler = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("/api/contact", {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify({
  //       name: e.target.name.value,
  //       email: e.target.email.value,
  //       message: e.target.message.value,
  //     }), // body data type must match "Content-Type" header
  //   });

  //   console.log("form", response);
  // };

  return (
    <div>
      <h1 className="page-title">CONTACT ME</h1>
      You can contact me at abaldua@calpoly.edu.
      <main>
        <h2>{result}</h2>
        <p>Contact Form</p>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          ></textarea>
          <input type="submit" value="Submit" />{" "}
        </form>
      </main>
      <footer>© 2023 Aryan Baldua | All Rights Reserved</footer>
    </div>
  );
}
