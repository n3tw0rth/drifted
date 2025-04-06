"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Upload, FileJson, AlertCircle, ChevronDown, ChevronRight, X, FileUp, Asterisk, Lightbulb, CircleHelpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { JsonRow } from "@/components/json-row"
import { HelpDialog } from "@/components/help-dialog"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const [resourceChanges, setResourceChanges] = useState<any[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = useState(true)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    const file = event.target.files?.[0]

    if (!file) return

    // Check if file is JSON
    if (file.type !== "application/json" && !file.name.endsWith(".json")) {
      setError("Only JSON files are allowed")
      return
    }

    setFileName(file.name)
    const reader = new FileReader()

    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        const parsedData = JSON.parse(content)

        // Extract resource_changes field if it exists
        if (parsedData.resource_changes && Array.isArray(parsedData.resource_changes)) {
          // filter out resource with no-op action (resouce which are not modified)
          const filteredResourceChanges = parsedData.resource_changes.filter((resource: any) => !(resource.change.actions as string[]).includes("no-op"))
          setResourceChanges(filteredResourceChanges)
        }
        setDialogOpen(false)
      } catch (error) {
        setError("Invalid JSON format")
      }
    }

    reader.onerror = () => {
      setError("Error reading file")
    }

    reader.readAsText(file)
  }

  useEffect(() => {
    console.log({ resourceChanges })
  }, [resourceChanges])

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <ThemeToggle />
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col items-center justify-center space-y-6 mb-10">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight flex -ml-5">
              <Asterisk className="text-green-400" />
              Drifted
              <HelpDialog />
            </h1>
          </div>

          <p className="text-muted-foreground text-center max-w-xl">
            Visualize your Terraform state securely, entirely on the client side. No servers, no data exposure. Simply upload your Terraform state JSON file and explore your infrastructure safely
          </p>

          <div className="flex items-center gap-4">
            {
              !fileName &&
              <Button onClick={() => setDialogOpen(true)} className="flex items-center gap-2" size="lg">
                <Upload size={16} />
                Upload JSON
              </Button>
            }

            {resourceChanges && (
              <Button
                variant="outline"
                onClick={() => {
                  setResourceChanges(null)
                  setFileName(null)
                  setDialogOpen(true)
                }}
                size="lg"
              >
                <X size={16} className="mr-2" />
                Clear Data
              </Button>
            )}
          </div>

          {fileName && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileUp size={14} />
              <span>
                Current file: <span className="font-mono font-medium">{fileName}</span>
              </span>
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="max-w-md">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>

        <Dialog open={dialogOpen && !resourceChanges} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload JSON File</DialogTitle>
              <DialogDescription>Please upload a JSON file to view its contents</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="border-2 border-dashed rounded-lg p-10 border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors cursor-pointer">
                <div className="flex flex-col items-center justify-center gap-4">
                  <FileJson className="h-10 w-10 text-primary" />
                  <p className="text-sm text-muted-foreground text-center">
                    Drag and drop your JSON file here, or click to browse
                  </p>
                  <input
                    type="file"
                    accept=".json,application/json"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileUpload}
                  />
                  <Button size="sm">Select File</Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {resourceChanges && (
          <div className="flex flex-col space-y-4 w-full max-w-6xl mx-auto">
            <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
              <div className="bg-muted/50 px-4 py-3 border-b flex items-center justify-between">
                <div className="font-medium">
                  {resourceChanges.length} {resourceChanges.length === 1 ? "resource" : "resources"} found
                </div>
              </div>
              <div className="divide-y">
                {resourceChanges.map((item, index) => (
                  <JsonRow key={index} data={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}


