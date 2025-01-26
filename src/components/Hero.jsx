import React from 'react'

const Hero = () => {
  return (
<section>
    <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
            Benson <br /> Langford
        </h1>
        <div className="mt-8">
            <a href="/Benson-Langford.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className='flex items-center rounded-xl bg-lime-300 p-2
            px-3 font-sans font-medium text-black hover:bg-lime-400'>
                <span>Resume.pdf</span>
            </a>

        </div>
    </div>
</section>  
)
}

export default Hero