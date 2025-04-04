import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { CircleHelpIcon } from "lucide-react"

export function HelpDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <CircleHelpIcon className="ml-3 w-4" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Help</AlertDialogTitle>
          <AlertDialogDescription>
            <p className="">
              It is easy to use the tool, add the following lines to your terraform script to
              save the plan to a file and convert that to json format.
            </p>
            <pre className="p-4 rounded-lg overflow-auto text-sm">
              <code className="language-shell">
                terraform plan -out "tfplan"
                {"\n"}terraform show -json "tfplan"
              </code>
            </pre>
            <p className="">
              this tool is a written as an alternative to a TUI that i am currently working on, check
              that out{" "}
              <a
                href="https://github.com/n3tw0rth/terraformed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                here
              </a>
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Okay</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
