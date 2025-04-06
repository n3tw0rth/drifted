import { Lightbulb, LightbulbOff, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='absolute w-full flex justify-end pt-4 px-5'>
      {
        theme === "light" ?
          <button onClick={() => setTheme('dark')}><Sun /></button>
          :
          <button onClick={() => setTheme('light')}><Moon /></button>


      }
    </div >
  )
}
