import React, { lazy, Suspense } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
const Navigation = lazy(() => import('@/components/Navigation/Navigation'));
import Bg from '../assets/images/exemple.jpg'
import { TemplateItem, templates } from '@/constants/Template';
import { useNavigate } from 'react-router-dom';

const Discover: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-four-custom py-16 flex flex-col justify-center">
            <Suspense fallback={<div className='py-3 w-full text-xl fixed top-0'><LoadingOutlined className='mx-auto' /></div>}>
                <Navigation />
            </Suspense>
            <div className="px-[12%]">
                <div className='text-gray-500 text-center my-2'>Les modèles de CV professionnels disponibles dans le site.</div>
                <div className='my-4 grid grid-customized justify-center gap-10'>
                    {
                        templates.map((template: TemplateItem, index: number) => {
                            return <div key={index} onClick={() => navigate(`/personnalize/${template.id}`)} className='rounded transition-all duration-300 hover:scale-[1.03]'>
                                <img src={Bg} alt="Home cv" className='w-full border object-cover rounded' />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Discover;