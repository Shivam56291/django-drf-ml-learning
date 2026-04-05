import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../axiosInstance'

function Dashboard() {
  const navigate = useNavigate()
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get("protected-view/")
        console.log("Protected data:",response.data)
      } catch (error) {
        console.log("Error fetching protected :",error)
      }
    }
    fetchProtectedData()
  }, [])
  return (
    <div className='text-light'>Dashboard</div>
  )
}

export default Dashboard  