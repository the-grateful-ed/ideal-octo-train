"use client"

import React from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { Mail, MapPin, Phone } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  company: yup.string().required("Company is required"),
  message: yup.string().required("Message is required"),
})

export default function ContactPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  const contactMethods = [
    {
      icon: <Mail />,
      contact: "edndacomputer@riseup.net",
    },
    {
      icon: <Phone />,
      contact: "+1 (805) 858-8602",
    },
    {
      icon: <MapPin />,
      contact: "Ventura, California, United State.",
    },
  ]

  return (
    <main>
      <div className="prose mx-auto w-full rounded-xl bg-card p-2 py-4 shadow-lg dark:prose-invert">
        <div className="mx-auto max-w-sm space-y-0.5">
          <h1>Contact</h1>
          <h3>Let us know how we can help</h3>
          <p>
            We’re here to help and answer any question you might have, We look
            forward to hearing from you! Please fill out the form, or us the
            contact information bellow .
          </p>
          <div>
            <ul className="mt-0.5 flex flex-wrap items-center justify-start">
              {contactMethods.map((item, idx) => (
                <li key={idx} className="flex items-center gap-x-3">
                  <div className="flex">{item.icon}</div>
                  <p>{item.contact}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-sm flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Label>Full name</Label>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2   shadow-sm outline-none  "
                  />
                )}
              />
              {errors.fullName && (
                <p className="text-xs italic text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <Label>Email</Label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2   shadow-sm outline-none  "
                  />
                )}
              />
              {errors.email && (
                <p className="text-xs italic text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label className="font-medium">Company</Label>
              <Controller
                name="company"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2   shadow-sm outline-none  "
                  />
                )}
              />
              {errors.company && (
                <p className="text-xs italic text-red-500">
                  {errors.company.message}
                </p>
              )}
            </div>
            <div>
              <Label className="font-medium">Message</Label>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Textarea
                    {...field}
                    className="mt-2 h-36 w-full resize-none appearance-none rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none  "
                  ></Textarea>
                )}
              />
              {errors.message && (
                <p className="text-xs italic text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>
            <Button type="submit">Submit</Button>
            <Button variant="secondary" type="button" onClick={() => reset()}>
              Reset
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
