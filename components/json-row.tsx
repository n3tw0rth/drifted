"use client"
import { Asterisk, ChevronDown, ChevronRight } from "lucide-react"
import { ReactNode, useState } from "react"
import { Badge } from "./ui/badge"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"
import { icons } from "@/data/icons"

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
  const getResourceType = (): string => {
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
          <Actions actions={data?.change?.actions} />
          <TitleToolTip title={getTitle()}>
          </TitleToolTip>
        </div>
        {
          //<span>
          //  <img src={icons[getResourceType()]} className="w-6" />
          //</span>
        }
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
    //return <span>[{value.length} items]</span>
    return <pre>
      {JSON.stringify(value, null, 2)}
    </pre>
  }

  if (typeof value === "object") {
    const keys = Object.keys(value)
    if (keys.length === 0) return "{}"
    return (
      <span>
        {JSON.stringify(value, null, 2)}
      </span>
    )
  }

  return String(value)
}

// this components should return a list of actions related components
function Actions({ actions }: { actions: [string] }) {
  const actionComponents = actions?.map((action, index) => {
    switch (action) {
      case "create":
        return <Asterisk key={`create${index}`} className="text-green-500 -mx-1" />
      case "recreate":
        return <Asterisk key={`recreate{index}`} className="text-blue-500 -mx-1" />
      case "update":
        return <Asterisk key={`delete{index}`} className="text-yellow-500 -mx-1" />
      case "delete":
        return <Asterisk key={`delete{index}`} className="text-red-500 -mx-1" />
      default:
        return <Asterisk key={`non${index}`} className="text-gray-500 -mx-1" />
    }
  })

  return actionComponents
}

function TitleToolTip({ title }: { title: string }) {
  const wrappedTitle =
    title?.length > 50 ? title.slice(0, 50).concat("....") : title
  return <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="ml-3">
        {wrappedTitle}
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {title}
        </p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
}
