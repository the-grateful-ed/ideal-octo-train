"use client"

import React from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"

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

  return (
    <div className="prose mx-auto w-full rounded-xl bg-card p-2 py-6 shadow-lg dark:prose-invert">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="">
          <label className="font-medium">Full name</label>
          <Controller
            name="fullName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
              />
            )}
          />
          {errors.fullName && <p>{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="font-medium">Email</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
              />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label className="font-medium">Company</label>
          <Controller
            name="company"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
              />
            )}
          />
          {errors.company && <p>{errors.company.message}</p>}
        </div>
        <div>
          <label className="font-medium">Message</label>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                {...field}
                className="mt-2 h-36 w-full resize-none appearance-none rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-indigo-600"
              ></textarea>
            )}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600">
          Submit
        </button>
      </form>
    </div>
  )
}
