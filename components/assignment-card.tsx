import { Button } from "@/components/ui/button"

interface AssignmentCardProps {
  assignment: {
    id: number
    name: string
    address: string
    jobNumber: string
  }
}

export default function AssignmentCard({ assignment }: AssignmentCardProps) {

  const addressParts = assignment.address.split(", ");
  return (
    <div className="p-4 border-b flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{assignment.name}</h4>
          <p className="text-sm text-gray-500">
            {addressParts[0]} <br />
            {addressParts[1]}{" "}
            {addressParts.slice(2).join(" ")}
          </p>
          {/* <p className="text-sm text-gray-500">{assignment.address}</p> */}
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500">{assignment.jobNumber}</span>
          <Button  variant="ghost"
                size="sm" className="mt-2 w-full  bg-muted border h-7">
            Assign
          </Button>
        </div>
      </div>
    </div>
  )
}

