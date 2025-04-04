import { Lightbulb, LightbulbOff } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='absolute w-full flex justify-end pt-4 px-5'>
      {
        theme === "light" ?
          <button onClick={() => setTheme('dark')}><LightbulbOff /></button>
          :
          <button onClick={() => setTheme('light')}><Lightbulb /></button>
      }
    </div >
  )
}
