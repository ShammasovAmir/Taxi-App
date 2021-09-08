import React, { useEffect } from 'react'

const Map = () => {
  useEffect(() => {
    renderMap()
  }, [])

  const renderMap = (): void => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${
        import.meta.env.VITE_MAP_KEY
      }&callback=initMap`
    )
    window.initMap = initMap
  }

  const loadScript = (url: string): void => {
    const index: HTMLScriptElement =
      window.document.getElementsByTagName('script')[0]
    const script: HTMLScriptElement = window.document.createElement('script')
    script.src = url
    script.async = true
    script.defer = true

    if (index.parentNode === null) {
      console.error('No script tag found')
      return
    }
    index.parentNode.insertBefore(script, index)
  }

  let map: google.maps.Map
  const center: google.maps.LatLngLiteral = { lat: 56.839439, lng: 53.218803 }

  const initMap = () => {
    map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center,
      zoom: 18,
    })

    // Access to map methods
    window.map = map
  }

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>
}

export default Map
