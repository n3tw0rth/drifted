import { Asterisk, ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Badge } from "./ui/badge"

interface JsonRowProps {
  data: any
  index: number
}

export function JsonRow({ data, index }: JsonRowProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Get title from the data - prioritize resource-specific fields
  const getTitle = () => {
    if (data.address) return data.address
  }

  // Get resource type if available
  const getResourceType = () => {
    return data.type || "Unknown Type"
  }

  return (
    <div className="bg-card">
      <div
        className="flex items-center p-4 cursor-pointer hover:bg-muted/30 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="mr-2 text-muted-foreground">
          {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>
        <div className="font-medium truncate flex">
          <Actions actions={data.change.actions} />
          {getTitle()}</div>
        <Badge variant="outline" className="ml-2 font-mono text-xs">
          {getResourceType()}
        </Badge>
      </div>

      {isExpanded && (
        <div className="overflow-hidden">
          <div className="border-t px-4 py-3 bg-muted/10">
            <div className="space-y-2">
              {Object.entries(data.change.after).map(([key, value]) => (
                <div key={key} className="grid grid-cols-12 gap-4">
                  <div className="col-span-3 font-mono text-sm json-key">{key}:</div>
                  <div className="col-span-9 font-mono text-sm break-words">{formatJsonValue(value)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Helper function to format JSON values with syntax highlighting
function formatJsonValue(value: any): React.ReactNode {
  if (value === null) {
    return <span className="json-null">null</span>
  }

  if (typeof value === "string") {
    return <span className="json-string">"{value}"</span>
  }

  if (typeof value === "number") {
    return <span className="json-number">{value}</span>
  }

  if (typeof value === "boolean") {
    return <span className="json-boolean">{String(value)}</span>
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return "[]"
    return <span>[{value.length} items]</span>
  }

  if (typeof value === "object") {
    const keys = Object.keys(value)
    if (keys.length === 0) return "{}"
    return (
      <span>
        {JSON.stringify(value)}
      </span>
    )
  }

  return String(value)
}

// this components should return a list of actions related components
function Actions({ actions }: { actions: [string] }) {
  const actionComponents = actions.map(action => {
    switch (action) {
      case "create":
        return <Asterisk className="text-green-500" />
      case "delete":
        return <Asterisk className="text-red-500" />
      default:
        return <Asterisk className="text-gray-500" />
    }
  })

  return actionComponents
}
