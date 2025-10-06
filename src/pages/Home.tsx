import React, { lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightOutlined, LoadingOutlined } from '@ant-design/icons';
const Navigation = lazy(() => import('@/components/Navigation/Navigation'));
const Typewriter = lazy(() => import('@/components/TypeWritter'));
import Bg from '../assets/images/exemple.jpg'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    return (
        <div className="bg-[url(assets/images/home-bg.jpg)] bg-no-repeat bg-center bg-cover h-screen pt-10 flex flex-col justify-center">
            <Suspense fallback={<div className='py-3 w-full text-xl fixed top-0'><LoadingOutlined className='mx-auto' /></div>}>
                <Navigation />
            </Suspense>
            <div className="px-[12%] flex justify-between items-center gap-4">
                <div className='w-1/3'>
                    <div className='font-extrabold text-4xl'>
                        <Suspense fallback={<div className='py-3 w-full text-xl'><LoadingOutlined className='mx-auto' /></div>}>
                            <Typewriter text='Créez le CV qui vous fait recruter.' />
                        </Suspense>
                    </div>
                    <div className='my-8 text-gray-500'>Des modèles professionnels, une personnalisation complète. Générer-o rend la candidature simple et efficace. </div>
                    <Link to='/discover'>
                        <Button>Commencer <ArrowRightOutlined className='text-xs' /></Button>                    
                    </Link>
                </div>
                <div className='w-1/3 text-right rounded shadow-2xl'>
                    <img src={Bg} alt="Home cv" className='w-full object-cover rounded' />
                </div>
            </div>
        </div>
    )
}

export default Home;