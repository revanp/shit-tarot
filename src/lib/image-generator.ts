import { toPng, toBlob } from "html-to-image"

export async function generateCardImageBlob(element: HTMLElement): Promise<Blob | null> {
  return await toBlob(element, {
    pixelRatio: 2,
    quality: 0.95,
    cacheBust: true,
  })
}

export async function generateCardImageDataUrl(element: HTMLElement): Promise<string> {
  return await toPng(element, {
    pixelRatio: 2,
    quality: 0.95,
    cacheBust: true,
  })
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
