"use client"
import { ArrowRight, Asterisk, ChevronDown, ChevronRight } from "lucide-react"
import { ReactNode, useState } from "react"
import { Badge } from "./ui/badge"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface JsonRowProps {
  data: any
  index: number
}

export function JsonRow({ data, index }: JsonRowProps) {
  // client side code will panic when after values are null
  // this will prevent that, but will replace by before values marked as destroying
  if (data.change.after === null) {
    data.change.after = {
      destroying: true
    }
  }

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
    <div className="w-full">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/30 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="mr-2 text-muted-foreground">
            {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>
          <div className="font-medium truncate flex">
            <Actions actions={data?.change?.actions} />
            <TitleToolTip title={getTitle()}>
            </TitleToolTip>
          </div>
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
                  <TransformBeforeandAfter key={key} data={data} value={value} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function TransformBeforeandAfter({ key, data, value }: { key: string, data: any, value: any }): ReactNode {
  // if action is create before values is null, so do not need to show the change 
  let returnValue: ReactNode = <></>
  if (data.change.actions.includes("create")) {
    returnValue = formatJsonValue(value)
  }
  else {
    // check if the begore  and after values are the same
    // easiest way to do this is to compare the stringified values
    console.log(key, value)
    returnValue = <>{findBeforeValue(data, key)}{formatJsonValue(value)}</>
  }

  return <>
    <div className="col-span-3 font-mono text-sm json-key">{key}:</div>
    <div className="col-span-9 font-mono text-sm break-words flex items-center gap-2">{returnValue}</div>
  </>
}

function findBeforeValue(data: any, key: string) {
  if (data.change.before) {
    return data.change.before[key]
  }
  return null
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
    title?.length > 60 ? title.slice(0, 60).concat("....") : title
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
