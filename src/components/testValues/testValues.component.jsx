import { motion } from "framer-motion"
const TestValues = ({data}) => {
  return(
    <motion.div
    style={{color: 'white'}}
  animate={{ backgroundColor: ['#5D008E',"#44DD25", "#5D008E"]}}
  transition={{
      duration: 0.5,
      repeat: 0
  }}
    >     
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </motion.div>
  )
}

export default TestValues