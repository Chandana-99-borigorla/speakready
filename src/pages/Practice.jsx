import { useParams } from 'react-router-dom'

const Practice = () => {
  const { mode } = useParams()
  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center pt-20">
      <h1 className="text-white text-2xl font-bold">Practice Mode: {mode}</h1>
    </div>
  )
}

export default Practice