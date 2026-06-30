"use client"

import * as React from "react"
import { addDays } from "date-fns"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/registry/ui/calendar"

export default function CalendarWithRange() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  return (
    <Calendar
      mode="range"
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      className="rounded-md border shadow"
    />
  )
}
