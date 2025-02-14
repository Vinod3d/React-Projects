import Navbar from '@/components/Navbar'
import './globals.css'
import { Roboto} from 'next/font/google';
import { Metadata } from 'next';


const roboto = Roboto({subsets:['latin'], weight:['400']});

export const metadata:Metadata = {
  title: 'Next.js Tutorial',
  description: 'Build awesome stuff with Next.js!',
  keywords: 'Next.js, Typescript, TailwindCSS'
};


export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html>
      <body 
      className={roboto.className}
      cz-shortcut-listen="true"
      >
        <Navbar/>
        <main className='max-w-3xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}