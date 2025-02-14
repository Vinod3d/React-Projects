import cameraImg from '@/images/camera.jpg';
import Image from 'next/image';

const url = 'https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_640.jpg'
const page = ({params}:{params:{id:string}}) => {
  return (
    <div>
        <h1 className="text-4xl">ID : {params.id}</h1>
        <section className='flex gap-x-4 mt-4'>
          <div>
            <Image src={cameraImg} width={200} height={200} alt='camera'/>
            <h2>local image</h2>
          </div>
          <div>
            <Image src={url} width={200} height={200} alt='background'/>
          </div>
        </section>
    </div>
  )
}

export default page