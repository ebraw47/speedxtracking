"use client";

import { FormEvent, useState } from "react";

export default function DiscoveryForm() {
  const [success, setSuccess] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSuccess(true);
    form.reset();
  }

  return (
    <form className="discovery-form" id="discovery-form" noValidate onSubmit={onSubmit}>
      <h3>Book a discovery call</h3>
      <div className="discovery-fields">
        <label>
          First Name <span aria-hidden="true">*</span>
          <input
            type="text"
            name="firstName"
            required
            autoComplete="given-name"
          />
        </label>
        <label>
          Last Name <span aria-hidden="true">*</span>
          <input
            type="text"
            name="lastName"
            required
            autoComplete="family-name"
          />
        </label>
        <label>
          Business Email <span aria-hidden="true">*</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label>
          Phone Number <span aria-hidden="true">*</span>
          <input type="tel" name="phone" required autoComplete="tel" />
        </label>
        <label>
          Company Name <span aria-hidden="true">*</span>
          <input
            type="text"
            name="company"
            required
            autoComplete="organization"
          />
        </label>
        <label>
          Job Title <span aria-hidden="true">*</span>
          <input
            type="text"
            name="jobTitle"
            required
            autoComplete="organization-title"
          />
        </label>
        <label>
          Primary Industry <span aria-hidden="true">*</span>
          <select name="industry" required defaultValue="">
            <option value="">Please Select</option>
            <option>Retail / Ecommerce</option>
            <option>Marketplace</option>
            <option>3PL / Logistics</option>
            <option>Cross-Border Shipper</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Average Packages Shipped Per Day <span aria-hidden="true">*</span>
          <select name="volume" required defaultValue="">
            <option value="">Please Select</option>
            <option>1 – 100</option>
            <option>101 – 500</option>
            <option>501 – 2,000</option>
            <option>2,001 – 10,000</option>
            <option>10,000+</option>
          </select>
        </label>
        <label className="full">
          Preferred language <span aria-hidden="true">*</span>
          <select name="language" required defaultValue="">
            <option value="">Please Select</option>
            <option>English</option>
            <option>Spanish</option>
            <option>Chinese</option>
            <option>Other</option>
          </select>
        </label>
        <label className="full">
          Anything else you would like us to know?
          <textarea
            name="notes"
            rows={4}
            placeholder="Optional message"
          />
        </label>
      </div>
      <button type="submit" className="btn-discovery-submit">
        Submit
      </button>
      {success && (
        <p className="discovery-success">
          Thanks — your discovery request has been submitted.
        </p>
      )}
    </form>
  );
}
