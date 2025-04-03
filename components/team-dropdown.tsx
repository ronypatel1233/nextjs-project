"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamDropdownProps {
  value: string
  onValueChange: (value: string) => void
}

const teamOptions = [
  { value: "all", label: "Teams" },
  { value: "team-a", label: "ReactJS" },
  { value: "team-b", label: "NodeJS" },
  { value: "team-c", label: "Flutter" },
]

export default function TeamDropdown({ value, onValueChange }: TeamDropdownProps) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const currentLabel = teamOptions.find((option) => option.value === value)?.label || "Team"

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1 w-[130px] justify-between"
        onClick={() => setOpen(!open)}
      >
        <span className="truncate">{currentLabel}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </Button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-[180px] bg-white border rounded-md shadow-lg z-50">
          {teamOptions.map((option) => (
            <div
              key={option.value}
              className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onValueChange(option.value)
                setOpen(false)
              }}
            >
              <div className="flex-1">{option.label}</div>
              {value === option.value && <Check className="h-4 w-4 text-primary" />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

