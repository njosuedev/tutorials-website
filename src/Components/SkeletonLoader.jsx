import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css'; // Import default styles
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './Skeleton.css'

const SkeletonLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <div className='topHome'>
        <div className='topAccount'>
            <Skeleton style={{borderRadius:'50%'}} height={60} width={60} />
            <Skeleton height={40} width={182} count={1}/>
        </div>
        <div className='titleDescripttion'>
          <Skeleton height={20} width={250} count={1}/>
        </div>
    </div>
    <div className="skeleton-loader">
      <div className='left'>
        <Skeleton height={200} width={340} />
        <Skeleton height={30} width={200} />
        <Skeleton count={3} />
      </div>
      <div className='right'>
        <Skeleton height={200} width={340} />
        <Skeleton height={30} width={200} />
        <Skeleton count={3} />
      </div>
    </div>
    <div className="skeleton-loader">
      <div className='left'>
        <Skeleton height={200} width={340} />
        <Skeleton height={30} width={200} />
        <Skeleton count={3} />
      </div>
      <div className='right'>
        <Skeleton height={200} width={340} />
        <Skeleton height={30} width={200} />
        <Skeleton count={3} />
      </div>
    </div>
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
