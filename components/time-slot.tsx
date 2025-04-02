interface TimeSlotProps {
  time: string
}

export default function TimeSlot({ time }: TimeSlotProps) {
  return (
    <div className="p-4 border-r border-b text-center">
      <span className="text-sm">{time}</span>
    </div>
  )
}

