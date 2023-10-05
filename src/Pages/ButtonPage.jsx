import Button from '../Components/Button'
import { GrCircleAlert } from 'react-icons/gr'
import { FaRegBell } from 'react-icons/fa'

export default function ButtonPage() {
  return (
    <div>
      <div className="flex mb-10  gap-x-10 justify-between">
        <Button role="primary" rounded  >click here  </Button>
        <Button role="primary" rounded outline >click here  </Button>
      </div>

      <div className="flex  my-10 justify-between">
        <Button
          role="warning"
          className="mr-1"
          icon={<GrCircleAlert />}
          onClick={() => console.log('hi!!')}
          onMouseOver={() => console.log('onMouseover!!')}
        >
          click
        </Button>

        <Button
          role="warning"
          className="mr-1"
          icon={<GrCircleAlert />}
          onClick={() => console.log('hi!!')}
          onMouseOver={() => console.log('onMouseover!!')}
          outline
        >
          click
        </Button>
      </div>

      <div className="flex  my-10 justify-between">
        <Button role="success" icon={<FaRegBell />}>click </Button>
        <Button role="success" icon={<FaRegBell />} outline>click </Button>
      </div>

      <div className="flex  my-10 justify-between">
        <Button role="danger">click</Button>
        <Button role="danger" outline>click</Button>
      </div>

      <div className="flex  my-10 justify-between">
        <Button role="secondary" rounded >click </Button>
        <Button role="secondary" rounded outline>click </Button>
      </div>
    </div>
  )
}
