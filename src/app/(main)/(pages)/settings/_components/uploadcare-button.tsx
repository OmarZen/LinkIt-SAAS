'use client'
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'
import "@uploadcare/react-uploader/core.css"
import { FileUploaderRegular } from '@uploadcare/react-uploader';

type Props = {
  onUpload: (e: string) => any
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }
    if (ctxProviderRef.current) {
        ctxProviderRef.current.addEventListener('file-upload-success', handleUpload)
    }
  }, [])

  return (
    <div>
        <FileUploaderRegular
    pubkey="7a10b7e0efe8f7d100eb"
    maxLocalFileSizeBytes={10000000}
    imgOnly={true}
    sourceList="local, url, camera, dropbox"
/>
      {/* <lr-config
        ctx-name="my-uploader"
        pubkey="7a10b7e0efe8f7d100eb"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      /> */}
    </div>
  )
}

export default UploadCareButton