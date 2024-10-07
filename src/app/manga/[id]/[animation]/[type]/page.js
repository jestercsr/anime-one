"use client";
import React, { Suspense } from 'react'
import ReactLoading from 'react-loading';
import TypeContenu from './ui/TypeContenu';

export default function PageTypeAnimation({ params }) {
  return (
    <>
      <Suspense fallback={<div><ReactLoading type="bubbles" color="#ffffff" height={'3%'} width={'3%'} /></div>}>
        <TypeContenu props={params.id} animation={params.animation} type={params.type}/>
      </Suspense>
    </>
  );
}
