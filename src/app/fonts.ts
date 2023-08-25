import { Inter, Roboto_Mono, Courier_Prime } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const courier_prime = Courier_Prime({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-courier',
  })