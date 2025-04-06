"use client"

import { ArrowRight, Asterisk, ChevronDown, ChevronRight, Copy, MoveRight } from "lucide-react"
import { ReactNode, useState } from "react"
import { Badge } from "./ui/badge"
import copy from "copy-to-clipboard"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "./ui/button"

interface JsonRowProps {
  data: any
  index: number
  showUnchanged: boolean
}

interface TransformProps {
  fieldKey: any, data: any, value: any, showUnchanged: boolean
}

export function JsonRow({ data, index, showUnchanged }: JsonRowProps) {
  // client side code will panic when after values are null
  // this will prevent that, but will replace by before values marked as destroying
  if (data.change.after === null) {

    data.change.before = {
      destroying: null
    }
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
    <div className="w-auto">
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
        <Badge variant="outline" className="ml-2 font-mono text-xs">
          {getResourceType()}
        </Badge>
      </div>

      {isExpanded && (
        <div className="overflow-auto w-full">
          <div className="border-t px-4 py-3 bg-muted/10">
            <div className="space-y-2">
              {Object.entries(data.change.after).map(([key, value]) => (
                <TransformBeforeandAfter fieldKey={key} data={data} value={value} showUnchanged={showUnchanged} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function TransformBeforeandAfter({ fieldKey, data, value, showUnchanged }: TransformProps): ReactNode {
  const before = findBeforeValue(data, fieldKey)
  const after = value
  // if action is create before values is null, so do not need to show the change 
  let returnValue: ReactNode = null
  if (data.change.actions.includes("create")) {
    returnValue = formatJsonValue(after)
  }
  else {
    // check if the begore  and after values are the same
    // easiest way to do this is to compare the stringified values
    if (!compareJsonValues(before, after)) {
      returnValue = <span className="flex items-center">{formatJsonValue(before)}<MoveRight className="w-4 mx-2" />{formatJsonValue(after)}</span>
    }
    else {
      if (showUnchanged) {
        // unchanged values are italic and grayscaled
        returnValue = <span className="italic text-gray-500 grayscale">{formatJsonValue(after)}</span>
      }
    }
  }

  if (returnValue !== null) {
    return <div key={fieldKey} className="grid grid-cols-12 gap-4">
      <div className="col-span-3 font-mono text-sm json-key">{fieldKey}:</div>
      <div className="col-span-9 font-mono text-sm break-words flex items-center gap-2">{returnValue}</div>
    </div>
  }
}

// Helper function to compare two formatted JSON values
function compareJsonValues(beforeValue: any, afterValue: any): boolean {
  console.log({ beforeValue, afterValue })
  if (JSON.stringify(beforeValue) === JSON.stringify(afterValue)) {
    return true
  }
  return false
}

// Helper function to find the before value of a field and 
// style them using the same logic as the after value
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
    const jsonValue = JSON.stringify(value, null, 2)
    //return <span>[{value.length} items]</span>
    return (
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-end">
          <Button size={"sm"} variant={"ghost"} onClick={() => copy(jsonValue, { debug: true })}><Copy className="" /></Button>
        </div>
        <pre className="text-wrap">
          {jsonValue}
        </pre>
      </div >
    )
  }

  if (typeof value === "object") {
    const keys = Object.keys(value)
    if (keys.length === 0) return "{}"

    const jsonValue = JSON.stringify(value, null, 2)
    return (
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-end">
          <Button size={"sm"} variant={"ghost"} onClick={() => copy(jsonValue, { debug: true })}><Copy className="" /></Button>
        </div>
        <pre>
          {jsonValue}
        </pre>
      </div>
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
