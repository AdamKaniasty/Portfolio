import {useEffect, useState} from "react"

function IsVisibleHook(ref) {

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => { observer.disconnect() }
    })
  
    return isIntersecting
  }

  export default IsVisibleHook